<template>
  <div v-intersect="onIntersect">
    <div class="section">
       <h1 class="white--text title section-title">Major projects</h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onIntersect(entries, observer) {
      this.$emit("activeSectionChange", {
        section: "portfolio",
        isIntersecting: entries[0].isIntersecting
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>