<template>
  <div v-intersect="onIntersect">
    <div class="section section home d-flex flex-column justify-center align-center">
      <h1 class="display-2 font-weight-bold white--text text-center mb-8">Hello! We are Dev Brains</h1>

      <div class="headline white--text mb-1">We create</div>

      <div
        class="headline white--text mb-1"
      >web/mobile/desktop applications, e-commerce platforms and CMS websites</div>

      <div class="headline white--text mb-8">with</div>

      <div class="d-flex align-center justify-center">
        <svg class="icon heart mr-4">
          <use xlink:href="@/assets/sprite.svg#icon-heart" />
        </svg>
        <div class="headline white--text mr-4">and</div>
        <svg class="icon js">
          <use xlink:href="@/assets/sprite.svg#icon-js" />
        </svg>
      </div>

      <div class="scroll-down-button white--text" @click="scrollDown"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onIntersect(entries, observer) {
      this.$emit("activeSectionChange", {
        section: "home",
        isIntersecting: entries[0].isIntersecting
      });
    },
    scrollDown() {
      this.$vuetify.goTo("#about");
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  height: 70px;
  width: 70px;

  &.js {
    background-color: black;
  }

  &.heart {
    fill: #d50000;
  }
}

.scroll-down-button {
  position: absolute;
  bottom: 60px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  transform: rotate(-46deg);
  animation: scroll-button-animation 2s infinite;
}

@keyframes scroll-button-animation {
  0% {
    transform: rotate(-46deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-46deg) translate(-20px, 20px);
    opacity: 0;
  }
}
</style>