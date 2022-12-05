<template>
  <div v-if="show" @click.stop="hideDialog" class="dialogWindow">
    <div @click.stop class="content"><slot class="dialogSlot"> </slot></div>
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

<style scoped>
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
  width: 400px;
  color:  #fff;
  display: flex;
  justify-content: center;

}

input {
  width: 90%;
}


</style>