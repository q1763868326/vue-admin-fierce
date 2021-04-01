<template>
  <v-card elevation="8" style="height:100%">
    <v-row class="mb-2 pt-4 justify-end" style="width:86%">
      <v-btn class="" color="primary" dark @click="uploadVersion">版本上传</v-btn>
    </v-row>
    <v-row class="ma-auto justify-center">
      <v-col class="col-11">
        <v-data-table fixed-header height="550px" :headers="headers" :items="versionInfoList" class="elevation-1" :loading="isLoading" loading-text="Loading... Please wait">
          <template v-slot:[`item.downloadUrl`]="{ item }">
            <v-btn color="primary" dark @click="downloadVersion(item.downloadUrl)">下载</v-btn>
            <v-btn class="ml-2" color="error" dark @click="deleteVersion(item.id)">删除</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { getVersionInfoList, downloadVersion, deleteVersion } from '@/api/versionInfo'
import { Message } from 'element-ui'

export default {
  props: {
    appId: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isLoading: true,
      headers: [
        { text: 'Id', value: 'id' },
        { text: '版本名', value: 'versionName' },
        { text: '版本号', value: 'versionCode' },
        { text: '更新内容', value: 'modifyContent' },
        { text: '版本大小', value: 'size' },
        { text: '上传时间', value: 'uploadTime' },
        { text: '下载地址', value: 'downloadUrl' }
      ],
      versionInfoList: [],
      pageSize: 5
    }
  },
  watch: {
    pageSize(newValue, value) {
      console.log(newValue + value)
    }
  },
  mounted() {
    this.getVersionInfoList()
    console.log(this.appId)
  },
  methods: {
    getVersionInfoList() {
      const data = {
        appId: this.appId
      }
      getVersionInfoList(data).then(res => {
        this.versionInfoList = res.data
        this.isLoading = false
      })
    },
    uploadVersion() {
      this.$router.push('/version/upload')
    },
    downloadVersion(url) {
      downloadVersion(url)
      Message({ message: '开始下载 i n g......', type: 'success', duration: 3 * 1000 })
    },
    deleteVersion(versionId) {
      deleteVersion(versionId)
      Message({ message: '删除成功！', type: 'success', duration: 3 * 1000 })
      this.getVersionInfoList()
    }
  }
}
</script>

<style></style>
