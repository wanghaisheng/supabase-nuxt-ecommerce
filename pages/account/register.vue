<template>
  <AuthCard>
    <form class="space-y-6" @submit="onSubmit">
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="firstName">First Name</Label>
          <Input
            id="firstName"
            v-model="firstName"
            placeholder="First Name"
            type="text"
            class="w-full"
          />
          <span v-if="errors.firstName" class="text-sm text-red-500">{{
            errors.firstName
          }}</span>
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="lastName">Last Name</Label>
          <Input
            id="lastName"
            v-model="lastName"
            placeholder="Last Name"
            type="text"
            class="w-full"
          />
          <span v-if="errors.lastName" class="text-sm text-red-500">{{
            errors.lastName
          }}</span>
        </div>
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

        <div class="flex flex-col space-y-1.5">
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            class="w-full"
          />
          <span v-if="errors.confirmPassword" class="text-sm text-red-500">{{
            errors.confirmPassword
          }}</span>
        </div>
      </div>
      <span v-if="errorMsg" class="text-sm text-red-500">{{ errorMsg }}</span>
      <Button type="submit">Sign up</Button>
    </form>
  </AuthCard>
</template>

<script lang="ts" setup>
import AuthCard from '~/components/account/AuthCard.vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const errorMsg = ref('')

const { signupSchema } = validators()

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')
const { value: confirmPassword } = useField<string>('confirmPassword')
const { value: firstName } = useField<string>('firstName')
const { value: lastName } = useField<string>('lastName')

const { handleSubmit, errors } = useForm({
  validationSchema: signupSchema,
})

const onSubmit = handleSubmit(async (values) => {
  try {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
        },
      },
    })
    if (error) {
      throw createError({
        name: 'Register failed',
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
