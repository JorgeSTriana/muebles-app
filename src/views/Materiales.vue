<template>
    <div>
        <app-header></app-header>
        <section><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis id et, obcaecati eos libero rem voluptatibus, voluptate nesciunt, sit illo exercitationem. Laborum quidem repudiandae magni illum quia sapiente maxime.</p></section>
        <app-footer></app-footer>
    </div>
</template>

<script>

import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'Materiales',
    components: {
        AppHeader,
        AppFooter
    },
}
</script>

<style scoped>

</style>