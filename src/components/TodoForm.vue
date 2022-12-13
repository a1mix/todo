<template>
  <form class="todoForm" @submit.prevent>
    <p>Напиши что вам надо сделать</p>
    <stylized-input
     type="text"
     placeholder=""
     v-model.trim="todo.title"
     style="width: 100%;"
    />
    <stylized-button class="stylizedButton" @click="addTodo">Добавить</stylized-button>
  </form>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            todo: {
                id: "",
                title: "",
            }
        };
    },
    methods: {
        addTodo() {
            this.todo.id = Date.now();
            this.$emit("adding", this.todo);
            this.todo = {
                id: "",
                title: "",
            }
        }
    },
}
</script>

<style scoped>
.todoForm { 
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    margin: 20px;
}

</style>