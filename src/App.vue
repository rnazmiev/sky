<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  components: {
      DefaultLayout
  },
  data() {
    return {
       layout: DefaultLayout
    }
  }
}
</script>

<style>


</style>
