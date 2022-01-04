<template>
  <div>
    <!--导航栏-->
    <Top class="top"></Top>

    <!--页面中部箭头-->
    <MiddleContent class="middle"></MiddleContent>

    <!--放置自定义的页面内容-->
    <slot name="part-content"></slot>

    <!--页面底部内容-->
    <BottomContent class="bottom"></BottomContent>
  </div>
</template>

<script>

import MiddleContent from "@/components/content/middle/MiddleContent";
import BottomContent from "@/components/content/bottom/BottomContent";
import Top from "@/components/content/top/Top";


export default {
  name: "Part",
  components: {
    Top,
    MiddleContent,
    BottomContent
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    console.log(this.$route.path);
    switch (this.$route.path) {
      case '/one': {
        this.$store.state.locate = 1;
        this.$store.state.distance = 12;
        break;
      }
      case '/two': {
        this.$store.state.locate = 2;
        this.$store.state.distance = 144;
        this.$store.state.isArrived[0].isLighted = true;
        break;
      }
      case '/three': {
        this.$store.state.locate = 3;
        this.$store.state.distance = 276;
        this.$store.state.isArrived[0].isLighted = true;
        this.$store.state.isArrived[1].isLighted = true;
        break;
      }
      case '/four': {
        this.$store.state.locate = 4;
        this.$store.state.distance = 408;
        this.$store.state.isArrived[0].isLighted = true;
        this.$store.state.isArrived[1].isLighted = true;
        this.$store.state.isArrived[2].isLighted = true;
        break;
      }
    }
  }
}
</script>

<style scoped>
.top {
  position: fixed;
  /*background: red;*/
  margin-top: 15px;
  width: 100%;
  z-index: 1;
}

.middle {
  position: fixed;
  top: 40%;
  width: 99%;
  /*background: cadetblue;*/

  /*图层优先级*/
  z-index: 1;
}

.bottom {
  width: 100%;
  position: fixed;
  bottom: 20px;
}

</style>