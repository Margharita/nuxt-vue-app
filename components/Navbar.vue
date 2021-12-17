<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nuxt SSR</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link exact class="nav-link" aria-current="page" to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/users">Users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login" v-if="!hasToken"
              >Login</nuxt-link
            >
            <a @click.prevent="logout" class="nav-link" href="#" v-else
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
});
</script>
