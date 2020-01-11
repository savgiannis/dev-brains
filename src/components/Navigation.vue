<template>
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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