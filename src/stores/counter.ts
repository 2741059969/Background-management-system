
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
   state:()=>{
    return {
      count:0
    }
   },
   actions:{
    addcount(){
      this.count++
    }
   },
   getters:{
    doublecount():number{
      return this.count*2
    }
   }
}
)
