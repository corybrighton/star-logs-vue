<template>
  <div>
    <form @submit.prevent="register">
      <input type="text" v-model="creds.name" placeholder="Name">
      <input type="text" v-model="creds.email" placeholder="email">
      <input type="password" v-model="creds.password" placeholder="password">
      <button type="submit">Register</button>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'RegisterForm',
    data() {
      return {
        creds: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      register() {
        this.$store.dispatch('register', this.creds)
      }
    }
  }
</script>