<template>
  <div>
    <Navbar />
    <main>
      <div class="container"><nuxt /></div>
    </main>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend({
  components: { Navbar },
});
</script>
