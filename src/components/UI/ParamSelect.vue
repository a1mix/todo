<template>
  <select @change="changeOption"> 
    <!--  v-model="modelValue" вверху не работает -->
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
    modelValue: {
      type: String
    },
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

</style>