<template>
    <li class="todoItem">
        {{item.title}}        
        <button class="deleteButton" @click="$emit('remove', item)">X</button>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style>
.todoItem { 
    border: 1px solid #2e2e2e;
    border-radius: 10px;
    padding: 20px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.deleteButton {
    padding: 7px;
    border: 1px solid red;
    border-radius: 50%;
    color: red;
}
.deleteButton:hover {
    background: rgba(232, 14, 14, 0.505);
    transition: 0.2s;
}
</style>