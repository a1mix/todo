<template>
  <!-- <div v-show="!userAutorised">
    <button @click="(this.userAutorised=true)">Войти</button>
  </div> -->

  <div v-show="!userAutorised" id="app">
    <h1>Это ваша страница с заметками!</h1>
    <div class="app__btns">
      <stylized-button
        @click="showDialog"
        > 
        Добавить тудушку 
      </stylized-button>
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
      :list="list" 
      @deleteTodo="deleteTodo"
      v-if="!isTodosLoading"
    />
    <div v-else>Идет загрузка</div>
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
      userAutorised: false,
      isTodosLoading: true,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: "По названию"}, 
        {value: 'body', name: "По содержимому"}
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
  }
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
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
