<template>
    <div class="bg-base-200 min-h-screen flex flex-col items-center">
        <div class="hero-content text-center">
            <div class="max-w-md col-start-1">
                <h1 class="text-5xl font-bold">Contactez-nous</h1>
                <p class="py-6">
                    Vous avez une question ou une remarque? Envoyez-nous un
                    message!
                </p>
            </div>
        </div>
        <div class="flex">
            <Form @error="handleError($event)" />
            <Coordonnées v-if="!errorsMessage" />
            <p v-else v-for="error in errorsMessage">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>
import Coordonnées from "../components/Coordonnées.vue";
import Form from "../components/Form.vue";

import { ref } from "vue";

const errorsMessage = ref(null);

function handleError(e) {
    errorsMessage.value = e;
}
console.log(errorsMessage.value);
</script>
