export default{
    namespaced: true,
    state:{
        refresh: "",
        access: ""
    },
    mutations:{
        setTokens(state, payload){
            const { refresh, access } = payload;
            state.access = access;
            state.refresh = refresh;
            console.log(payload);
        }
    },
    getters:{
        get_tokens(state){
            const data = {
                refresh: state.refresh,
                access: state.access
            }
            return data;
        }
    }
}