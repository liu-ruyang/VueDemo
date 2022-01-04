<template>

  <Part class="part">
    <!--插入页面内容-->
    <div slot="part-content">
      <Slideshow></Slideshow>
      <Introduction></Introduction>
    </div>
  </Part>

</template>

<script>
import Part from "@/components/slot/common/Part";
import Slideshow from "@/components/content/page/page1/menberCustom/Slideshow";
import Introduction from "@/components/content/page/page1/menberCustom/Introduction";

export default {
  name: "PageCustom",
  components: {
    Introduction,
    Slideshow,
    Part
  }
}
</script>

<style scoped>
.part {
  height: 720px;
}

</style>