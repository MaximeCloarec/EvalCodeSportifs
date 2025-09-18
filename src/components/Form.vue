<template>
    <fieldset
        class="fieldset bg-primary border-base-300 rounded-box w-xs border p-4"
    >
        <legend class="fieldset-legend">Formulaire de contact</legend>

        <label class="label">Votre nom</label>
        <input
            v-model="userName"
            @input="validateName"
            type="text"
            class="input"
            placeholder="My awesome page"
            required
        />

        <label class="label">Votre email</label>
        <input
            v-model="userEmail"
            @input="validateEmail"
            type="text"
            class="input"
            placeholder="email@exemple.com"
            required
        />

        <label class="label">Sujet</label>
        <input
            v-model="userSubject"
            @input="validateSubject"
            type="text"
            class="input"
            placeholder="Sujet de votre message"
            required
        />
        <label class="label">Votre message</label>
        <textarea
            v-model="userMessage"
            @input="validateMessage"
            class="textarea"
            placeholder="Tapez votre message ici"
        ></textarea>
        <button @click="debug" class="btn btn-secondary">Envoyer</button>
    </fieldset>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["error"]);

const userName = ref("");
const userEmail = ref("");
const userSubject = ref("");
const userMessage = ref("");

const errors = ref({
    name: null,
    email: null,
    subject: null,
    message: null,
});

//regex
const nameRegex = /^[A-Za-z\s-]+$/;
const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

//validation

function validateName() {
    if (!userName.value.trim()) {
        errors.value.name = "Le nom est requis.";
        sendError(errors.value);
    } else if (!nameRegex.test(userName.value)) {
        errors.value.name = "Le nom ne doit contenir que des lettres.";
        sendError(errors.value);
    } else {
        errors.value.name = null;
    }
}

function validateEmail() {
    if (!userEmail.value.trim()) {
        errors.value.email = "L'email est requis.";
        sendError(errors.value);
    } else if (!emailRegex.test(userEmail.value)) {
        errors.value.email = "Email invalide.";
        sendError(errors.value);
    } else {
        errors.value.email = null;
    }
}

function validateSubject() {
    if (!userSubject.value.trim()) {
        errors.value.subject = "Le sujet est requis.";
        sendError(errors.value);
    } else if (userSubject.value.length < 8) {
        errors.value.subject = "Le sujet doit contenir au moins 8 caractères.";
        sendError(errors.value);
    } else {
        errors.value.subject = null;
    }
}

function validateMessage() {
    if (!userMessage.value.trim()) {
        errors.value.message = "Le message est requis.";
        sendError(errors.value);
    } else if (userMessage.value.length < 10) {
        errors.value.message = "Le message est trop court.";
        sendError(errors.value);
    } else {
        errors.value.message = null;
    }
}

function debug() {
    console.log(errors.value);
}

function sendError(errorMessage) {
    emit("error", errorMessage);
}
</script>
