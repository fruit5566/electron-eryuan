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
  background-color: rgb(51, 51, 51);
  color: white;
  user-select: none;
}
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.border {
  border: 1px dashed red;
}
</style>
