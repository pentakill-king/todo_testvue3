<template>
  <div>

    <Inputt
      :todos="todos"
      :mycity="mycity"
    />

    <Item
      :todos="todos"
      :mycity="mycity"
    />
    <Bot
      :todos="todos"
      :mycity="mycity"
      :CheckAll="handleCheckAllChange"
    />

  </div>
</template>


<script>
// 引入组件输入框，底部组件
import Inputt from "@/components/Inputt.vue";
import Bot from "@/components/Bot.vue";
import Item from "@/components/Item.vue";

// const cityOptions = ['上海', '北京', '广州', '深圳'];
var cityOptions = [
  "一血.............................................",
  "双杀",
  "三杀",
  "4杀",
  "pendakill"
];

export default {
  // 暴露组件输入框，底部组件
  components: {
    Inputt,
    Bot,
    Item
  },
  // 数据在此
  data() {
    return {
      mycity: 
        {
          checkAll: false,
          checkedCities: ["双杀"],
          cities: cityOptions,
          isIndeterminate: true,
          input: ""
        }
      ,

      todos: 
        { id: "1", complete: true, datas: "hahaha" }
      
    };
  },

  methods: {
    handleCheckAllChange() {
      
        this.mycity.checkedCities = this.mycity.cities
        this.mycity.checkedCities = []
        console.log(this.mycity.isIndeterminate)
       
       if(this.mycity.isIndeterminate){this.mycity.checkedCities = this.mycity.cities}else{this.mycity.checkedCities = []}
       this.mycity.isIndeterminate=!this.mycity.isIndeterminate
    }
  }
};
</script>

 <style lang="less" scoped>
//  .list{
//    width: 80%;
//  }
</style>