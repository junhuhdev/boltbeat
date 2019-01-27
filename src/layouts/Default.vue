<template>
  <el-container>
    <el-header>
      <nav-bar/>
    </el-header>
    <el-main>
      <el-row>
        <side-bar/>
        <el-col :span="21">
          <slot/>
        </el-col>
      </el-row>
    </el-main>
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
