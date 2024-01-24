<template>
    <div class="filter-container IBM-Plex-Mono">
      <h2>FILTERS</h2>
      <div class="filter-group">
        <h3>Brands</h3>
        <div v-for="brand in brands" :key="brand" class="checkbox">
          <input type="checkbox" :id="brand" :value="brand" v-model="selectedBrands">
          <label :for="brand">{{ brand }}</label>
        </div>
      </div>
      <div class="filter-group">
        <h3>Year</h3>
        <div v-for="year in years" :key="year" class="checkbox">
          <input type="checkbox" :id="year" :value="year" v-model="selectedYears">
          <label :for="year">{{ year }}</label>
        </div>
      </div>
      <div class="filter-group">
        <h3>Price</h3>
        <input type="range" min="0" max="900000" step="1000" v-model="price">
        <label>${{ price }}</label>
      </div>
      <div class="filter-group">
        <h3>Color</h3>
        <div v-for="color in colors" :key="color" class="checkbox">
          <input type="checkbox" :id="color" :value="color" v-model="selectedColors">
          <label :for="color">{{ color }}</label>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            selectedBrands: [],
            selectedYears: [],
            selectedColors: [],
            price: 900000
        }
    },
    computed:{
      ...mapGetters('cars', ['getCars']),
      brands(){
        let listOfBrands = this.getCars.reduce((unique, item) => {
          if(!unique.includes(item.brand)){
            unique.push(item.brand);
          }
          return unique;
        }, []);
        return listOfBrands;
      },
      years(){
        let listOfYears = this.getCars.reduce((unique, item) => {
          if(!unique.includes(item.make_year)){
            unique.push(item.make_year);
          }
          return unique;
        }, []);
        return listOfYears;
      },
      colors(){
        let listOfColors = this.getCars.reduce((unique, item) => {
          if(!unique.includes(item.color)){
            unique.push(item.color);
          }
          return unique;
        }, []);
        return listOfColors;
      },
    },
    methods:{
      ...mapMutations('cars', ['setFiltersBrands', 'setFiltersYears', 'setFiltersPrice', 'setFiltersColors']),
      printBrands(){
        console.log(this.selectedBrands);
      }
    },
    watch:{
      selectedBrands(newVal){
        this.setFiltersBrands(newVal);
      },
      selectedYears(newVal){
        this.setFiltersYears(newVal);
      },
      selectedColors(newVal){
        this.setFiltersColors(newVal);
      },
      price(newVal){
        this.setFiltersPrice(newVal);
      }
    }
}
</script>

<style scoped>
.filter-container {
    padding: 20px 30px;
}
.filter-group h3 {
    color: #333;
    margin: 0;
}
.checkbox {
    margin: 0.5em 0;
}
.checkbox input[type='checkbox'] {
    margin-right: 0.5em;
    margin-left: 0.5em;
    background-color: #333;
}

input[type="range"] {
  margin-right: 15px;
  width: 80%;
  height: 3px;
}

.filter-group {
    margin-bottom: 1em;
}
</style>
