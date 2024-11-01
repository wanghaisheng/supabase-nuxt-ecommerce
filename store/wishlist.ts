import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Tables } from '~/types/database.types'
import { useApiServices } from '@/composables/apiServices'

type WishlistItem = Tables<'wishlist'>

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref<WishlistItem[]>([])
  const user = useSupabaseUser()
  const pendingChanges = ref<Map<number, 'add' | 'remove'>>(new Map())

  const { addToWishlistApi, deleteWishlistItemApi, getWishlistItems } =
    useApiServices()

  function addToWishlist(productId: number) {
    if (!user.value) return

    // Optimistic update
    if (!wishlist.value.some((item) => item.product_id === productId)) {
      wishlist.value.push({ product_id: productId } as WishlistItem)
    }

    // Mark for syncing
    pendingChanges.value.set(productId, 'add')
    addToWishlistApi(user.value.id, productId)
  }

  function removeFromWishList(productId: number) {
    if (!user.value) return

    // Optimistic update
    wishlist.value = wishlist.value.filter(
      (item) => item.product_id !== productId,
    )

    // Mark for syncing
    pendingChanges.value.set(productId, 'remove')
    deleteWishlistItemApi(user.value.id, productId)
  }

  watch(
    user,
    async (newUser) => {
      if (newUser) {
        wishlist.value = await getWishlistItems(newUser.id)
      } else {
        wishlist.value = []
      }
    },
    { immediate: true },
  )

  return {
    wishlist,
    addToWishlist,
    removeFromWishList,
  }
})
