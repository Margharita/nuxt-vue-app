<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <div><input /></div>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user.id)">User {{ user.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: ["auth"],
  //   async asyncData({ $axios }) {
  //     const users = await $axios.$get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     return { users };
  //   },
  async fetch({ store }) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch("users/fetch");
    }
  },
  computed: {
      users() {
          return this.$store.getters['users/users']
      }
  },
  data: () => ({
    pageTitle: "Users page",
  }),
  methods: {
    openUser(user: string) {
      this.$router.push("/users/" + user);
    },
  },
});
</script>
