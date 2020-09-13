<template>
  <div class="set">
    <div class="value">{{ rpm }}</div>
    <div class="label">rpm</div>
    <div class="value">
      <span>{{ time }}</span>
      <span class="label">分钟</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rpm: {
      default: "-"
    },
    time: {
      default: "-"
    }
  }
};
</script>

<style lang="scss" scoped>
.set {
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  padding: 8px;
  border: 1.5px solid #96feff;
  border-radius: 10px;
  cursor: pointer;
  .value {
    line-height: 1;
    text-align: right;
    font-size: 16px;
    .label {
      font-size: 8px;
      text-align: right;
    }
  }
  .label {
    // padding-right: 6px;
    line-height: 1;
    text-align: right;
    font-size: 8px;
    margin-left: 2px;
  }
}
</style>
