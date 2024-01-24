<script>
import navbar from '../components/HomePageComponents/NavBar.vue';
import CarsExhibition from '@/components/HomePageComponents/CarsExhibition.vue';
import CarFilters from '@/components/HomePageComponents/CarFilters.vue';
import CarContact from '@/components/HomePageComponents/CarContact.vue';
export default{
  components:{
    navbar,
    CarsExhibition,
    CarFilters,
    CarContact,
  },
  data(){
    return{
    }
  },
  computed:{

  },
  methods:{
  }
}
</script>

<template>
  <navbar /> 
  <main class="homepage-wrapper">
    <CarFilters />
    <CarsExhibition />
    <CarContact />
  </main>
</template>

<style scoped>
.homepage-wrapper{
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
}
</style>
