<template>
  <div class=home>
    <el-container>
      <el-header>
        <div class="todos">todos</div>
      </el-header>
      <el-main>
        <List />
      </el-main>
      <el-footer>
        <span class="tks">thanks for my daddy and cctv </span>
      </el-footer>

    </el-container>

  </div>

</template>

<script>
import List from "@/components/List.vue";

export default {
  name: "home",

  components: {
    List
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.tks {
  // position: absolute;
  text-align: center;

  bottom: 10em;
}
/deep/ .el-input__inner {
  &::placeholder {
    color: rgb(241, 241, 241);
  }
  background: rgb(37, 37, 37);
  color: rgb(161, 161, 161);
}
/deep/ .el-collapse-item__header {
  background: rgb(37, 37, 37);
  color: rgb(161, 161, 161);
  border-radius: 5%;
  height: 100%;
}

/deep/ .el-collapse-item__wrap {
  background: rgb(0, 0, 0);
  color: rgb(161, 161, 161);
}
/deep/ .el-checkbox {
  margin: 0;
  padding: 0;
}

.home {
  background-color: black;
  padding: 1em;
}
.todos {
  color: coral;
  font-size: 5em;
  position: relative;
  transform: translate(0, -20%);
}

/deep/ .el-checkbox__label {
  display:inline-block ;
  padding-right: 1em;
overflow: hidden;
  // display:table-cell ;
  color: rgb(102, 204, 7);
  // font-size: 1em;
  word-wrap: break-word;
word-break: break-all;
}
/deep/ .el-checkbox.is-bordered {
  // border-bottom: 1px solid rgb(161, 161, 161) ;
  display: flex;
  height: 100%;
}
</style>
