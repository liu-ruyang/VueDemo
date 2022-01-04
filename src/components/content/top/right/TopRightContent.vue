<template>
  <TopRight>
    <div class="right" slot="content">
      <Search class="search"></Search>
      <Time class="time"></Time>
      <Weather class="weather"></Weather>
    </div>
  </TopRight>
</template>

<script>
import TopRight from "@/components/slot/common/top/TopRight";
import Search from "@/components/content/top/menber/Search";
import Time from "@/components/content/top/menber/Time";
import Weather from "@/components/content/top/menber/Weather";

export default {
  name: "TopRightContent",
  components: {
    TopRight,
    Search,
    Time,
    Weather
  }
}
</script>

<style scoped>
.right {

  float: right;
  width: 500px;
  height: 20px;
  /*background: deeppink;*/
}

.search {
  float: left;
}

.time {
  float: right;
}

.weather {
  float: right;
}

.weather {
  width: 150px;
  font-size: 10px;
}
</style>