<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Profile</el-menu-item>
    <el-menu-item index="3">Messages</el-menu-item>
    <el-menu-item index="4">Photos</el-menu-item>
    <el-menu-item index="5">Settings</el-menu-item>
    <el-menu-item index="6">Logout</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
</style>
