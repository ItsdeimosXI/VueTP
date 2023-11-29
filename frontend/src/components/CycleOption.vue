<template>
    <div>
        <p>Hola mundo</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'CycleOption',
    created() {
        console.log("Created");
        
    },
    mounted() {
        console.log("Mounted");
        
    },
    updated() {
        console.log("Updated");
        
    },
    unmounted() {
        console.log("Unmunted");
        
    },
})
</script>

<style scoped>

</style>