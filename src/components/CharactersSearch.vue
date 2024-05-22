<template>
  <form @submit.prevent="handleSubmitForm" class="characters-search">
    <div class="characters-search__form-controls">
      <input
        :class="{ invalid: isInvalidName }"
        type="text"
        v-model="localForm.name"
        @input="emit('update:isInvalidName', false)"
      />
      <select v-model.trim="localForm.status">
        <option v-for="status in Object.values(StatusEnum)" :key="status" :value="status">
          {{ status }}
        </option>
      </select>
    </div>
    <div class="characters-search__form-controls">
      <button type="submit" class="characters-search__form-controls__submit-button">
        Применить
      </button>
      <button
        type="button"
        @click="emit('reset')"
        class="characters-search__form-controls__reset-button"
      >
        Сбросить
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { StatusEnum } from '../types';
import { ref, watchEffect } from 'vue';
import { Nullable } from '../types/handlers';

const props = defineProps<{
  form: { name: string; status: Nullable<StatusEnum> };
  isInvalidName: boolean;
}>();

const emit = defineEmits<{
  (e: 'search'): void;
  (e: 'update:form', value: { name: string; status: Nullable<StatusEnum> }): void;
  (e: 'update:isInvalidName', value: boolean): void;
  (e: 'reset'): void;
}>();

const localForm = ref<{ name: string; status: Nullable<StatusEnum> }>({ name: '', status: null });
watchEffect(() => {
  localForm.value = props.form;
});

function handleSubmitForm() {
  emit('update:form', localForm.value);
  emit('search');
}
</script>

<style scoped>
.characters-search {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.characters-search__form-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.characters-search__form-controls__submit-button {
  width: 100%;
  background: #213547;
  color: #fff;
}

.characters-search__form-controls__reset-button {
  width: 100%;
  background: #dc3545;
  color: #fff;
}
</style>
