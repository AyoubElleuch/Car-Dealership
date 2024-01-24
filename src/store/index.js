import { createStore } from 'vuex'
import cars from './modules/cars'
import login from './modules/login'

export default createStore({
    modules:{
        cars,
        login,
    },
})