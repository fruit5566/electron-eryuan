<template>
  <div class="rent">
    <div class="data">{{ value }}</div>
    <div class="time">{{ time }} mins</div>
    <div class="process">
      <div class="main" :style="{ width: processWidth }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: 0
    },
    time: {
      default: "-"
    },
    processWidth: {
      default: "56%"
    }
  }
};
</script>

<style lang="scss" scoped>
.rent {
  display: flex;
  flex-direction: column;
  min-width: 46px;
  .data {
    font-size: 40px;
    line-height: 1;
    text-align: center;
  }
  .time {
    font-size: 10px;
    text-align: right;
  }
  .process {
    width: 100%;
    height: 4px;
    margin-top: 4px;
    background: #7e7e7e;
    .main {
      width: 80%;
      height: 100%;

      background: #fff;
    }
  }
}
</style>
