<template>
  <div>
    <div id="container"/>
  </div>
</template>

<script>
import AMap from 'AMap' //引入高德地图AMap
export default {
  name: 'GMap',
  methods: {
//初始化地图
    initMap() {
      let self = this
      var map = map = new AMap.Map('container', {
        resizeEnable: true
      });

      map.on("complete", function () {
        console.log.success("地图加载完成！");
      });
      self.map = map
    }
  },
//在mounted阶段调用（mounted可以操作DOM）
  mounted() {
    this.initMap()
  }
}
</script>

<style scoped>
#container {
  width: 1510px;
  height: 715px;
}
</style>