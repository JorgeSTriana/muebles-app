<template>
    <div>
        <div v-for="user in users" v-bind:key="user.login.uuid">
            <img :src="user.picture.medium" alt="">     <!-- los dos puntos es  para acceder a un objeto  -->
            <h2>{{ user.name.first+" "+user.name.last }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    //props = forma de manejar el paso de datos entre componentes
    props:{
        users:{
            type: Array,
            default: () => []  //para pasarle una lista vacia como valor
        }
    }
}
</script>