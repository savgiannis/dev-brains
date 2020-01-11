<template>
  <v-app>
    <BackgroundImage />
    <Navigation />

    <v-content>
      <div class="d-flex justify-center">
        <div class="wrapper">
          <Home />
          <About />
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";
import BackgroundImage from "@/components/BackgroundImage";

import Home from "@/views/Home";
import About from "@/views/About";

export default {
  components: {
    Home,
    About,
    BackgroundImage,
    Navigation
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 1170px;
}
</style>