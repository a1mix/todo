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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.deleteButton {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 30px;
    height: 30px;
    border: 1px solid red;
    border-radius: 50%;
    color: red;
}
.deleteButton:hover {
    background: rgba(232, 14, 14, 0.505);
    transition: 0.2s;
}
</style>