<template>
  <ul v-show="list.length > 0" class="todoList" >
    <transition-group name="list">
        <todo-item 
            v-for="item in list" 
            :item="item" 
            :key="item.id"
            @remove="$emit('deleteTodo', item)">
        </todo-item>
    </transition-group>
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
    emits: ["deleteTodo"],
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
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
</style>