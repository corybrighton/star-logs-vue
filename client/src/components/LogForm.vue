<template>
  <div class="LogForm">
    <form @submit.prevent="postLog">
      <input v-model="log.title" type="text" placeholder="title">
      <input v-model="log.body" type="textarea">
      <button type="submit">Submit</button>
    </form>
    {{log.title}}
  </div>
</template>

<script>
  export default {
    name: 'LogForm',
    data() {
      return {
        log: {
          title: '',
          body: ''
        }
      }
    },
    computed: {},
    methods: {
      postLog() {
        this.$store.dispatch('postLog', this.log)
      }
    }
  }

</script>

<style>


</style>