<template>
    <div class="d-flex justify-content-center">
        <div>
            <div class="form-group">
                <label>Nombre Profesor:</label>
                <input type="Text" class="form-control" v-model="profesor.nombre">
            </div>
            <div class="form-group">
                <label>Apellido Profesor:</label>
                <input type="Text" class="form-control" v-model="profesor.apellido">
            </div>
            <div class="form-group">
                <label>DNI Profesor:</label>
                <input type="Text" class="form-control" v-model="profesor.DNI">
            </div>
            <div class="form-group">
                <label>Materias que puede dar el Profesor:</label>
                <input type="Text" class="form-control" v-model="materia">
                <button class="btn btn-primary" @click="MatAgg">Agregar</button>
                <div>
                    <ul>
                        <li v-for="(mat, index ) in profesor.materia" :key="index">
                            {{ mat }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" v-model="profesor.documentacion"> Si mostro la documentacion</label>
            </div>
            <button class="btn btn-primary" @click="ProfAgg">Agregar</button>
        </div>
    </div>
    <div>
        <h1>Listado de profesores</h1>
        <table class="table">
            <thead>
                <th>Nombre </th>
                <th>Apellido </th>
                <th>DNI </th>
                <th>Materias </th>
                <th>Documentacion </th>
            </thead>
            <tbody v-for="prof in profesores" :key="prof.DNI">
                <td>
                    {{ prof.nombre }}
                </td>
                <td> {{ prof.apellido }}</td>
                <td> {{ prof.DNI }}</td>
                <td>
                    <ul>
                        <li v-for="(item, index) in prof.materia" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </td>
                <td v-if="prof.documentacion">
                    Entregado
                </td>
                <td v-else> No entregado</td>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

interface IProfesor {
    nombre: string,
    apellido: string,
    DNI: string,
    materia: Array<string>,
    documentacion: boolean
}

let profesor: Ref<IProfesor> = ref({
    nombre: '',
    apellido: '',
    DNI: '',
    materia: [],
    documentacion: false
});

let profesores:Ref<Array<IProfesor>> = ref([])

let materia: Ref<string> = ref('')

const MatAgg = () => {
    profesor.value.materia.push(materia.value),
        materia.value = ''
}
const ProfAgg = () => {
    profesores.value.push({
        nombre: profesor.value.nombre,
        apellido: profesor.value.apellido,
        DNI: profesor.value.DNI,
        materia:  profesor.value.materia,
        documentacion: profesor.value.documentacion
    })
    profesor.value.nombre = ''
    profesor.value.apellido = ''
    profesor.value.DNI = ''
    profesor.value.materia = []
    profesor.value.documentacion = false
}

</script>

<style scoped></style>