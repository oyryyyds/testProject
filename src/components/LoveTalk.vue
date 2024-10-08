<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
    </div>

    <ul>
        <li v-for="(talk,index) in talkList" :key="talk.id"> {{ talk.title }}</li>
    </ul>
</template>

<script setup lang="ts" name="LoveTalk">
    import { reactive } from 'vue';
    import axios from "axios";
    import { nanoid } from 'nanoid';
    import { useTalkStore } from '@/store//loveTalk'
    import { storeToRefs } from 'pinia';
    
    const useTalk = useTalkStore()
    const {talkList} = storeToRefs(useTalk)
    async function getLoveTalk() {
        useTalk.getATalk()
    }

    useTalk.$subscribe((mustate,state)=>{
        console.log('出现了变化！',mustate,state)
        localStorage.setItem('talkList',JSON.stringify(state.talkList))
    })
</script>

<style scoped lang="scss">
    .talk {
        background-color: aquamarine;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>