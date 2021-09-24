<template>
  <el-container class="header-container">
    <div class="header-item">
      <el-button
        size="small"
        type="primary"
        icon="el-icon-plus"
        :loading="table.loading.flag"
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
      <el-table size="small" :data="table.data.paged">
        <el-table-column label="#" align="center">
          <template #default="scope">
            {{ scope.$index }}
          </template>
        </el-table-column>
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
      <el-pagination
        layout="sizes, prev, pager, next, jumper"
        :default-current-page="table.pagination.page"
        :current-page="table.pagination.page"
        :page-size="table.pagination.size"
        :page-sizes="table.pagination.sizes"
        :total="table.pagination.total"
        hide-on-single-page
        @update:page-size="table.pagination.setPageSize"
        @update:current-page="table.pagination.setPage"
      />
    </div>
  </el-container>
</template>

<script lang="ts" setup>
import type { CompanyEntry } from '@/api/company'
import useAppStore from '@/store/app'
import api from '@/api'
import message from '@/utils/message'

const app = useAppStore()

const table = reactive({
  name: 'dict_company',
  data: {
    raw: [] as CompanyEntry[],
    paged: computed(() =>
      table.data.raw.slice(
        table.pagination.size * table.pagination.page - table.pagination.size,
        table.pagination.size * table.pagination.page,
      ),
    ),
  },
  loading: {
    flag: false,
    start: () => (table.loading.flag = true),
    finish: () => (table.loading.flag = false),
  },
  pagination: {
    page: 1,
    size: 10,
    sizes: [10, 25, 50, 100, 500, 5000],
    total: computed(() => table.data.raw.length as number),
    setPageSize: (val: number) => (table.pagination.size = val),
    setPage: (val: number) => (table.pagination.page = val),
  },
  search: '',
})

const getData = async() => {
  table.loading.start()
  const res = await api.company.getAll(table.name)
  if (res.error) message.error(res.error)
  else table.data.raw = res.data ?? []
  table.loading.finish()
}

const deleteRow = async(index: number) => {
  table.loading.start()
  const error = await api.company.deleteSingle(table.name, index)
  if (error) message.error(error)
  else table.data.raw.splice(index, 1)
  table.loading.finish()
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

:deep(.el-pagination) {
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0 0;

  .select-trigger > .el-input {
    width: 150px;
  }
}
</style>
