<template>
  <div>
    <footer class="section d-flex align-center justify-center footer">
      <div class="white--text">&copy; {{year}} Dev Brains. All rights reserved.</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
</style>