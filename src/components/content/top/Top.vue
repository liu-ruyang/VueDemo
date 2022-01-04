<template>

  <div>
    <TopLeftContent></TopLeftContent>
    <TopRightContent></TopRightContent>
  </div>

</template>

<script>

import TopLeftContent from "@/components/content/top/left/TopLeftContent";
import TopRightContent from "@/components/content/top/right/TopRightContent";

export default {
  name: "Top",
  components: {
    TopRightContent,
    TopLeftContent
  }
}
</script>

<style scoped>

</style>