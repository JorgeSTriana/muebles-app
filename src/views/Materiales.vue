<template>
  <div><app-header></app-header><app-footer></app-footer></div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "Materiales",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
