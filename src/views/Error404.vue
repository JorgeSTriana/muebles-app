<template>
    <div>
        <app-header/>
        <div class="info">
            <h1>404</h1>
            <h2>page not found</h2>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
    components: {
        AppHeader
    }
}
</script>
<style scoped>
    .info{
        display: flex;
        height: 500px;
        flex-direction: column;
        justify-content: center;
    }
    h1, h2{
        text-align: center;
        margin-top: 5px;
    }
</style>