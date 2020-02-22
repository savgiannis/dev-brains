<template>
  <div v-intersect="onIntersect">
    <div class="section">
      <h1 class="white--text title section-title">Major projects</h1>

      <div class="mt-10">
        <v-btn class="mr-2" outlined color="accent" small>All</v-btn>

        <v-btn class="mr-2" outlined color="secondary" small>Our products</v-btn>

        <v-btn outlined color="secondary" small>Clients</v-btn>
      </div>
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