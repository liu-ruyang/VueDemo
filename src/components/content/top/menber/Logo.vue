<template>
  <div class="logo">
    <img class="logo" src="../../../../../public/gif/logo.gif">
  </div>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {
      url: "../../../../public/gif/logo.gif"
    }
  }
}
</script>

<style scoped>
div.logo {
  width: 120px;
  height: 80px;
  margin-left: 20px;
}

div img.logo {
  width: 100%;
  height: 100%;
}
</style>