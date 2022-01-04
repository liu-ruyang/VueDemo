<template>
  <div>
    <div> {{ time.yy + "年" + time.mm + "月" + time.dd + "日" }}</div>
    <div> {{ time.hh + "时" + time.mf + "分" + time.ss + "秒" }}</div>
  </div>

</template>

<script>
export default {
  name: "Time",
  data() {
    return {
      time: {
        yy: new Date().getFullYear(),
        mm: new Date().getMonth() + 1,
        dd: new Date().getDate(),
        hh: new Date().getHours(),
        mf: new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes(),
        ss: new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
      }
    }
  }
}
</script>

<style scoped>
.time {
  font-size: 10px;
  margin-right: 40px;
}


</style>