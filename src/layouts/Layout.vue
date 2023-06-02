<template>
  <c-header />
  <slot></slot>
  <c-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CHeader from "../components/Header.vue";
import CFooter from "../components/Footer.vue";

export default defineComponent({
  name: "Layout",
  components: {
    CHeader,
    CFooter,
  },
});
</script>
