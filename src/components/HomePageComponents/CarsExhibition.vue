<template>
    <div class="wrapper">
        <div class="sort-wrapper">
            <h2 class="IBM-Plex-Mono">SORT</h2>
            <select class="IBM-Plex-Mono" name="Newest" id="" v-model="selectedSort">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Cheap">Cheap</option>
                <option value="Expensive">Expensive</option>
            </select>
        </div>
        <div class="car-wrapper">
                <div class="car-container crimson-text" v-for="(item, index) in getSortedCars" :key="index">
                    <img class="car-image" :src="item.picture" alt="">
                    <div class="car-info">
                        <img class="car-brand-logo" :src="item.logo" alt="">
                        <h1 class="car-model">{{ item.brand }} {{ item.model }}</h1>
                        <h2 class="car-price">{{ item.make_year }}</h2>
                        <h2 class="car-price">{{ formatPrice(item.price) }}</h2>
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
            selectedSort: "Expensive",
        }
    },
    created(){
        this.fetchCars();
    },
    computed:{
        ...mapGetters('cars', ['getCars', 'getFilters']),
        getFetchedCars(){
            return this.getCars;
        },
        brands(){
            return this.getFilters.brands;
        },
        years(){
            return this.getFilters.years;
        },
        price(){
            return this.getFilters.price;
        },
        colors(){
            return this.getFilters.colors;
        },
        getFilteredCars(){
            let filteredCars = this.getFetchedCars;
            if(this.brands.length > 0){
                filteredCars = filteredCars.filter(car => this.brands.includes(car.brand));
            }
            if(this.years.length > 0){
                filteredCars = filteredCars.filter(car => this.years.includes(car.make_year));
            }
            if(this.colors.length > 0){
                filteredCars = filteredCars.filter(car => this.colors.includes(car.color));
            }
            filteredCars = filteredCars.filter(car => car.price <= this.price);
            return filteredCars;
        },
        getSortedCars(){
            let filteredCars = this.getFilteredCars;
            let sortedCars = [];
            if(this.selectedSort == "Expensive"){
                sortedCars = filteredCars.sort((a, b) => {return b.price-a.price});
            }
            else if(this.selectedSort == "Cheap"){
                sortedCars = filteredCars.sort((a, b) => {return a.price-b.price});
            }
            else if(this.selectedSort == "Newest"){
                sortedCars = filteredCars.sort((a, b) => {return b.make_year-a.make_year});
            }
            else if(this.selectedSort == "Oldest"){
                sortedCars = filteredCars.sort((a, b) => {return a.make_year-b.make_year});
            }
            console.log(sortedCars);
            return sortedCars;
        }
    },
    methods:{
        ...mapActions('cars', ['fetchCars']),
        ...mapMutations('cars', ['setSort']),
        formatPrice(price){
            return new Intl.NumberFormat('ja-JP',  {
                        style: 'currency',
                        currency: 'USD',
                        }).format(price);
        }
    },
    watch:{
        selectedSort(){
            this.setSort(this.selectedSort);
        }
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
    margin-left: 10px;
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
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
}
.car-image:hover{
    filter: contrast(1.2);
    transform: scale(1.02);
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

/* Transitions */
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s ease-in-out;
}
.fade-enter-from{
    opacity: 0;
}
.fade-enter-to{
    opacity: 1;
}
.fade-leave-from{
    opacity: 1;
}
.fade-leave-to{
    opacity: 0;
}
</style>