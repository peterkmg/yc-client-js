<template>
  <el-container class="header-container">
    <div class="header-item">
      <el-button
        size="small"
        type="primary"
        icon="el-icon-plus"
        :loading="table.loading"
        @click="filldb"
      >
        Добавить
      </el-button>
    </div>
    <div class="header-item">
      <el-input
        v-model="table.search"
        size="small"
        style="width: 400px"
        placeholder="поиск"
      />
    </div>
  </el-container>
  <el-container class="main-container">
    <div class="app-main" style="height: 100%">
      <el-table
        size="small"
        :data="table.data"
        :loading="table.loading"
        show-summary
        height="100%"
      >
        <el-table-column label="#" type="index" />
        <el-table-column prop="full_name" sortable label="Наименование" />
        <el-table-column prop="short_name" sortable label="Сокращение" />
        <el-table-column label="Действия" align="right" width="240">
          <template #default="scope">
            <el-button size="mini" icon="el-icon-edit">
              Изменить
            </el-button>
            <el-button
              v-if="app.allowEdit"
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click.prevent="deleteRow(scope.$index)"
            >
              Удалить
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-container>
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
import useAppStore from '@/store/app'

const app = useAppStore()

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
  search: '',
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

  const { error } = await db.from('dict_company').insert(temp)
  if (error) ElMessage({ type: 'error', message: error.message })
  table.loading = false
}

onMounted(getData)
</script>

<style lang="scss" scoped>
$header-height: 64px;
$main-height: calc(100% - $header-height);
.header-container {
  height: $header-height;
}
.main-container {
  height: $main-height;
}
</style>
