<template>
    <div class="main-layout">
        <Navbar/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'DefaultLayout',
    components: {
        Navbar,
        Footer
    }
}
</script>
