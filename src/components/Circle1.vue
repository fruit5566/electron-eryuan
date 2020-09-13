<template>
  <div class="circle" :style="{ width: width + 'px', height: height + 'px', borderColor: color, borderWidth: borderWidth + 'px' }">{{ msg }}</div>
</template>

<script>
export default {
  props: {
    width: {
      default: 50
    },
    height: {
      default: 50
    },
    msg: {
      default: ""
    },
    color: {
      default: " #7e7e7e"
    },
    borderWidth: {
      default: 3
    }
  }
};
</script>

<style scoped>
.circle {
  /* width: 80px;
  height: 80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #7e7e7e;
}
</style>
