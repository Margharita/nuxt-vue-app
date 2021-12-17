<template>
  <section>
    <h1>User {{ user.name }}</h1>

    <hr />

    <h3>{{ user.email }}</h3>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  middleware: ["auth"],
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return { user };
  },
});
</script>
