<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"> <br>
        名：<input type="text" v-model="lastName"> <br>
        全名：<span>{{ fullName }}</span> <br>
        <button @click="changeFullName">修改全名</button>
        <h2>求和为：{{ sum }}</h2>
        <button @click="addSum">sum+1</button>

        <hr>

        <h1>中国</h1>
        <h2 ref="title2">北京</h2>
        <button @click="printH2">输出h2</button>
        <ul>
            <li v-for="person in list" :key="person.id">
                age -- {{ person.age }}
                name -- {{ person.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Person">
    import {ref,reactive,computed,watch,watchEffect,defineProps,withDefaults} from 'vue'
    import { type PersonInter,type Persons } from '@/types';
    let firstName = ref('张');
    let lastName = ref('三');
    let sum = ref(0);
    let person:PersonInter = {id:'dahi2nBahq2Axa',name:'李四',age:28}
    let personList:Persons = [
        {id:'dahi2nBahq2Axa',name:'李四2',age:281},
        {id:'dahi2nB12q2Axa',name:'李四3',age:282},
    ]

    // 接受并保存a
    // let d = defineProps(['a','personlist2'])
    // console.log(d.personlist2)
    
    withDefaults(defineProps<{list?:Persons}>(),{
        list: ()=> [{id:'adawi2da',name:'ksf',age:15}]
    })

    // 创建一个title2，存储ref标记的内容
    let title2 = ref();
    let fullName = computed( {
        get() {
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' +lastName.value
        },
        set(val) {
            const x = val.split('-')
            firstName.value = x[0]
            lastName.value = x[1]
        }
        
    } )

    function changeFullName() {
        fullName.value = 'li-si'
    }

    function addSum() {
        sum.value +=1
    }

    function printH2 () {
        console.log(title2.value)
    }

    // const stopWatch = watch(sum,(newValue,oldValue)=>{
    //     console.log('@@',newValue,oldValue)
    //     if (newValue >=10){
    //         stopWatch()
    //     }
    // })
    const x = watchEffect(()=>{
        if (sum.value > 5) {
            console.log('sum>5啦！')
            x()
        }
    })


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
</style>