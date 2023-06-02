<template>
  <div id="app">
    <c-layout>
      <router-view />
    </c-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "./router";
import CLayout from "./layouts/Layout.vue";

export default defineComponent({
  name: "App",
  components: {
    CLayout,
    router,
  },
});
</script>
