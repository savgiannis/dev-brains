<template>
  <v-app>
    <v-navigation-drawer fixed mini-variant>
      <div class="nav d-flex flex-column align-center">
        <v-tooltip right nudge-right="25" content-class="tooltip">
          <template v-slot:activator="{ on }">
            <v-icon class="active" large v-on="on">home</v-icon>
          </template>
          <span class="font-weight-bold">Home</span>
        </v-tooltip>

        <v-tooltip right nudge-right="25">
          <template v-slot:activator="{ on }">
            <v-icon large v-on="on">people</v-icon>
          </template>
          <span class="font-weight-bold">About</span>
        </v-tooltip>

        <v-tooltip right nudge-right="25">
          <template v-slot:activator="{ on }">
            <v-icon large v-on="on">work</v-icon>
          </template>
          <span class="font-weight-bold">Portfolio</span>
        </v-tooltip>

        <v-tooltip right nudge-right="25">
          <template v-slot:activator="{ on }">
            <v-icon large v-on="on">mail</v-icon>
          </template>
          <span class="font-weight-bold">Contact</span>
        </v-tooltip>
      </div>
    </v-navigation-drawer>

    <div class="background-image">
      <v-overlay opacity="0.8"></v-overlay>
    </div>

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
import Home from "@/views/Home";
import About from "@/views/About";
export default {
  components: {
    Home,
    About
  },
  data() {
    return {
      test: ""
    };
  }
};
</script>


<style lang="scss">
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: url("assets/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.wrapper {
  width: 1170px;
}

.nav {
  padding-top: 132px;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
}

.v-navigation-drawer {
  background-color: rgba($primary, 0.85) !important;
}

.v-icon {
  color: $secondary !important;
  cursor: pointer;

  &.active {
    color: $node-light !important;
  }
}

.v-tooltip__content {
  background-color: $node-light !important;
  color: $primary !important;
}
</style>