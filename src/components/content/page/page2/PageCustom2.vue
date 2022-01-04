<template>

  <Part class="part">
    <!--插入页面内容-->
    <div class="page-content" slot="part-content">
      <Items></Items>
    </div>
  </Part>

</template>

<script>
import Part from "@/components/slot/common/Part";
import axios from "axios";
import Items from "@/components/content/page/page2/menberCustom/Items";

export default {
  name: "PageCustom2",
  components: {
    Part,
    Items
  },
  mounted() {
    axios({
      method: 'get',
      url: '/api/b/publicfinal/p/14164944.html'
    }).then(res => {
      console.log("请求成功")
      console.log(res)
    }).catch(error => {
      console.log("请求失败");
      console.log(error)
    })
  }
}
</script>

<style scoped>
.part {
  height: 1650px;
}

.page-content {
  position: relative;
  top: 130px;
}

</style>