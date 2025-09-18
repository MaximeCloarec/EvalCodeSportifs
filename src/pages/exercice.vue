<template>
    <div class="flex">
        <div class="card bg-primary bg-base-100 w-96 shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Tp-Databinding : Mode Composition</h2>
                <figure>
                    <!-- v-bind de l'attribut src de l'image -->
                    <img
                        v-bind:src="imageUser"
                        :alt="nameUser"
                        height="100"
                        width="100"
                    />
                </figure>
                <!-- interpolation du nom -->
                <p class="name mt-3">{{ nameUser }}</p>
                <!-- v-bind de l'attribut value d'un input -->
                <input type="text" :value="nameUser" class="input" />
                <!-- <input type="text" v-model ="nameUser"> -->
                <div
                    class="d-flex flex-row justify-content-center align-items-center gap-2"
                >
                    <!-- interpolation de l'age -->
                    <p>{{ ageUser }} ans</p>
                </div>
                <div
                    class="d-flex flex-row justify-content-center align-items-center mt-3"
                >
                    <!-- interpolation fonction qui agmente l'age -->
                    <p>age + 10 :</p>
                    <p class="follow">{{ augmenterAge() }} ans</p>
                </div>
                <div class="px-2 rounded mt-4 date">
                    NB Fétiche :
                    <!-- interpolation de la fonction qui génère un nb random  -->
                    <p>{{ nombreRandom() }}</p>
                </div>
            </div>
        </div>
        <Consignes
            :id="consignesExo.id"
            :global-objective="consignesExo.globalObjective"
            :step-goals="consignesExo.stepGoals"
            @change="reactChange($event)"
        />
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const nameUser = ref('Dr Mario');
const ageUser = ref(30);
const imageUser = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg'

const augmenterAge = () => {
  // Avec les ref on peut acceder a leur value
  // Voyez ref comme une sorte de conteneur reactif de vue pour les variables
    return ageUser.value + 10;
}

const nombreRandom = () => {
    return Math.random();
  // return Math.floor(Math.random() * 100);
}

const consignesExo = ref({
    id: Math.random().toString(),
    globalObjective: 'Afficher dynamiquement les données du profil utilisateur DR Mario',
    stepGoals : [
        {description : 'Afficher le nom de l\'utilisateur avec template strings',
        isCompleted : false
        },
        {description : 'Afficher l\'âge de l\'utilisateur avec template strings',
        isCompleted : false
        }
        ,
        {description : 'Afficher l\'image de l\'utilisateur avec v-bind',
        isCompleted : false
        }
    ]
});

function reactChange(e){
    const step = consignesExo.value.stepGoals.find(
        (step) => step.description == e
    );

    step.isCompleted = !step.isCompleted

    console.log(step);
}

import Consignes from '../components/Consignes.vue';
</script>
