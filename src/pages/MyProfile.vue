<script setup>
import { ref } from 'vue';
import BaseHeading1 from '../components/BaseHeading1.vue';

const loggedUser = ref({
    id: null,
    email:null,
    displayName: null,
    bio: null,
    career: null,
});

</script>

<template>
    <div class="flex">
        <BaseHeading1>Mi Perfil</BaseHeading1>
        <RouterLink to="/mi-perfil/editar">Editar</RouterLink>
    </div>


    <div class="mb-4">{{  loggedUser.bio || "Aca va la bio" }}</div>

    <dl>
        <dt>Email</dt>
        <dt>{{ loggedUser.email }}</dt>
        <dt>Nombre</dt>
        <dt>{{ loggedUser.displayName || 'No especificado' }}</dt>
        <dt>Carrera</dt>
        <dt>{{ loggedUser.career || 'No especificado' }}</dt>
        </dl>
</template>