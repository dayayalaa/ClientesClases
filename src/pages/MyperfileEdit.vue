<script setup>
import { ref } from 'vue';
import BaseHeading1 from '../components/BaseHeading1.vue';
import BaseButton from '../components/BaseButton.vue';
import { editMyPerfile } from '../services/auth';
const loading = ref(false);
const editData = ref ({
    displayName: '',
    bio:'',
    career:'',

})

const handleSubmit = async () => {
loading.value = true;
try{
    await editMyPerfile({...editData.value});
} catch (error){

}
}

</script>

<template>
    <BaseHeading1>Mi Perfil</BaseHeading1>

    <form action="#" @submit.prevent="handleSubmit">
        <div class="mb-4">
            <label for="bio" class="block mb-2">Biografia</label>
            <input
                type="bio"
                id="bio"
                class="w-full p-2 border rounded"
                v-model="editData.bio"
            >
        </div>
        <div class="mb-4">
            <label for="displayName" class="block mb-2">Nombre</label>
            <input
                type="displayName"
                id="displayName"
                class="w-full p-2 border rounded"
                v-model="editData.displayName"
            >
        </div>
        <div class="mb-4">
            <label for="career" class="block mb-2">Carrera</label>
            <input
                type="career"
                id="career"
                class="w-full p-2 border rounded"
                v-model="editData.career"
            >
        </div>
        <BaseButton>Ingresar</BaseButton>
    </form>

</template>