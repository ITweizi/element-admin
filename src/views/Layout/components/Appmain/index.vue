<template>
  <div class="app-main">
    <!-- 二级路由 -->
    <!-- <hr /> -->
    <router-view></router-view>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 10px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
