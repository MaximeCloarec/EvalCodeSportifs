<template>
    <div class="card p-5 bg-error">
        <h2 class="card-title">Consignes</h2>
        <p>{{ id }}</p>

        <div class="card-body">
            <h3 class="card-title">Objectif Global</h3>
            <p>{{ globalObjective }}</p>
            <ul class="list bg-base-100 rounded-box shadow-md">
                <li class="list-row" v-for="step in props.stepGoals">
                    <div>{{ step.description }}</div>
                    <input
                        type="checkbox"
                        checked="checked"
                        class="checkbox checkbox-primary"
                        v-model="step.isCompleted"
                        @click="clicked(step.description)"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    id: String,
    globalObjective: String,
    stepGoals: Array,
});
const emit = defineEmits(["change"]);

function clicked(description) {
    emit("change", description);
}
</script>
