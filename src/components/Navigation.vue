<template>
  <v-navigation-drawer class="sidebar" fixed mini-variant permanent>
    <div class="nav d-flex flex-column align-center">
      <v-tooltip right nudge-right="25" color="accent">
        <template v-slot:activator="{ on }">
          <v-icon
            :class="{'active': activeSection == 'home'}"
            class="nav-icon"
            v-on="on"
            @click="scrollTo('home')"
          >icon-home</v-icon>
        </template>
        <span class="text--primary font-weight-bold">Home</span>
      </v-tooltip>

      <v-tooltip right nudge-right="25" color="accent">
        <template v-slot:activator="{ on }">
          <v-icon
            :class="{'active': activeSection == 'about'}"
            class="nav-icon"
            v-on="on"
            @click="scrollTo('about')"
          >icon-about</v-icon>
        </template>
        <span class="text--primary font-weight-bold">About</span>
      </v-tooltip>

      <v-tooltip right nudge-right="25" color="accent">
        <template v-slot:activator="{ on }">
          <v-icon
            :class="{'active': activeSection == 'stack'}"
            class="nav-icon"
            v-on="on"
            @click="scrollTo('stack')"
          >icon-stack-1</v-icon>
        </template>
        <span class="text--primary font-weight-bold">Technologies</span>
      </v-tooltip>

      <v-tooltip right nudge-right="25" color="accent">
        <template v-slot:activator="{ on }">
          <v-icon
            :class="{'active': activeSection == 'portfolio'}"
            class="nav-icon"
            v-on="on"
            @click="scrollTo('portfolio')"
          >icon-portfolio</v-icon>
        </template>
        <span class="text--primary font-weight-bold">Portfolio</span>
      </v-tooltip>

      <v-tooltip right nudge-right="25" color="accent">
        <template v-slot:activator="{ on }">
          <v-icon
            :class="{'active': activeSection == 'contact'}"
            class="nav-icon"
            v-on="on"
            @click="scrollTo('contact')"
          >icon-contact</v-icon>
        </template>
        <span class="text--primary font-weight-bold">Contact</span>
      </v-tooltip>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["activeSection"],
  methods: {
    scrollTo(to) {
      this.$vuetify.goTo(`#${to}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  padding-top: 132px;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
}

.v-navigation-drawer.sidebar {
  background-color: rgba(#1e1e1f, 0.85);
}

.v-icon.nav-icon {
  height: 30px;
  width: 30px;
  font-size: 30px;
  color: var(--v-secondary-base);
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    color: var(--v-accent-base);
  }

  &.active {
    color: var(--v-accent-base);
  }
}
</style>