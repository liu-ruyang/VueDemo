<template>
  <div class="search">
    <el-input auto-complete="true"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input">
    </el-input>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input: ""
    }
  }
}
</script>

<style scoped>
.search {
  width: 200px;
}
</style>