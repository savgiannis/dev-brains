<template>
  <div>
    <div class="wrapper d-flex flex-column justify-center align-center">
      <h1 class="display-2 font-weight-bold white--text text-center mb-8">Hello! We are Dev Brains</h1>

      <div class="headline white--text mb-1">We create</div>

      <div
        class="headline white--text mb-1"
      >web/mobile/desktop applications, e-commerce platforms and CMS websites</div>

      <div class="headline white--text mb-8">with</div>

      <div class="d-flex align-center justify-center">
        <img class="icon heart mr-4" src="@/assets/heart.svg" />
        <div class="headline white--text mr-4">and</div>
        <img class="icon mr-4" src="@/assets/js.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
}

.icon {
  height: 70px;

  &.heart {
    filter: invert(10%) sepia(66%) saturate(7380%) hue-rotate(358deg)
      brightness(98%) contrast(81%);
  }
}
</style>