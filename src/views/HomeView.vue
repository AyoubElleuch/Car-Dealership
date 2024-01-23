<script>
import navbar from '../components/NavBar.vue';
import CarsExhibition from '@/components/CarsExhibition.vue';
import CarFilters from '@/components/CarFilters.vue';
import CarContact from '@/components/CarContact.vue';
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
