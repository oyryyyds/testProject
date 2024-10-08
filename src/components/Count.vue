<template>
    <div class="count">
        <h2>当前求和为： {{ sum }}</h2>

        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import { ref } from 'vue';
    import { useCountStore} from '@/store/count'
    import { storeToRefs } from 'pinia';

    const countStore = useCountStore()
    const {sum,ces} = storeToRefs(countStore)


    let n = ref(1)


    function add() {
        // 第一种修改
        // countStore.sum += n.value

        // 第二种，推荐修改多个数据时使用
        // countStore.$patch({
        //     sum:999
        // })

        //第三种 
        countStore.increment(n.value)

    }

    function minus() {
        countStore.sum -= n.value
    }

    countStore.$subscribe((mustate,state)=>{
        console.log('出现了变化！',mustate,state)
    })
</script>

<style scoped lang="scss">
    .count {
        background-color: antiquewhite;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }

    select,button {
        margin: 0 5px;
        height: 25px
    }
</style>