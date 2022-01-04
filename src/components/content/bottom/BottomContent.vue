<template>
  <Bottom>
    <div slot="content">
      <!--提示按钮-->
      <button class="tip" v-if="!$store.state.popOut" @click="pop">导航</button>
      <button class="tip" v-else @click="pop">收起</button>

      <!--行走路线-->
      <RouteLine v-show="$store.state.show"></RouteLine>
    </div>
  </Bottom>
</template>

<script>
import Bottom from "@/components/slot/common/bottom/Bottom";
import RouteLine from "@/components/content/bottom/RouteLine";

export default {
  name: "BottomContent",
  components: {
    Bottom,
    RouteLine
  },
  data() {
    return {
      // show: false,
      // popOut: false
    }
  },
  methods: {
    pop: function () {
      this.$store.state.popOut = !this.$store.state.popOut;
      this.$store.state.show = !this.$store.state.show;
      console.log(this.$store.state.popOut)
      console.log("this.$store.state.show+" + this.$store.state.show)
    }
  }

}
</script>

<style scoped>


div.tip {
  width: 40px;
  margin: auto;
}

div.tip:hover {
  background: cadetblue;
}
</style>