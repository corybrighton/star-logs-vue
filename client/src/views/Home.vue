<template>
  <div class="home">
    <button @click="logout">Logout</button>
    <logs />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Logs from '@/components/Logs.vue'

  export default {
    name: 'home',
    components: {
      Logs
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>