<template>
  <div>
    <!-- header section star -->
    <app-header></app-header>
    <!-- header section end -->

    <!-- home section star  -->

    <div class="section-home">
      <div class="container">
        <b-row class="btn-new-category">
          <b-col lg="4" class="new-category"
            ><b-button size="lg">New Category</b-button></b-col
          >
        </b-row>
        <!-- <img src="@/../public/img/fondo-muebles3.jpg" alt=""> -->
        <div class="categorias">
          <div class="categoria1">
            <div class="textos">
              <!-- <h3>Alcobas</h3> -->
              <span class="price"> Alcobas </span>
            </div>
          </div>
          <div class="categoria2">
            <div class="textos">
              <!-- <h3>Comedores</h3> -->
              <span class="price"> Comedores </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer section star  -->

    <div><app-footer></app-footer></div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
