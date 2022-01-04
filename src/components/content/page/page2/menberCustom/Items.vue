<template>
  <div>
    <!--    <div class="page-container" v-for="(val, key) in items" :key="key">-->
    <!--      <div class="smallContainer" v-for="(val2,key2) in val" :key="key2">-->
    <div class="page-container">
      <div class="smallContainer" v-for="(val2,key2) in pageContent" :key="key2">
        <div class="img">
          <img :src="val2.url"/>
        </div>
        <div class="info">
          <div class="up">
            <div class="firstLine clearfix">
              <div class="text-info name">{{ val2.name }}</div>
              <div class="text-info rank" v-if="val2.rank != 'null'">{{ val2.rank }}</div>
            </div>
            <div class="text-info score">评分：{{ val2.score }}</div>
          </div>
          <div class=" down text-info address">{{ val2.address }}</div>
        </div>
      </div>

      <!--按页选择查看-->
      <div class="page-choose">
        <button class="button pre" @click="pagePre">上一页</button>
        <span class="pageNumber">&nbsp;&nbsp;&nbsp;&nbsp;第 {{ page }} 页&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button class="button next" @click="pageNext">下一页</button>
        <span class="pageNumber">&nbsp;&nbsp;&nbsp;&nbsp;共 {{ total_page }} 页&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <div class="jump">
          跳转至&nbsp;<input class="pageCustom" type="text" v-model="page2"/>&nbsp;页&nbsp;
        </div>
        <button class="button next" @click="pageChoose">确定</button>
      </div>
    </div>
  </div>
</template>

<script>

import resource from '../../../../../../public/resource/resource.json';

export default {
  name: "Item",
  data() {
    return {
      items: resource,
      pageContent: null,
      total_page: null,
      page: 1,
      page2: null
    }
  },
  mounted() {
    console.log(this.items);
    console.log(Object.keys(this.items).length)
    this.total_page = Object.keys(this.items).length;
    this.pageContent = this.items[this.page]
  },
  methods: {
    pagePre() {
      if (this.page > 1) {
        // this.page = page;
        this.page--;
        this.pageContent = this.items[this.page]

        //页面回到顶部
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    },
    pageNext() {
      if (this.page < this.total_page) {
        this.page++;
        this.pageContent = this.items[this.page]

        //页面回到顶部
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    },
    pageChoose() {
      console.log("第 " + this.page2 + "页");
      if (this.page2 > 0 && this.page2 <= this.total_page) {
        this.page = this.page2;
        this.pageContent = this.items[this.page]

        //页面回到顶部
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }
  }
}
</script>

<style scoped>
.page-container {
  width: 1150px;
  /*background: red;*/
  display: flex;
  flex-wrap: wrap;
  margin: auto;
}

.page-container .smallContainer {
  width: 500px;
  margin-left: 50px;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;


  border: 10px solid hsla(0, 0%, 100%, .5);
  /*background-clip属性的通俗作用就是指定元素背景所在的区域,有四种取值*/
  background-clip: padding-box;
}

.page-container .smallContainer .img {
  width: 220px;
  margin-top: 4px;
  margin-left: 4px;
}

.page-container .smallContainer .info {
  display: flex;
  flex-wrap: wrap;
  width: 250px;

  margin-top: 12px;
  margin-left: 16px;
}

.page-container .smallContainer .info .up {
  width: 100%;
}

.page-container .smallContainer .info .up .firstLine {
  /*display: flex;*/
  /*flex-wrap: wrap;*/

  box-sizing: content-box;
  width: 100%;
}

.page-container .smallContainer .info .up .clearfix:after {
  /*清除浮动*/
  content: '';
  display: block;
  clear: both;
}

.page-container .smallContainer .info .up .firstLine .text-info,
.page-container .smallContainer .info .up .text-info,
.page-container .smallContainer .info .down .text-info {
  height: 25px;
}

.page-container .smallContainer .info .up .text-info.name {
  /*background: #99a9bf;*/

  font-size: 16px;
  color: #333;
  font-family: Microsoft YaHei, Hiragino Sans GB;
  margin-right: 10px;

  float: left;
}

.page-container .smallContainer .info .up .text-info.rank {
  float: right;
  background: #00a6ff;
  /*background: #666666;*/

  border-radius: 9px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  /*overflow: hidden;*/
  text-align: center;
  /*text-decoration: none;*/
  width: 45px;
  /*vertical-align: middle;*/
}

.page-container .smallContainer .info .up .text-info.score {
  /*background: antiquewhite;*/

  font-size: 14px;
  font-weight: bold;
  color: #00a7e1;

  margin-top: 20px;
  text-align: left;
}

/*.page-container .smallContainer .info .up .text-info.score .suffix {*/
/*  font-size: 12px;*/
/*  font-weight: bold;*/
/*  color: #00a7e1;*/
/*}*/

.page-container .smallContainer .info .down.address {
  /*background: cadetblue;*/

  color: #666;
  font-size: 14px;
  width: 270px;
  height: 20px;
  line-height: 20px;
  text-align: left;

  overflow: hidden; /*溢出隐藏*/
  text-overflow: ellipsis; /*以省略号...显示*/
  white-space: nowrap;
}

.page-choose {
  /*background: deeppink;*/
  height: 27px;
  width: 500px;
  height: 168px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 50px;
  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.pageNumber {
  font-size: 12px;
  width: 80px;
}

.page-container .page-choose .button {
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #999;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ccc;
  background-color: #fff;
  margin-right: -1px;
  padding: 0 2px;
}

.page-container .page-choose .button:hover {
  cursor: pointer;
  color: #00a6ff;
  background: #99a9bf;
}

.page-choose {
  /*background: #666666;*/
}

.page-container .page-choose .jump {
  font-size: 12px;
  width: 100px;
  line-height: 20px;


  display: flex;
  flex-wrap: wrap;
}


.page-container .page-choose .jump .pageCustom {
  width: 25px;
  text-align: center;
}
</style>