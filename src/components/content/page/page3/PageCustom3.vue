<template>

  <Part>
    <!--插入页面内容-->
    <div slot="part-content">
      <Location></Location>
    </div>
  </Part>

</template>

<script>
import Part from "@/components/slot/common/Part";
import Location from "@/components/content/page/page3/menberCustom/Location";
// import Location from "@/components/content/page/page3/menberCustom/GMap";

export default {
  name: "PageCustom3",
  components: {
    Part,
    Location
  }
}
</script>

<style scoped>

</style>