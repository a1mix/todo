<template>
  <div v-if="show" @click.stop="hideDialog" class="dialogWindow">
    <div @click.stop class="content"><slot> </slot></div>
  </div>
</template>

<script>
export default {
name: 'dialog-window',
props: {
  show: {
    type: Boolean,
    default: false
  }
},
methods: {
  hideDialog() {
    this.$emit("update:show", false)
  }
}
}
</script>

<style>
.dialogWindow {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.content {
  margin: auto;
  background: rgba(0, 0, 0, 0.766);
  color:  #fff;
  display: flex;
}

</style>