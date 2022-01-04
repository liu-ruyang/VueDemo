<template>

  <div class="routeLine">
    <div class="subs">

      <div class="sub" style="position:relative;" @click="move(1)">
        <img class="person" src="../../../../public/gif/you2.gif" style="height: 65%;position: absolute;"
             :style="{left: $store.state.distance+'px'}">

        <div class="sub firstOne">
          <img src="../../../../public/img/route3.png" style="height: 80%;">
        </div>
      </div>

      <div class="sub" @click="move(2)">
        <img v-if="!this.$store.state.isArrived[0].isLighted" src="../../../../public/img/route2.png"
             style="height: 80%;margin-left: 10px;margin-right: 10px">
        <img v-else src="../../../../public/img/route4.png" style="height: 80%;margin-left: 10px;margin-right: 10px">

        <img v-if="!this.$store.state.isArrived[0].isLighted" src="../../../../public/img/route1.png"
             style="height: 80%">
        <img v-else src="../../../../public/img/route3.png" style="height: 80%">
      </div>
      <div class="sub" @click="move(3)">

        <img v-if="!this.$store.state.isArrived[1].isLighted" src="../../../../public/img/route2.png"
             style="height: 80%;margin-left: 10px;margin-right: 10px">
        <img v-else src="../../../../public/img/route4.png" style="height: 80%;margin-left: 10px;margin-right: 10px">

        <img v-if="!this.$store.state.isArrived[1].isLighted" src="../../../../public/img/route1.png"
             style="height: 80%">
        <img v-else src="../../../../public/img/route3.png" style="height: 80%">
      </div>
      <div class="sub" @click="move(4)">

        <img v-if="!this.$store.state.isArrived[2].isLighted" src="../../../../public/img/route2.png"
             style="height: 80%;margin-left: 10px;margin-right: 10px">
        <img v-else src="../../../../public/img/route4.png" style="height: 80%;margin-left: 10px;margin-right: 10px">

        <img v-if="!this.$store.state.isArrived[2].isLighted" src="../../../../public/img/route1.png"
             style="height: 80%">
        <img v-else src="../../../../public/img/route3.png" style="height: 80%">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "RouteLine",
  data() {
    return {
      // access: true
    }
  },
  methods: {
    move(i) {
      if (!(i == this.$store.state.temp)) {
        this.$router.push(this.$store.state.urlPath[i - 1]);

        this.$store.state.distance = 12 + 132 * (i - 1);
        for (let j = 0; j < i - 1; j++) {
          this.$store.state.locate = i;
          this.$store.state.isArrived[j].isLighted = true;
        }
        for (let j = 2; j > i - 2; j--) {
          this.$store.state.locate = i;
          this.$store.state.isArrived[j].isLighted = false;
        }
      }
    }
  }
}
</script>

<style scoped>
.routeLine {
  /*background: blue;*/
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
}

.subs {
  height: 100%;
  /*background: deeppink ;*/
  margin-left: 200px;
  margin-right: 200px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.sub {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.sub:hover {
  cursor: pointer;
}
</style>