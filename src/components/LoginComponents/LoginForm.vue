<template>
    <div>
        <div class="input_wrapper IBM-Plex-Mono">
            <h4>Username</h4>
            <input type="text" v-model="username">
        </div>
        <div class="input_wrapper IBM-Plex-Mono">
            <h4>Password</h4>
            <input type="password" v-model="password">
        </div>
        <button class="IBM-Plex-Mono" @click="login">Login</button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default{
    data(){
        return{
            username: "Admin",
            password: "Admin12345"
        }
    },
    methods:{
        ...mapMutations('login', ['setTokens']),
        ...mapGetters('login', ['getTokens']),
        async login(){
            if(this.username == "" || this.password == ""){
                return
            }
            const data = {
                username: this.username,
                password: this.password
            };
            console.log('data: ', JSON.stringify(data));

            await fetch("http://127.0.0.1:8000/api/login/", {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response =>{
                return response.json();
            })
            .then(receivedData => {
                const payload = {
                    refresh: receivedData.refresh,
                    access: receivedData.access
                };
                this.setTokens(payload);
                this.$router.push('/');
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>
input[type="text"], input[type="password"]{
    width: 250px;
    padding: 5px;
    margin-bottom: 10px;
}
button{
    padding: 5px 15px;
    border: none;
    background: #88f613;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
button:hover{
    transform: scale(1.03);
    background: #69c00c;
}
</style>