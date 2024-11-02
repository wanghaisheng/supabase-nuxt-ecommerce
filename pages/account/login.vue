<template>
  <AuthCard is-login>
    <form class="space-y-6" @submit="onSubmit">
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="email">Email</Label>
          <Input
            id="email"
            v-model="email"
            placeholder="Email"
            type="email"
            class="w-full"
          />
          <span v-if="errors.email" class="text-sm text-red-500">{{
            errors.email
          }}</span>
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="password">Password</Label>
          <Input
            id="password"
            v-model="password"
            placeholder="Password"
            type="password"
            class="w-full"
          />
          <span v-if="errors.password" class="text-sm text-red-500">{{
            errors.password
          }}</span>
        </div>
      </div>
      <span v-if="errorMsg" class="text-sm text-red-500">{{ errorMsg }}</span>
      <Button type="submit">Login</Button>
    </form>
  </AuthCard>
</template>

<script lang="ts" setup>
import AuthCard from '~/components/account/AuthCard.vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const errorMsg = ref('')

const { loginSchema } = validators()

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')

const { handleSubmit, errors } = useForm({
  validationSchema: loginSchema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })
    if (error) {
      throw createError({
        name: 'Login failed',
        message: error.message,
      })
    }
  } catch (error) {
    errorMsg.value = error.message
    console.log(error)
  }
})

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>

<style></style>
