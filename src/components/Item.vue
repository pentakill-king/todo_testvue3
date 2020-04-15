<template>
  <div class="itm">
    <el-collapse >
<el-collapse-item class="col">
  <div slot="title" class="total">
            <span class="tt">更多...</span>
        </div>

    <el-checkbox
      class="line"
      v-model="mycity.checkedCities"
      v-for="city in mycity.cities"
      :label="city"
      :key="city"
      border
    >
    
      <div>{{city}}
       <span class="del">
        <label slot="prefix" type="info" circle  class="el-icon-error"></label>
        </span>
        </div>

    </el-checkbox> 
    

    </el-collapse-item>
            <span class="tt">......{{this.mycity.cities.length}}......items</span>
        
    </el-collapse>

  </div>
</template>

<script>
export default {
  props: ["todos", "mycity"],
  data() {
    return {};
  },

  methods: {
  }
};
</script>

 <style lang="less" scoped>
//  .ko{
//    width: 100%;
//  }
.line {
  margin: 10em;
  padding: 0;
  background: #000;
  display:flex ;
  text-align: center;
  font-size: 2em;
}
.del{
  // overflow: hidden;
  text-align: right;
  display:flex ;
  float: right;
  }
.total{
  display:flex;
 padding-left: 50%;
}
  
.col{
  background: #000;
}

// /deep/ .el-collapse-item{background: rgb(37, 37, 37) ;
//      color: rgb(161, 161, 161);}
</style>