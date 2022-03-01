<template>
  <div>
    <app-header></app-header>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import api from "@/api";
import Users from "@/components/Users.vue";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    Users,
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    //hook created, justo cuando se crea el/este componente se ejecuta esta función
    api.getUsersPromise().then((data) => (this.users = data));
    //api.getUsersPromise().then(data => console.log(data))   //cuando llegue la info la imprima
  },
};
</script>
