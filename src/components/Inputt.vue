<template>
<div>
 <!-- <input   placeholder="what are you 弄啥呢" @change="change" :todo="todos">  -->
 <el-input  clearable placeholder="what are you 弄啥呢"  @keyup.enter.native="change" v-model="mycity.input">
  <!-- <el-checkbox slot="prefix"  @change="handleCheckAllChange">全选</el-checkbox> -->
<!-- <i slot="prefix" @click="handleCheckAllChange" class="el-input__icon el-icon-search" ></i> -->
 </el-input>
</div>
</template>

<script>
export default {

  methods:{
    change(){
      var mycity;
    mycity=this.mycity;
    mycity.cities.unshift(mycity.input)
    },
    // handleCheckAllChange(val) {
    //   val
    //     ? (this.mycity.checkedCities = this.mycity.cities)
    //     : (this.mycity.checkedCities = [])
    // }
  },
  data(){
    return{
    }
  },
  
  props:{mycity:Object},
  
 }
 
</script>

 <style lang="less" scoped>
//  /deep/ .el-input__inner {
//     &::placeholder {
//         color: rgb(241, 241, 241);
//     }
//     background: rgb(37, 37, 37) ;
//      color: rgb(161, 161, 161);
//     }
    
    
 </style>