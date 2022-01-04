<template>
  <MiddleArrow>
    <div class="left" slot="left">
      <img class="arrow" v-on:click="preOne($store.state.locate)" src="../../../../public/img/arror-left.png"
           alt="">
    </div>
    <div class="right" slot="right">
      <img class="arrow" v-on:click="nextOne($store.state.locate)" src="../../../../public/img/arror-right.png"
           alt="">
    </div>
  </MiddleArrow>
</template>

<script>

import MiddleArrow from "@/components/slot/common/middle/MiddleArrow";

export default {
  name: "MiddleContent",
  components: {
    MiddleArrow
  },
  methods: {
    preOne: function (times) {
      if (times > 1) {

        /*获取当前小人的位置*/
        let element = document.getElementsByClassName("person")[0];
        console.log(element)
        let left = element.style.left;
        console.log(left);

        left = parseInt(left, 10);
        console.log(left);

        this.$store.state.distance -= 132;
        console.log(this.$store.state.distance);
        element.style.left = this.$store.state.distance + "px";
        this.$store.state.locate--;
        this.$store.state.isArrived[this.$store.state.locate - 1].isLighted = false;

        //路由配置
        this.$router.push(this.$store.state.urlPath[this.$store.state.locate - 1]);
        console.log("this.$store.state.locate" + this.$store.state.locate)
      }
    },
    nextOne: function (times) {
      if (times < 4) {
        /*获取当前小人的位置*/
        let element = document.getElementsByClassName("person")[0];
        console.log(element)
        let left = element.style.left;
        console.log(left);

        left = parseInt(left, 10);
        console.log(left);

        this.$store.state.distance += 132;
        console.log(this.$store.state.distance);
        element.style.left = this.$store.state.distance + "px";
        this.$store.state.locate++;
        this.$store.state.isArrived[this.$store.state.locate - 2].isLighted = true;

        //路由配置
        this.$router.push(this.$store.state.urlPath[this.$store.state.locate - 1]);
        console.log("this.$store.state.locate" + this.$store.state.locate)
      }
    }
  }
}
</script>

<style scoped>

div img {
  opacity: 0.3;
}

.left img {
  /*-moz-transform: scaleX(-1);*/
  /*-webkit-transform: scaleX(-1);*/
  /*-o-transform: scaleX(-1);*/
  /*transform: scaleX(-1);*/
  float: left;
  margin-left: 20px;
  width: 5%;
}

.right img {
  float: right;
  margin-right: 20px;

  width: 5%;
}

@-webkit-keyframes buzz-out {
  0% {
    -webkit-transform: translateX(4px) rotate(2deg);
  }
  30% {
    -webkit-transform: translateX(-4px) rotate(2deg);
  }
  60% {
    -webkit-transform: translateX(4px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-4px) rotate(-2deg);
  }
}

.right .arrow:hover {
  -webkit-animation-name: buzz-out;
  -webkit-animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
}

@-webkit-keyframes buzz-out2 {
  0% {
    -webkit-transform: translateX(-4px) rotate(2deg);
  }
  30% {
    -webkit-transform: translateX(4px) rotate(2deg);
  }
  60% {
    -webkit-transform: translateX(-4px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(4px) rotate(-2deg);
  }
}

.left .arrow:hover {
  -webkit-animation-name: buzz-out2;
  -webkit-animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
}

.left:hover {
  cursor: pointer;
}

.right:hover {
  cursor: pointer;
}
</style>