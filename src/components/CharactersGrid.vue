<template>
  <div class="characters-grid">
    <CharacterCard v-for="char in charactersList" :key="char.id" :character="char" />
  </div>
</template>

<script setup lang="ts">
import { ICharacter } from '../types';
import { ref, watchEffect } from 'vue';
import CharacterCard from './CharacterCard.vue';

const props = defineProps<{
  characters: ICharacter[];
}>();

const charactersList = ref<ICharacter[]>([]);

watchEffect(() => {
  charactersList.value = props.characters;
});
</script>

<style scoped>
.characters-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

@media screen and (min-width: 1024px) {
  .characters-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
