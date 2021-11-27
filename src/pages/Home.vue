<template>
  <div class="home">
      <p>home</p>
  </div>
</template>

<script>

// import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    // Navbar
  }
}
</script>

<style lang="scss">
  .home {
    background-image: url('../assets/bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 45vh;
  }
</style>
