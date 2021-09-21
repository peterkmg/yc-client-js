<template>
  <el-header>
    <el-button type="primary">Добавить организацию</el-button>
  </el-header>

  <el-main>
    <el-table style="width: 100%;">
      <el-table-column sortable label="Наименование" />
      <el-table-column sortable label="Сокращение" />
      <el-table-column label="Действия">
        <template #default="scope">
          <el-button type="success">Изменить</el-button>
          <el-button type="danger">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script lang="ts" setup>
import { useSupabase } from 'vue-3-supabase'

const test = useSupabase()
</script>

<route lang="yaml">
meta:
  nav: true
  title: Documents
</route>
