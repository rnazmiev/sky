<template>
    <div id="nav" class="container">
        <div class="navbar">
            <router-link to="/">sky</router-link>
            <div>
                <!-- <button class="btn btn-primary mr-2">Найти путешественника</button> -->
                <!-- <button class="btn btn-success">Опубликовать поездку</button> -->
                <!-- <router-link to="/search-travel">Найти путешественника</router-link>
                <router-link to="/offer-fly">Опубликовать поездку</router-link> -->

                <button class="btn btn-primary mr-2"
                        @click="$router.push('search-travel')">
                        Найти путешественника
                </button>
                <button class="btn btn-success"
                        @click="$router.push('offer-fly')">
                        Опубликовать поездку
                </button>
            </div>
        </div>
        
        
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
        
        .center {
            display: inline-block;
            width: 30%;
            margin: auto;
            button {
                border: 1px solid green;
            }
        }
        
    }

</style>
