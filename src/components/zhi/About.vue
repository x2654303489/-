<template>
	<div class="header">
	</div>
	<div class="main">
	  <div class="main-left" >
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
      
      <template #title>主页1</template>
    </el-menu-item>
  </router-link>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>监控</span>
      </template>
      <router-link to="/home/fen12"><el-menu-item index="1-3">人员归属地</el-menu-item></router-link>
      <router-link to="/home/fen13"><el-menu-item index="1-4">http请求</el-menu-item></router-link>
      
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>开发人员工具aaa</span>
      </template>
      <el-menu-item-group>
          <router-link to="/home/fen21/"><el-menu-item index="2-1">云盘</el-menu-item></router-link>
            <router-link to="/home/fen22"><el-menu-item index="2-2">Aiaa</el-menu-item></router-link>
            <router-link to="/home/fen23"><el-menu-item index="2-3">在线编程</el-menu-item></router-link>
  </el-menu-item-group>
    </el-sub-menu>
    
    <el-sub-menu index="4">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item-group>
          <router-link to="/home/fen31"><el-menu-item index="3-1">个人信息</el-menu-item></router-link>
            <router-link to="/home/fen32"><el-menu-item index="3-2">注册人员管理</el-menu-item></router-link>
            <router-link to="/home/fen33"><el-menu-item index="3-3">日志</el-menu-item></router-link>
  </el-menu-item-group>
    </el-sub-menu>
	<div class="rin"></div>
  </el-menu>
	  </div>
	  <div class="main-right">
		
	  </div>
	</div>
  </template>
  
  <script lang="ts" setup>
 import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
  
 
  </script>
  
  <style>
  .header {
	height: 50px;
	width: 100%;
	background-color: #42b983;
	color: white;
  }
  .main {
	height: 100%;
	width: 100%;
  }
  .main-left {
	height: 100%;
	width: 200px;
	
	background-color: #9726b6;
	color: white;
	float: left;
  }
  .main-right {
	height: 100%;
	width: 657px;
	height: 400px;
	background-color: #9e3939;
	color: white;
	float: right;
  }
  .rin {
	height: 100px;
	width: 100px;
	background-color: #03f4c0;
	color: white;
	
	float: right;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>
  