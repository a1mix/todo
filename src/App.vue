<template>
  <div class="container">
    <h1>Это ваша страница с заметками!</h1>
    <stylized-input
      v-model="searchQuery"
      placeholder="Search..."
    />

    <div class="app__btns">
      <stylized-button
        @click="showDialog"
        > 
        Добавить тудушку 
      </stylized-button>
      <!-- isn't working  -->
      <param-select 
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    
    <dialog-window v-model:show="dialogVisible">
      <todo-form @adding="addListItem"></todo-form>
    </dialog-window>
    <hr>
    <todo-list 
      :list="sortedAndSearchedTodos" 
      @deleteTodo="deleteTodo"
      v-if="!isTodosLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import ParamSelect from './components/UI/ParamSelect.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
    ParamSelect
  },
  data() {
    return {
      list: [],
      dialogVisible: false,
      isTodosLoading: true,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'alphavet', name: "По алфавиту"}, 
        {value: 'length', name: "По длине"}
      ]
    }
  },
  methods: {
    addListItem(todo) {
      this.list.push(todo);
      this.dialogVisible = false;
    },
    deleteTodo(item) {
      this.list = this.list.filter(p => p.id !== item.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchTodos() {
      try {
        this.isTodosLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        this.list = response.data
        this.isTodosLoading = false;
      } catch (error) {
        console.log(error.message)
      } 
    },
  },
  mounted() {
    this.fetchTodos()
  },
  computed: {
    sortedTodos() {
      return [...this.list]
    },
    sortedAndSearchedTodos() { 
      return this.sortedTodos.filter(todo => todo.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
  }
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}
.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>
