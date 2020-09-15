<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from "./components/Index";
export default {
  components: {
    // Index
  }
};
</script>

<style>
html {
  height: 100vh;
  font-family: "14px -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif";
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: rgb(51, 51, 51);
  color: #fff;
}

div {
  display: flex;
}

.flex {
  display: flex;
}

.flex1 {
  flex: 1;
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.border {
  border: 1px dashed red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
