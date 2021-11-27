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
  html, body {
    height: 100%;
    /* overscroll-behavior-x: none; */
  }

  body {
    padding: 0;
    margin: 0;
    /* overflow-x: hidden;
    font-size: 14px; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
