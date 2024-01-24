<template>
    <div>
        <div class="input_wrapper IBM-Plex-Mono">
            <h4>Username</h4>
            <input  type="text">
        </div>
        <div class="input_wrapper IBM-Plex-Mono">
            <h4>Password</h4>
            <input type="password">
        </div>
        <button class="IBM-Plex-Mono">Login</button>
    </div>
</template>
<script>
export default{

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