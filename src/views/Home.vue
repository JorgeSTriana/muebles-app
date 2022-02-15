<template>
    <div>
        <!-- header section star -->
        <app-header></app-header>
        <!-- header section end -->

            <!-- home section star  -->
        
        <div class="section-home">
            
            <div class="container">
                <b-row class="btn-new-category"> 
                <b-col lg="4" class="new-category"><b-button size="lg">New Category</b-button></b-col>
            </b-row>
            <!-- <img src="@/../public/img/fondo-muebles3.jpg" alt=""> -->
                <div class="categorias">
                    <div class="categoria1">
                        <div class="textos">
                            <!-- <h3>Alcobas</h3> -->
                        <span class="price">
                            Alcobas
                        </span>
                        </div>
                    </div>
                    <div class="categoria2">
                        <div class="textos">
                            <!-- <h3>Comedores</h3> -->
                        <span class="price">
                            Comedores
                        </span>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
        <!-- footer section star  -->
        <!-- <div class="section-footer"> -->
            <div id="footer" class="page-footer2">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Redes Sociales</h5>
                        <ul class="redes">
                            <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    Todos los derechos reservados © 2021 Copyright 
                    <!-- <a class="grey-text text-lighten-4 right" href="#!">Dylan Pabón</a> -->
                </div>
            </div>
            </div>
        <!-- </div> -->
    </div>
</template>


<script>
import AppHeader from '@/components/AppHeader.vue';

export default ({
    name: 'Home',
    components: {
        AppHeader
    },
})
</script>
