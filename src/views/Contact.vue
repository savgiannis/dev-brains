<template>
  <div v-intersect="onIntersect">
    <div class="section">
      <h1 class="white--text title section-title">Get in touch with us</h1>

      <p
        class="white--text body-2 mt-5"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae aliquam pariatur quibusdam! Nobis, accusantium dolorum ipsum error saepe accusamus maiores perferendis corporis. Commodi accusantium quaerat quo inventore beatae nostrum!</p>

      <div class="d-flex justify-space-around mt-10">
        <div class="white--text d-flex flex-column">
          <v-icon size="30" color="accent" class="mb-2">icon-mobile</v-icon>
          <span>(+30) 6977456192</span>
          <span>(+30) 6987729343</span>
        </div>

        <div class="white--text d-flex flex-column">
          <v-icon size="30" color="accent" class="mb-2">icon-contact</v-icon>info@devbrains.com
        </div>
      </div>

      <form class="mt-12 d-flex flex-column">
        <div class="d-flex">
          <div class="flex-grow-1 mr-10">
            <div class="d-flex flex-column mb-7">
              <label class="white--text mb-2">Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="d-flex flex-column mb-7">
              <label class="white--text mb-2">Email</label>
              <input type="text" class="form-control" />
            </div>
            <div class="d-flex flex-column">
              <label class="white--text mb-2">Subject</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="d-flex flex-column flex-grow-1">
            <label class="white--text mb-2">Message</label>
            <textarea class="form-control text-area flex-grow-1"></textarea>
          </div>
        </div>

        <v-btn outlined color="secondary" class="align-self-center mt-10">SEND MESSAGE</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onIntersect(entries, observer) {
      this.$emit("activeSectionChange", {
        section: "contact",
        isIntersecting: entries[0].isIntersecting
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-control {
  border: 2px solid var(--v-secondary-base);
  height: 44px;
  border-radius: 8px;

  &.text-area {
    height: auto;
  }
}
</style>