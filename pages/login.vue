<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
      <div class="form-group">
        <input
          type="text"
          v-model="token"
          ref="tokenInput"
          class="form-control"
        />
      </div>
      <p>
        <nuxt-link to="/">To home page {{ token | capitalize }}</nuxt-link>
      </p>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { isEmpty } from "lodash";

export default Vue.extend({
  layout: "empty",
  data: () => ({
    token: null,
  }),
  beforeCreate: function () {
    console.log(this.$refs.tokenInput, "beforeCreate");
  },
  created: function () {
    console.log(this.$refs.tokenInput, "created");
      console.log(isEmpty((this.$refs)))
  },
  beforeMount: function () {
    console.log(this.$refs.tokenInput, "beforeMount");
  },
  mounted: function () {
     console.log(isEmpty((this.$refs)))
    console.log(this.$refs.tokenInput, "mounted");
  },
  beforeUpdate: function () {
    console.log(this.$refs.tokenInput, "beforeUpdate");
  },
  updated: function () {
    console.log(this.$refs.tokenInput, "updated");
  },
  beforeDestroy: function () {
    console.log(this.$refs.tokenInput, "beforeDestroy");
  },
  destroyed: function () {
    console.log(this.$refs.tokenInput, "destroyed");
  },
  computed: {
    getInputRef() {
      return this.$refs.usernameInput;
    },
  },
  filters: {
    capitalize (value: any) {
      var capitalFirst = value?.charAt(0).toUpperCase();
      var noCaseTail = value?.slice(1, value?.length);
      return capitalFirst + noCaseTail;
    },
     Upper(value: any) {
            return value?.toUpperCase();
        }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login", this.token);
      this.$router.push("/");
    },
  },
});
</script>

<style lang="scss">
form {
  width: 500px;
  margin: 0 auto;
}
</style>
