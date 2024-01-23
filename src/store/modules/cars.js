export default{
    namespaced: true,
    state:{
        /*cars: [
            {
                model: "Mercedes-benz EQE Sedan",
                brand: "Mercedes-benz",
                logo: "src/assets/images/logos/mercedes-benz-logo.png",
                image: "src/assets/images/cars/mercedes-benz-eqe-sedan.jpg",
                price: "$74,900"
            },
            {
                model: "Ford F-150",
                brand: "Ford",
                logo: "src/assets/images/logos/ford-logo.png",
                image: "src/assets/images/cars/ford-f-150.jpg",
                price: "$70,500"
            },
            {
                model: "Mercedes-benz EQE Sedan",
                brand: "Mercedes-benz",
                logo: "src/assets/images/logos/mercedes-benz-logo.png",
                image: "src/assets/images/cars/mercedes-benz-eqe-sedan.jpg",
                price: "$74,900"
            },
            {
                model: "Ford F-150",
                brand: "Ford",
                logo: "src/assets/images/logos/ford-logo.png",
                image: "src/assets/images/cars/ford-f-150.jpg",
                price: "$70,500"
            },
            {
                model: "Mercedes-benz EQE Sedan",
                brand: "Mercedes-benz",
                logo: "src/assets/images/logos/mercedes-benz-logo.png",
                image: "src/assets/images/cars/mercedes-benz-eqe-sedan.jpg",
                price: "$74,900"
            },
            {
                model: "Ford F-150",
                brand: "Ford",
                logo: "src/assets/images/logos/ford-logo.png",
                image: "src/assets/images/cars/ford-f-150.jpg",
                price: "$70,500"
            },
            {
                model: "Mercedes-benz EQE Sedan",
                brand: "Mercedes-benz",
                logo: "src/assets/images/logos/mercedes-benz-logo.png",
                image: "src/assets/images/cars/mercedes-benz-eqe-sedan.jpg",
                price: "$74,900"
            },
            {
                model: "Ford F-150",
                brand: "Ford",
                logo: "src/assets/images/logos/ford-logo.png",
                image: "src/assets/images/cars/ford-f-150.jpg",
                price: "$70,500"
            },
            {
                model: "Mercedes-benz EQE Sedan",
                brand: "Mercedes-benz",
                logo: "src/assets/images/logos/mercedes-benz-logo.png",
                image: "src/assets/images/cars/mercedes-benz-eqe-sedan.jpg",
                price: "$74,900"
            },
        ]*/
        cars: [],
    },
    mutations:{
        SET_CARS(state, cars){
            state.cars = cars;
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
        }
    }
}