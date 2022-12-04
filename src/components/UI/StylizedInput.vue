<template>
  <input :value="modelValue" @input="updateInput" class="stylizedInput" type="text" >
</template>

<script>
export default {
    name: "stylized-input",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    }
}
</script>

<style>
.stylizedInput {
    padding: 10px;
}
</style>