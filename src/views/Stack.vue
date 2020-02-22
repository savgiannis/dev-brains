<template>
  <div v-intersect="onIntersect">
    <div class="section">
      <h1 class="white--text title section-title mb-12">Our tech stack</h1>
      <h2 class="subtitle-1 white--text my-5 font-weight-medium">Front end</h2>

      <div class="card-container d-flex justify-start">
        <div class="card pa-5 d-flex align-center mr-5">
          <img src="../assets/SVG/vue.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Vue</h3>
        </div>

        <div class="card pa-5 d-flex align-center">
          <img src="../assets/SVG/nuxt.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Nuxt</h3>
        </div>
      </div>

      <h2 class="subtitle-1 white--text my-5 font-weight-medium">Back end</h2>

      <div class="card-container d-flex justify-start">
        <div class="card pa-5 d-flex align-center mr-5">
          <img src="../assets/SVG/node.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Node</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5">
          <img src="../assets/SVG/mongo.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">MongoDB</h3>
        </div>

        <div class="card pa-5 d-flex align-center">
          <img src="../assets/SVG/firebase.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Firebase</h3>
        </div>
      </div>

      <h2 class="subtitle-1 white--text my-5 font-weight-medium">Mobile & Desktop</h2>

      <div class="card-container d-flex justify-start">
        <div class="card pa-5 d-flex align-center mr-5">
          <img src="../assets/SVG/ionic.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Ionic</h3>
        </div>

        <div class="card pa-5 d-flex align-center">
          <img src="../assets/SVG/electron.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Electron</h3>
        </div>
      </div>

      <h2 class="subtitle-1 white--text my-5 font-weight-medium">CMS</h2>

      <div class="card-container d-flex justify-start">
        <div class="card pa-5 d-flex align-center mr-5">
          <img src="../assets/SVG/strapi.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Strapi</h3>
        </div>
      </div>

      <h2 class="subtitle-1 white--text my-5 font-weight-medium">Dev Ops</h2>

      <div class="card-container d-flex justify-start">
        <div class="card pa-5 d-flex align-center mr-5">
          <img src="../assets/SVG/docker.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Docker</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5">
          <img src="../assets/SVG/jenkins.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Jenkins</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5">
          <img src="../assets/SVG/azure.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular text-center">
            Microsoft
            <br />Azure
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onIntersect(entries, observer) {
      this.$emit("activeSectionChange", {
        section: "stack",
        isIntersecting: entries[0].isIntersecting
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.logos {
  margin-top: 50px;
  display: flex;
  & > * {
    margin-right: 20px;
  }
}

img {
  height: 50px;
}

.card {
  border: 1px solid white;
  border-radius: 8px;
  width: auto;
}
</style>