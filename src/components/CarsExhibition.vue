<template>
    <div class="wrapper">
        <div class="sort-wrapper">
            <h2 class="IBM-Plex-Mono">SORT</h2>
            <select class="IBM-Plex-Mono" name="Newest" id="">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Cheap">Cheap</option>
                <option value="Expensive">Expensive</option>
            </select>
        </div>
        <div class="car-wrapper">
            <div class="car-container crimson-text" v-for="(item, index) in fetchCars" :key="index">
                <img class="car-image" :src="item.image" alt="">
                <div class="car-info">
                    <img class="car-brand-logo" :src="item.logo" alt="">
                    <h1 class="car-model">{{ item.model }}</h1>
                    <h2 class="car-price">{{ item.price }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default{
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters('cars', ['getCars']),
        fetchCars(){
            return this.getCars;
        }
    },
    methods:{

    }
}
</script>
<style scoped>
.wrapper{
    padding: 20px 0;
}
.sort-wrapper{
    display: flex;
}
.sort-wrapper > h2{
    margin-right: 20px;
}
select{
    background-color: #D9D9D9;
    border: none;
    padding: 5px;
    font-weight: 500;
}
.car-wrapper{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.car-container{
    width: 300px;
    margin: 10px;
}
.car-image{
    width: 300px;
}
.car-info{
    position: relative;
}
.car-brand-logo{
    position: absolute;
    width: 35px;
    right: 5px;
}
.car-model{
    font-size: 18px;
}
.car-price{
    color: #555;
    font-size: 16px;
}
</style>