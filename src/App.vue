<template>
  <v-app>
    <BackgroundImage />
    <Navigation :activeSection="activeSection[activeSection.length -1]" />

    <v-content>
      <div class="d-flex justify-center align-start">
        <div class="wrapper">
          <Home id="home" @activeSectionChange="onActiveSectionChange" />
          <About id="about" @activeSectionChange="onActiveSectionChange" />
          <!-- <Stack id="stack" @activeSectionChange="onActiveSectionChange" /> -->
          <Portfolio id="portfolio" @activeSectionChange="onActiveSectionChange" />
          <Contact id="contact" @activeSectionChange="onActiveSectionChange" />
          <Footer id="footer" />
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";
import BackgroundImage from "@/components/BackgroundImage";
import Footer from "@/components/Footer";

import Home from "@/views/Home";
import About from "@/views/About";
import Stack from "@/views/Stack";
import Portfolio from "@/views/Portfolio";
import Contact from "@/views/Contact";

export default {
  components: {
    Home,
    About,
    // Stack,
    Portfolio,
    Contact,
    BackgroundImage,
    Navigation,
    Footer
  },
  data() {
    return {
      activeSection: []
    };
  },
  methods: {
    onActiveSectionChange(payload) {
      if (payload.isIntersecting) {
        this.activeSection.push(payload.section);
      } else {
        const sectionIndex = this.activeSection.findIndex(
          section => section == payload.section
        );
        if (sectionIndex !== -1) this.activeSection.splice(sectionIndex, 1);
      }
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 1170px;

  & > * {
    margin-bottom: 150px;
  }

  #home {
    margin-bottom: 40px;
  }

  #contact {
    margin-bottom: 20px;
  }

  #footer {
    margin-bottom: 20px;
  }
}

.section {
  height: 100vh;
  background-color: #212121;
  padding: 40px;
  border-radius: 8px;

  &.home {
    background-color: transparent;
    position: relative;
  }

  &.about {
    height: 130vh;
  }

  &.footer {
    height: auto;
    padding: 20px;
  }

  .section-title {
    position: relative;
    &::after {
      position: absolute;
      bottom: -10px;
      left: 0;
      content: "";
      height: 4px;
      width: 30px;
      margin-top: 5px;
      background-color: var(--v-accent-base);
    }
  }
}
</style>