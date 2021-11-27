<template>
    <div id="nav">
        <span>{{ title }}</span>
        <button>Найти путешественника</button>
        <button>Опубликовать поездку</button>
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
    </div>
</template>

<script>


export default {
    data() {
        return {
            title: 'sky'
        }
    }
}
</script>

<style lang="scss">
    #nav {
        padding: 30px;
        button {
            border: 1px solid green;
        }
    }

</style>
