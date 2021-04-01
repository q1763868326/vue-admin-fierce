<template>
  <v-card elevation="8" style="height:100%">
    <v-row class="mb-2 pt-4 justify-end" style="width:86%">
      <v-btn class="" color="primary" dark @click="createVersion">新建应用</v-btn>
    </v-row>
    <v-row class="pa-auto ma-auto justify-center">
      <v-data-table
        fixed-header
        height="540px"
        :headers="headers"
        :items="appInfoList"
        class="elevation-1"
        style="width:95%"
        :loading="isLoading"
        loading-text="Loading... Please wait"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="primary" dark @click="goToVersionList(item.id)">版本详情</v-btn>
          <v-btn class="ml-2" color="error" dark @click="deleteApplication(item.id)">删除</v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-card>
</template>

<script>
import { getAppInfoList, deleteApplication } from '@/api/appInfo'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      isLoading: true,
      headers: [
        { text: 'Id', value: 'id' },
        { text: '应用名称', value: 'appName' },
        { text: '平台', value: 'platform' },
        { text: '分类', value: 'category' },
        { text: '创建时间', value: 'createTime' },
        { text: '操作', value: 'actions' }
      ],
      appInfoList: [],
      pageSize: 5
    }
  },
  watch: {
    pageSize(newValue, value) {
      console.log(newValue + value)
    }
  },
  mounted() {
    this.getAppInfoList()
  },
  methods: {
    getAppInfoList() {
      const data = {
        userId: 1
      }
      getAppInfoList(data).then(res => {
        this.appInfoList = res.data
        this.isLoading = false
      })
    },
    goToVersionList(appId) {
      this.$router.push(`/versionInfoList/${appId}`)
    },
    createVersion() {
      this.$router.push('/app/create')
    },
    deleteApplication(appId) {
      const data = {
        appId: appId
      }
      deleteApplication(data).then(res => {
        Message({ message: res.message, type: 'success', duration: 2 * 1000 })
        this.getAppInfoList()
      })
    }
  }
}
</script>

<style></style>
