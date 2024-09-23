<template>
    <div class="person">
        <h2>求和 {{ sum }}</h2>
        <button @click="add">sum + 1</button>
        <br>
        <img v-for="(dog,index) in dogList" :key="index" :src="dog" alt="">
        <br>
        <button @click="getDog">再来一只狗</button>
    </div>
    
</template>

<script setup lang="ts" name="Person">
    import {ref,reactive} from 'vue'
    import axios from 'axios'

    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';

    const {sum,add} = useSum();
    const {dogList,getDog} = useDog();



</script>

<style scoped>
    .person {
        background-color: salmon;
        box-shadow: 0 0 10px;
        border-radius: 15px;
        padding: 20px;
    }
    button {
        margin: 0 5px;
    }
    img {
        width: 100px;
        margin: 10px;
    }
</style>