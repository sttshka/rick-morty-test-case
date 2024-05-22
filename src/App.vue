<template>
  <div style="padding: 20px">Rick and Morty API TEST</div>
  <div class="container">
    <div class="header">
      <CharactersSearch
        v-model:form="searchState"
        v-model:is-invalid-name="isInvalidName"
        @reset="handleReset"
        @search="handleSearch"
      />
      <Pagination
        v-if="paginationState"
        :page="currentPage"
        :pagination="paginationState"
        @update="handleSearch"
      />
    </div>
    <div class="content">
      <CharactersGrid :characters="characters" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { CharactersGrid, CharactersSearch, Pagination } from './components';
import { StatusEnum, IResponse, ICharacter, IPagination, Nullable } from './types';
import { getFilteredCharacterListByParam } from './api';

const characters = ref<ICharacter[]>([]);
const paginationState = ref<IPagination>({
  count: 0,
  pages: 0,
  next: '',
  prev: ''
});
const currentPage = ref(1);
const searchState = ref<{ name: string; status: Nullable<StatusEnum> }>({
  name: '',
  status: null
});

const isInvalidName = ref(false);

onMounted(() => {
  handleSearch();
});

async function handleSearch(page?: number) {
  const payload = <{ name?: string; status?: Nullable<StatusEnum>; page?: number }>{
    name: searchState.value.name,
    status: searchState.value.status
  };
  if (page != null) {
    payload.page = page;
  }

  const { data, error } = await getFilteredCharacterListByParam<IResponse<ICharacter>>(payload);

  if (error) {
    isInvalidName.value = true;
    return;
  }

  if (data) {
    characters.value = data.results;
    paginationState.value = data.info;
    currentPage.value = page != null ? page : 1;
  }
}

function handleReset() {
  paginationState.value = {
    count: 0,
    pages: 0,
    next: null,
    prev: null
  };
  currentPage.value = 1;
  searchState.value = { name: '', status: null };
  isInvalidName.value = false;

  handleSearch();
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.content {
  display: flex;
  justify-content: center;
}
</style>
