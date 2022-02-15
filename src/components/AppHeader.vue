<template>
    <div class="appheader">
        <!-- =================Header============= -->
        <!-- <b-navbar toggleable="lg" type="dark" variant="info"> -->
        <b-navbar toggleable="md" class="navbar-all">
            <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
            <a href="/">
                <img class="img-logo" src="/img/logo2_preview_rev_1.1.png" alt="" height="50px">
            </a>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="btns-principales">
                    <b-nav-item class="btn-principales" href="/Empleado">Empleados</b-nav-item>
                    <b-nav-item class="btn-principales" href="/Nomina">Nómina</b-nav-item>
                    <b-nav-item class="btn-principales" href="/Materiales">Materiales</b-nav-item>
                    <b-nav-item class="btn-principales" href="/Muebles">Muebles</b-nav-item>
                    <b-nav-item class="btn-principales" href="/pedidos">Pedidos</b-nav-item>
                    <!-- <b-nav-item class="btn-principales" href="#" disabled>Disabled</b-nav-item> -->
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto menu-der">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" id="search" placeholder="Buscar"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0 " id="search-btn" type="submit">Buscar</b-button>
                    

                    <b-nav-item-dropdown right >
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item class="btn-principales" href="#">Sign In</b-dropdown-item>
                        <b-dropdown-item class="btn-principales" href="#">Profile</b-dropdown-item>
                        <b-dropdown-item class="btn-principales" href="#">Settings</b-dropdown-item>
                        <b-dropdown-item class="btn-principales" href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-nav-form>
                </b-navbar-nav>
                <div class="avatar">
                <!-- <b-avatar src="https://placekitten.com/300/300"></b-avatar> -->
                    <!-- <b-avatar src="/img/perfil.png" size="4rem"></b-avatar> -->
                    <b-avatar></b-avatar>
                </div>
            </b-collapse>
        </b-navbar>
    </div>
</template>
