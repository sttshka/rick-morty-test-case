<template>
  <div class="pagination">
    <div>
      <div class="pagination__total">Total: {{ pagination.count }}</div>
      <div class="pagination__total">Current page: {{ page }}</div>
    </div>

    <div>
      <button
        class="pagination__button"
        :disabled="!pagination.prev"
        @click="emit('update', page - 1)"
      >
        Previous
      </button>
      <button
        class="pagination__button"
        :disabled="!pagination.next"
        @click="emit('update', page + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPagination } from '../types';
defineProps<{
  pagination: IPagination;
  page: number;
}>();

const emit = defineEmits<{
  (e: 'update', page: number): void;
}>();
</script>

<style scoped>
.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
