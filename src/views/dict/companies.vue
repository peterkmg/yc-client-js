<template>
  <div class="app-header">
    <el-button
      type="primary"
      icon="el-icon-plus"
      :loading="table.loading"
      @click="filldb"
    >
      Добавить организацию
    </el-button>
    <el-checkbox
      v-model="table.allowDelete"
      label="Разрешить удаление"
      border
    />
  </div>

  <div class="app-main">
    <el-scrollbar>
      <el-table :fit="true" :loading="table.loading" :data="table.data">
        <el-table-column label="Действия" class="buttons-column">
          <template #default="scope">
            <el-button size="mini" icon="el-icon-edit" />
            <el-button
              v-if="table.allowDelete"
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click.prevent="deleteRow(scope.$index)"
            />
          </template>
        </el-table-column>
        <el-table-column label="#" class="buttons-column">
          <template #default="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="full_name" sortable label="Наименование" />
        <el-table-column prop="short_name" sortable label="Сокращение" />
      </el-table>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus/es'
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator'
import db from '@/database'

interface Company {
  id: number
  full_name: string
  short_name: string
}

interface CompanyLight {
  full_name: string
  short_name: string
}

const table = reactive({
  data: [] as Company[],
  loading: false,
  allowDelete: false,
})

const getData = async() => {
  table.loading = true
  const { data, error } = await db
    .from('dict_company')
    .select('id, full_name, short_name')
  if (error) ElMessage({ type: 'error', message: error.message })
  else table.data = data as Company[]
  table.loading = false
}

const deleteRow = async(index: number) => {
  table.loading = true
  const { error } = await db
    .from('dict_company')
    .delete()
    .match({ id: table.data[index].id })
  if (error) ElMessage({ type: 'error', message: error.message })
  else table.data.splice(index, 1)
  table.loading = false
}

const filldb = async() => {
  table.loading = true
  const temp = [] as CompanyLight[]
  for (let index = 0; index < 500; index++) {
    const t = {
      full_name: uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
        separator: ' ',
        length: 3,
      }),
      short_name: uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        separator: ' ',
        length: 2,
      }),
    }
    temp.push(t)
  }
  console.log(JSON.stringify(temp))
  const { data, error } = await db.from('dict_company').insert(temp)
  if (error) ElMessage({ type: 'error', message: error.message })
  table.loading = false
}

onMounted(getData)
</script>

<style lang="scss" scoped>
:deep(.el-table__row > .el-table__cell) {
  justify-content: center;
}
</style>
