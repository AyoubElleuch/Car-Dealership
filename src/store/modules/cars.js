export default{
    namespaced: true,
    state:{
        cars: [],
        filters: {
            brands: [],
            years: [],
            price: 900000,
            colors: [],
        },
        sort: "",
    },
    mutations:{
        SET_CARS(state, cars){
            state.cars = cars;
        },
        setFiltersBrands(state, brands){
            state.filters.brands = brands;
        },
        setFiltersYears(state, years){
            state.filters.years = years;
        },
        setFiltersPrice(state, price){
            state.filters.price = price;
        },
        setFiltersColors(state, colors){
            state.filters.colors = colors;
        },
        setSort(state, sort){
            state.sort = sort;
        }
    },
    actions:{
        fetchCars({ commit }){
            fetch('http://127.0.0.1:8000/api/all/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(cars => {
                commit('SET_CARS', cars);
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    getters:{
        getCars(state){
            return state.cars;
        },
        getFilters(state){
            return state.filters;
        },
        getSort(state){
            return state.sort;
        }
    }
}