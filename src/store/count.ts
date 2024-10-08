import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
    
    // 放置动作函数
    actions: {
        increment(value: any) {
            console.log("increment 被调用了！",value)
            this.sum += value
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum:6,
            ces:'nihao测试!'
        }
    },
    getters: {
        bigSum(state) {
            return state.sum*10
        }
    }
})