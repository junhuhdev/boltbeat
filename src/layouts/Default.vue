<template>
  <el-container>
    <el-header>
      <nav-bar/>
    </el-header>
    <el-row>
      <side-bar/>
      <el-col :span="20">
        <el-main>
          <slot/>
        </el-main>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
export default {
  components: {
    NavBar,
    SideBar
  }
};
</script>

<style scoped>
</style>
