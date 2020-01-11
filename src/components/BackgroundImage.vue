<template>
  <div class="background-image">
    <v-overlay opacity="0.75"></v-overlay>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: url("../assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>