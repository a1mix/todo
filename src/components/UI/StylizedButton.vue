<template>
  <button class="stylizedButton"><slot></slot></button>
</template>

<script>
export default {
  name: "stylized-button",
}
</script>

<style>
.stylizedButton { 
  padding: 5px 15px; 
  border: 1px solid #2e2e2e;
  border-radius: 10px;
  max-width: 200px; 
} 
.stylizedButton:hover {
  background: rgba(136, 135, 135, 0.376);
  transition: 0.2s;
}
</style>