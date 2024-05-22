<template>
  <div class="character-card">
    <div class="character-card__image">
      <img width="220" height="220" loading="lazy" :src="character.image" :alt="character.name" />
    </div>
    <div class="character-card__content">
      <div class="character-card__title">{{ character.name }}</div>
      <div class="character-card__subtitle">
        <div
          class="character-card__indicator"
          :class="getStatusIndicatorClass(character.status)"
        ></div>
        <div>{{ character.status }}</div>
        –
        <div>{{ character.species }}</div>
      </div>

      <div class="character-card__info">
        <div class="character-card__info-title">Last known location:</div>
        <div class="character-card__info-value">{{ character.location.name }}</div>
      </div>

      <div class="character-card__info">
        <div class="character-card__info-title">First seen in:</div>
        <div class="character-card__info-value">{{ character.origin.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICharacter, StatusEnum } from '../types';
import { Nullable } from '../types/handlers';

defineProps<{
  character: ICharacter;
}>();

function getStatusIndicatorClass(status: Nullable<StatusEnum>) {
  switch (status) {
    case 'Alive':
      return 'alive';
    case 'Dead':
      return 'dead';
    default:
      return 'unknown';
  }
}
</script>

<style scoped>
.character-card {
  display: flex;
  align-items: center;
  width: 600px;
  background: rgb(60, 62, 68);
  color: #fff;
  border-radius: 0.5rem;
}

@media screen and (max-width: 600px) {
  .character-card {
    width: 100%;
  }
}

.character-card__image {
  flex: 0 0 220px;
  display: block;
  overflow: hidden;
  border-radius: 0.5rem 0 0 0.5rem;
}

.character-card__image img {
  display: block;
  object-fit: contain;
  object-position: center;
}

.character-card__content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
  gap: 10px;
}

.character-card__title {
  font-size: 1.688rem;
  font-weight: 700;
}

.character-card__subtitle {
  display: flex;
  align-items: center;
  gap: 10px;
}

.character-card__indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.character-card__indicator.alive {
  background: #28a745;
}

.character-card__indicator.dead {
  background: #dc3545;
}
.character-card__indicator.unknown {
  background: #6c757d;
}

.character-card__info {
  display: flex;
  flex-direction: column;
}

.character-card__info-title {
  color: rgb(158, 158, 158);
}

.character-card__info-value {
  font-size: 1.125rem;
}
</style>
