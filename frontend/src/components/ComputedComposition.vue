<template>
    <div>
        <input type="text" v-model="mensaje">
        <h3> {{ mensaje }} </h3>
        <h3> {{ reverse }} </h3>
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from 'vue';

let mensaje: Ref<string> = ref('')
const reverse = computed(() => mensaje.value.split('').reverse().join(''))



</script>

<style scoped></style>