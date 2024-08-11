<template>
  <el-select
    v-model="store.value"
    multiple
    clearable
    collapse-tags
    placeholder="Select"
    popper-class="custom-header"
    :max-collapse-tags="1"
    style="width: 240px"
  >
    <template #header>
      <el-checkbox
        v-model="store.checkAll"
        :indeterminate="store.indeterminate"
        @change="handleCheckAll"
      >
        All
      </el-checkbox>
    </template>
    <el-option
      v-for="item in store.cities "
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import {fen33store} from "../store/fen33store"

import type { CheckboxValueType } from 'element-plus'
const store = fen33store()


watch(store.value, (val) =>{
      if (val.length === 0) {
        store.checkAll.value = false
        store.indeterminate.value = false
      } else if (val.length === store.cities.value.length) {
        store.checkAll.value = true
        store.indeterminate.value = false
      } else {
        store.indeterminate.value = true
      }
    })

const handleCheckAll = (val: CheckboxValueType) => {
  store.indeterminate.value = false
  if (val) {
    store.value.value = store.cities.value.map((_) => _.value)
  } else {
    store.value.value = []
  }
}
</script>

<style>
.custom-header {
  .el-checkbox {
    display: flex;
    height: unset;
  }
}
</style>
