<template>
  <el-carousel :interval="4000" type="card" height="250px">
    <el-carousel-item v-for="item in 4" :key="item">
      <!--      <h3 class="medium">{{ a[item] }}</h3>-->
      <div style="position: relative;">
        <img v-bind:src="'../img/'+item+'.png'" style="height: 100%;width: 100%">
        <div class="content">
          <h2>{{ a[item] }}</h2>
          <div>{{ introduce[item] }}</div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      a: ['', '南京总统府', '南京欢乐谷', '红山森林动物园', '夫子庙'],
      introduce: [
        '',
        "南京建筑的主要代表之一，中国近代历史的重要遗址。",
        "毗邻长江，依山傍水，地理环境得天独厚。",
        "以独特的森林景观、丰富的动物资源、多彩的主题活动成为国内较具特色的动物园之一。",
        "与北京孔庙、曲阜孔庙、吉林文庙并称为中国四大文庙，是夫子庙秦淮河风光带主要的景点。"
      ]
    }
  }
}
</script>

<style>
.el-carousel {
  padding-top: 110px;
  width: 1000px;
  margin: auto;
}

.content {
  position: absolute;
  /*background: rgba(255, 242, 0, 0.1);*/
  margin-top: -80px;
  /*width: 100%;*/
  /*border-radius: 5px;*/
  top: 200px;
  padding-right: 15px;
  padding-left: 15px;
  color: #5090B1FF;
}

.content {
  /*background: url(images/bg.gif) repeat #000000;*/
  /*padding: 0;*/
  font-family: arial, sans-serif;
  /*font-size: 12px;*/
  /*margin: 0px auto auto auto;*/
  /*color: #36322b;*/
}

.content h2 {
  font-weight: bold;
  text-align: left;
}

.content div {
  font-weight: bold;
  text-align: left;
}

/*.el-carousel__item h3 {*/
/*  color: #475669;*/
/*  font-size: 14px;*/
/*  opacity: 0.75;*/
/*  line-height: 200px;*/
/*  margin: 0;*/
/*}*/
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>




