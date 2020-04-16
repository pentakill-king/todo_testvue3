<template>

  <div class="bot">
    
    
    <el-row>
      <el-button @click="All" plain>all</el-button>
      <el-button  plain>active</el-button>
      <el-button plain>completed</el-button>
    </el-row>

  </div>

</template>

<script>
export default {
  // 声明接收来自list的todos数据


  props: { mycity: Object ,CheckAll:Function},

  methods: {
    
    All(){
      this.CheckAll()
    }

    // CheckAll(val) {
    //   val
    //     ? (this.mycity.checkedCities = this.mycity.cities)
    //     : (this.mycity.checkedCities = [])
    // }
  }
};
</script>

 <style lang="less" scoped>
 .bot{
   margin-top:1em;
 }
</style>