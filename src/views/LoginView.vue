<template>
    <div class="wrapper">
        <h2 class="crimson-text">Login to admin dashboard</h2>
        <LoginForm />
    </div>
</template>
<script>
import LoginForm from '../components/LoginComponents/LoginForm.vue';
export default{
    components:{
        LoginForm,
    }
}
</script>
<style scoped>
.wrapper{
    height: 100dvh;
    width: 100dvw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h2{
    margin-bottom: 20px;
}
</style>