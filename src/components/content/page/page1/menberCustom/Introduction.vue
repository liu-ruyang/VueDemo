<template>
  <div class="cover">
    <div>
      <!--      <h2 class="title">南京</h2>-->
      <h3 class="cover-content">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        截至2020年，南京有<strong>世界文化遗产</strong>1项（9点）、<strong>中国世界文化遗产预备名单</strong>2项、
        <strong>全国重点文物保护单位</strong>55处（112点）、<strong>江苏省文物保护单位</strong>114处（126点）、
        市级以上文物保护单位516处（591点）、国家级历史文化街区2个、省级历史文化街区7个、国家级历史文化名镇（村）3个、4A级以上景区26家、国家、省级旅游度假区5家；
        接待海内外旅游者9704万人次，旅游业总收入1822.64亿元。
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cover"
}
</script>

<style scoped>
.cover {
  margin-top: 20px;
  color: #2b2a2a;
  width: 100%;
}

.cover > div {
  background: rgba(86, 214, 227, 0.5);
  border-radius: 20px;
  width: 40%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px 20px 5px;
}

.cover > div .title {
  text-align: center;
  line-height: 1.5em;
  margin: 0;
}

.cover > div .cover-content {
  text-align: left;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 5px;
}
</style>