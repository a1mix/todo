<template>
  <TodoForm />
  <TodoList />
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
export default {
  components: {TodoForm, TodoList}
}
</script>

<style>

</style>