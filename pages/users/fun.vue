<template>
  <div class="fun-container">
    <h1>
      <span>Are</span> <span>you</span> <span>rodian</span> <span>?</span
      ><span>!</span>
    </h1>
    <nuxt-img
      src="/rodian.jpg"
      width="300"
      height="500"
      :modifiers="{ effect: 'colorize:50', color: 'red' }"
      fit="cover"
      position="top"
    />
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: "FunTemplate",
  middleware: ["auth"],
  created() {
    this.$log();
  },
};
</script>

<style lang="scss">
.fun-container h1 span:first-child {
  color: deeppink;
}
.fun-container h1 span:nth-child(2) {
  color: blueviolet;
}
.fun-container h1 span:nth-child(3) {
  color: red;
}
.fun-container h1 span:nth-child(4) {
  color: yellow;
}
.fun-container h1 span:nth-child(5) {
  color: green;
}
</style>
