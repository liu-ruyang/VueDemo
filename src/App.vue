<template>
  <div id="app">
    <!--首页-->
    <!--    <router-link to="/one" style="display: none">首页</router-link>-->
    <!--    &lt;!&ndash;第二页&ndash;&gt;-->
    <!--    <router-link to="/two" style="display: none">第二页</router-link>-->
    <!--    &lt;!&ndash;第三页&ndash;&gt;-->
    <!--    <router-link to="/three" style="display: none">第三页</router-link>-->
    <!--    &lt;!&ndash;第四页&ndash;&gt;-->
    <!--    <router-link to="/four" style="display: none">第四页</router-link>-->

    <!--相当于占位-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
// import PageCustom1 from "@/components/content/page/page1/PageCustom1";
// import PageCustom2 from "@/components/content/page/page2/PageCustom2";

export default {
  name: 'App',
  components: {
    // PageCustom2,
    // PageCustom1
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /*background: url("../public/img/bkd2.png") no-repeat center/cover;*/
  /*background: linear-gradient(91deg, #f1eefc, #9dc6ff 70%, #a5bcff);*/
  /*background: linear-gradient(135deg, #56c8ff, #6f99fc) no-repeat;*/
  background: linear-gradient(to right, #bb313e25, #bb313e25, #d7222925, #dd4a1625, #e4761525, #f5c50025, #f0e92725, #b1ce2425, #48a93525, #03944525, #157c4f25, #176a5825, #1b556325, #1d386f25, #1d386f25, #20277825, #52266325, #8a244b25);
}

</style>
