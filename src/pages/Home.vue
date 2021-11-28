<template>
  <!-- <div class="home">
      <div class="container">
        <h1>Совершенно безопасная доставка посылок путешественниками</h1>
      </div>
  </div> -->
  <div class="home">
    <div class="home-header">
      <div class="container">
        <h1>Совершенно безопасная доставка посылок путешественниками</h1>
      </div>
    </div>
    <div class="how-work mt-5 mb-5">
      <div class="container">
        <h2 class="align-center">Как это работает?</h2>
        <div class="row pt-3">
          <div class="col-lg-4 col-sm-12">
            Найдите путешественника и свяжитесь с ним с помощью нашей службы сообщений.
          </div>
          <div class="col-lg-4 col-sm-12">
            Обсудите чаевые и возможную цену объекта. Используйте наш безопасный платежный модуль, чтобы заблокировать сумму.
          </div>
          <div class="col-lg-4 col-sm-12">
            Путешественник получает оплату после сдачи объекта, а также получает оценку.
          </div>
        </div>
      </div>
    </div>
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
    .home-header {
      background-image: url('../assets/bg.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      width: 100%;
      height: 45vh;
      h1 {
        color: #fff;
        text-align: center;
      }
    }
    .how-work {
      h2 {
        text-align: center;
      }
    }
  }
</style>
