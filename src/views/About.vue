<template>
  <div v-intersect="onIntersect">
    <div class="section about">
      <h1 class="white--text title section-title">Who is Behind All This</h1>

      <div class="d-flex mt-10">
        <div class="flex-grow-1 image-container mr-5 white--text">
          <h1 class="headline mb-2 font-weight-medium">Giannis Savvidis</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam reprehenderit, minus voluptatem neque ullam dolorem, optio atque nihil eum autem recusandae, quaerat tenetur. Reiciendis porro aliquam quis autem sapiente voluptates iure, aliquid quas officiis in nesciunt ipsum, laborum, illum corporis culpa molestias similique iusto doloribus! Ullam tenetur magnam accusantium consectetur iusto saepe tempore numquam, ipsam atque, quod facere adipisci sit vero nisi facilis dolor iste veniam accusamus, quaerat nesciunt corporis quae odit! Nihil vero, iste doloribus assumenda ipsa aliquam dolore porro quaerat laudantium sed. Quasi quibusdam pariatur dolor tenetur earum expedita natus cum. Quaerat qui molestiae accusantium nostrum vero.</p>
        </div>
        <div class="image-container">
          <img src="../assets/bill_gates.jpg" />
        </div>
      </div>

      <div class="d-flex mt-10">
        <div class="flex-grow-1 image-container ml-5 white--text">
          <h1 class="headline mb-2 font-weight-medium">Giorgos Konsoulakis</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsam reprehenderit, minus voluptatem neque ullam dolorem, optio atque nihil eum autem recusandae, quaerat tenetur. Reiciendis porro aliquam quis autem sapiente voluptates iure, aliquid quas officiis in nesciunt ipsum, laborum, illum corporis culpa molestias similique iusto doloribus! Ullam tenetur magnam accusantium consectetur iusto saepe tempore numquam, ipsam atque, quod facere adipisci sit vero nisi facilis dolor iste veniam accusamus, quaerat nesciunt corporis quae odit! Nihil vero, iste doloribus assumenda ipsa aliquam dolore porro quaerat laudantium sed. Quasi quibusdam pariatur dolor tenetur earum expedita natus cum. Quaerat qui molestiae accusantium nostrum vero.</p>
        </div>

        <div class="image-container order-first">
          <img src="../assets/steeve_jobs.jpg" />
        </div>
      </div>

      <h1 class="white--text title section-title mt-12">Our tech stack</h1>

      <div class="d-flex flex-wrap mt-12">
        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/vue.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Vue</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/nuxt.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Nuxt</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/node.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Node</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/mongo.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">MongoDB</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/firebase.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Firebase</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/ionic.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Ionic</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/electron.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Electron</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/strapi.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Strapi</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/docker.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Docker</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
          <img src="../assets/SVG/jenkins.svg" class="mr-5" />
          <h3 class="white--text subtitle-2 font-weight-regular">Jenkins</h3>
        </div>

        <div class="card pa-5 d-flex align-center mr-5 mb-5">
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
        section: "about",
        isIntersecting: entries[0].isIntersecting
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 40%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
}

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