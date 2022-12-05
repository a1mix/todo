<template>
  <select class="stylizedSelect" :value="modelValue" @change="changeOption"> 
    <option disabled value="">Выберите из списка</option>
    <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'param-select',
  props: {
    modelValue: [String],
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style>
.stylizedSelect {
  border-radius: 10px;
  padding: 5px 10px;
}
</style>