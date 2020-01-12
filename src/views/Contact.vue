<template>
  <div v-intersect="onIntersect">
    <div class="section">
      <h1 class="white--text title section-title">Get in touch with us</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onIntersect(entries, observer) {
      this.$emit("activeSectionChange", {
        section: "contact",
        isIntersecting: entries[0].isIntersecting
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>