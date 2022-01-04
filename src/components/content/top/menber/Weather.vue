<template>

  <div>
    <!--    <div>{{-->
    <!--        info.result.city + " " + info.result.realtime.info + " " + info.result.realtime.temperature + "℃"-->
    <!--      }}-->
    <!--    </div>-->
    <!--    <div>{{ info.result.realtime.direct + " " + info.result.realtime.power }}</div>-->


    <!--  测试用  -->
    <div>{{
        info_fixed.result.city + " " + info_fixed.result.realtime.info + " " + info_fixed.result.realtime.temperature + "℃"
      }}
    </div>
    <div>{{ info_fixed.result.realtime.direct + " " + info_fixed.result.realtime.power }}</div>
  </div>
  <!--  <h2>天气</h2>-->
  <!--  <h2>空气质量指数：</h2>-->


</template>

<script>

export default {
  data() {
    return {
      info: null,
      info_fixed: {
        reason: "查询成功!",
        result: {
          city: "南京",
          realtime: {
            temperature: "9",
            humidity: "56",
            info: "晴",
            direct: "西风",
            power: "2级",
            aqi: "43"
          }
        }
      }
    }
  }
  ,
  mounted() {
    // axios({
    //   method: 'get',
    //   // url: '/api',
    //   url: '/api/a/simpleWeather/query',
    //   headers: {
    //     // AccessControlAllowOrigin: "*",
    //     // contentType: 'application/json'
    //   },
    //   params: {
    //     city: "南京",
    //     key: '46bef6fcea40d36d9931ff4be7486b15'
    //   }
    // }).then(response => {
    //   // handle success
    //   this.info = response.data;
    //   console.log("请求成功")
    //   console.log(this.info)
    // }).catch(error => {
    //   // handle error
    //   console.log("请求失败")
    //   console.log(error)
    // }).then(() => {
    //   // always executed
    // });
  }
}
</script>

<style scoped>

</style>