<template>
  <div v-intersect="onIntersect">
    <div class="section section home d-flex flex-column justify-center align-center">
      <div class="inner d-flex flex-column justify-center align-center mt-auto">
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
      </div>

      <div class="scroll-down-button mt-auto"></div>
      <div class="body-1 mt-2 white--text">SCROLL</div>
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
.inner {
  background-color: #212121;
  padding: 40px;
  border-radius: 8px;
}
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
  width: 30px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50px;
  position: relative;
  cursor: pointer;

  &:before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: "";
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #fff;
    border-radius: 100%;
  }
}
</style>