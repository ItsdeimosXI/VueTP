<template>
    <div>
        <input type="text" v-model="mensaje">
        <h3 > {{mensaje}} </h3>
        <h3> {{reverse}} </h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ComputedExample',
    data() {
        return {
            mensaje: ""
        }
    },
    computed:{
        reverse():string {
            return this.mensaje.split('').reverse().join('')
        }
    },
})

</script>

<style scoped>

</style>