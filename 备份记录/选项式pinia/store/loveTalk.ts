import axios from 'axios'
import { nanoid } from 'nanoid'
import {defineStore} from 'pinia'

export const useTalkStore = defineStore('talk',{
    // 真正存储数据的地方
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    },
    actions:{
        async getATalk() {
            let oneTalk = await axios.get('http://api.uomg.com/api/rand.qinghua?format=json')
            let obj = {id:nanoid(),title:oneTalk.data.content}
            this.talkList.unshift(obj)
            // localStorage.setItem('talkList',JSON.stringify(this.talkList))
        }
    }
})