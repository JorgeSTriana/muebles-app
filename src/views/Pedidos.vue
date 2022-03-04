<template>
  <div>
    <app-header></app-header>

    <aside>
      <ul>
        <li><button>Nuevo</button></li>
        <li><button>Detalles</button></li>
        <!-- <li><button>Pintura</button></li>
        <li><button>Engallado</button></li> -->
      </ul>
    </aside>

    <app-footer></app-footer>
  </div>
</template>

<style scoped>
ul {
  /* width: 100%; */
  margin: 3%;
  list-style: none;
  display: flex;
  justify-content: center;
  padding-left: 0; /* Para evitar que se agregen 20px */
}
li {
  padding: 1%;
  /* width: 5%; */
}
button {
  color: #318aac;
  font-size: 20px;
  font-weight: 500;
  padding: 0.5em 1.2em;
  background: rgba(0, 0, 0, 0);
  border: 2.3px solid;
  border-color: #318aac;
  border-radius: 10px;
  transition: all 1s ease;
  position: relative;
}
button:hover {
  background: #318aac;
  color: #fff;
}
</style>

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
