<script setup lang="ts">
import { ref } from 'vue';

const tasks = ref(['test']);
const newTask = ref('');

function resetTaskValue() {
  newTask.value = '';
}

function addTask() {
  if (newTask.value) {
    tasks.value.push(newTask.value);
    resetTaskValue();
  }
}

function removeTask(taskIndex: number) {
  tasks.value.splice(taskIndex, 1);
}
</script>

<template>
  <section class="todo">
    <Card class="todo__card">
      <template #title>
        <h1 class="todo__title">My todo mini app</h1>
      </template>
      <template #content>
        <ul class="todo__list">
          <li v-for="(task, index) in tasks" :key="task">
            <Card>
              <template #content>
                <div class="todo__item">
                  <div class="todo__item-body">
                    {{ task }}
                  </div>

                  <div class="todo__item-remove" @click="removeTask(index)">
                    <i class="pi pi-times" style="font-size: 1.5rem"></i>
                  </div>
                </div>
              </template>
            </Card>
          </li>
        </ul>

        <form @submit.prevent="addTask" class="todo__form">
          <InputText type="text" v-model="newTask" />
          <Button label="Submit" type="submit" />
        </form>
      </template>
    </Card>
  </section>
</template>

<style scoped lang="scss">
.todo {
  margin-top: 100px;

  &__card {
    margin: 0 auto;
    width: fit-content;
  }

  &__title {
    text-align: center;
  }

  &__list {
    margin-top: 20px;
    max-width: fit-content;
    min-width: 300px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__form {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }
}
</style>
