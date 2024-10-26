<template>
  <Tabs v-model="tab" class="w-1/2">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="orders">Orders</TabsTrigger>
    </TabsList>

    <TabsContent value="account">
      <ProfileForm />
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabsList, TabsContent, TabsTrigger } from '~/components/ui/tabs'
import ProfileForm from '~/components/account/ProfileForm.vue'
const tab = ref('account')
</script>
