<template>
  <section>
    <h1>About page</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur et
      enim ipsa, maiores, inventore animi magni dolorum accusamus fugiat quas
      eaque error vero possimus, repellat odit perferendis nostrum? Expedita,
      incidunt.
    </p>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam rem
      provident reprehenderit placeat asperiores facilis earum incidunt
      voluptates animi! Ducimus!
    </p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quae?</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: ["auth"], // order is important
});
</script>
