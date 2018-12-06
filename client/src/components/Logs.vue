<template>
  <div class="Logs">
    <h1>
      Logs here
    </h1>
    <button @click="showLogForm = !showLogForm">Post Log</button>
    <log-form v-if="showLogForm"></log-form>
  </div>
</template>

<script>
  import LogForm from "@/components/LogForm.vue"

  export default {
    name: 'Logs',
    data() {
      return {
        showLogForm: false
      }
    },
    computed: {},
    methods: {
      showPostLog() {

      }
    },
    components: {
      LogForm
    }
  }

</script>

<style>


</style>