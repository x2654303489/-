<template>
  
  <el-header style="text-align: right; font-size: 12px">
    <div style="float: left;height: 13px;">
            <h1>XX网站管理系统</h1>
          </div>
        <div class="toolbar">
          
          <el-dropdown>
            <el-avatar :icon="UserFilled" style="float: right; margin-top: 10px;" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>登录</el-dropdown-item>
                <el-dropdown-item>切换账号</el-dropdown-item>
                <el-dropdown-item>推出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          
        </div>
  </el-header>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :value="false">expand</el-radio-button>
    <el-radio-button :value="true">collapse</el-radio-button>
  </el-radio-group>
  
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
  <router-link to="/home/">
  <el-menu-item index="1">
      <el-icon><setting /></el-icon>
      <template #title>主页</template>
    </el-menu-item>
  </router-link>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>监控</span>
      </template>
      <router-link to="/home/fen12"><el-menu-item index="1-2">人员归属地</el-menu-item></router-link>
      <router-link to="/home/fen13"><el-menu-item index="1-3">http请求</el-menu-item></router-link>
      
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>商品管理</span>
      </template>
      <el-menu-item-group>
          <router-link to="/home/fen21/"><el-menu-item index="2-1">菜单管理</el-menu-item></router-link>
            <router-link to="/home/fen22"><el-menu-item index="2-2">商品管理</el-menu-item></router-link>
            <router-link to="/home/fen23"><el-menu-item index="2-3">订单管理</el-menu-item></router-link>
  </el-menu-item-group>
    </el-sub-menu>
    
    <el-sub-menu index="4">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>人员权限管理</span>
      </template>
      <el-menu-item-group>
          <router-link to="/home/fen31"><el-menu-item index="3-1">权限管理</el-menu-item></router-link>
            <router-link to="/home/fen32"><el-menu-item index="3-2">权限组</el-menu-item></router-link>
			<router-link to="/home/fen33"><el-menu-item index="3-3">注册人员管理</el-menu-item></router-link>
      </el-menu-item-group>
    </el-sub-menu>
   
  </el-menu>
  
  <el-container>
    <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
      
      
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { UserFilled } from '@element-plus/icons-vue'
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-container{
  position: absolute;
  width: 1300px;
  height: 700px;
  top: 50px;
  left: 200px;
}
.el-header{
  background-color: azure;
}
a{

  text-decoration: none;
	}
</style>
