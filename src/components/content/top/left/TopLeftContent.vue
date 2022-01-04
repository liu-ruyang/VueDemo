<template>
  <div class="left">
    <Logo></Logo>
  </div>

</template>

<script>
import Logo from "@/components/content/top/menber/Logo";

export default {
  name: "TopLeftContent.vue",
  components: {
    Logo
  }
}
</script>

<style scoped>
.left {
  float: left;
}
</style>