<template>
    <div>
        <label>Ingrese valor del producto para calcular impuestos en pesos argentinos</label>
        <input type="number" v-model="numero">
        <h1> {{impuestos}} </h1>
    </div>
</template>

<script setup lang="ts">
import { Ref, computed, ref } from 'vue';
let numero:Ref<number> = ref(0)
const imp = 255
const impuestos = computed( () => "Total a pagar" + " " +(numero.value*imp) / 100   )
</script>

<style scoped>

</style>