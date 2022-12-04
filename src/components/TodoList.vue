<template>
  <ul v-show="list.length > 0" class="todoList" >
    <todo-item 
        v-for="item in list" 
        :item="item" 
        :key="item.id"
        @remove="$emit('deleteTodo', item)">
    </todo-item>
  </ul>
  <div v-show="list.length == 0">
    Добавленных постов нет!
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    components: {
        TodoItem
    },
    methods: {
    }
}
</script>

<style>
.todoList { 
    display: flex;
    align-items: flex-start ;
    flex-direction: column;
    gap: 10px;
    list-style: none;
}
</style>