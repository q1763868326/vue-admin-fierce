<template>
  <v-card>
    <v-card-title>版本上传</v-card-title>
    <v-card-text>
      <v-row class="mx-1 mb-3">
        <v-col col-3 class="text-body-1">应用名称: 分布式浏览器</v-col>
        <v-col col-3 class="text-body-1">应用平台: Android</v-col>
        <v-col col-3 class="text-body-1">当前推送版本号: 11</v-col>
        <v-col col-3 class="text-body-1">当前最新版本号: 12</v-col>
      </v-row>
    </v-card-text>
    <v-form>
      <v-row class="col-5 mx-6 pa-0">
        <v-file-input v-model="file" color="deep-purple accent-4" counter label="上传版本文件" prepend-icon="mdi-paperclip" outlined :show-size="1000">
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
              {{ text }}
            </v-chip>

            <span v-else-if="index === 2" class="overline grey--text text--darken-3 mx-2">+{{ files.length - 2 }} File(s)</span>
          </template>
        </v-file-input>
      </v-row>
      <v-row class="mx-11">
        <v-col>
          <v-text-field v-model="versionCode" label="版本号" dense outlined />
          <v-text-field v-model="versionName" label="版本名" dense outlined />
          <v-textarea v-model="modifyContent" row-height="20" label="更新内容" dense outlined />
        </v-col>
      </v-row>
    </v-form>

    <v-row class="mx-11">
      <v-card-actions>
        <v-btn class="primary" @click="upload">Upload</v-btn>
        <v-btn class="error ml-7" @click="cancelUpload">Cancle</v-btn>
      </v-card-actions>
    </v-row>
  </v-card>
</template>

<script>
import { Message } from 'element-ui'
import { versionUpload } from '@/api/versionInfo'

export default {
  data: () => ({
    versionName: '',
    versionCode: '',
    modifyContent: '',
    file: null
  }),
  methods: {
    upload() {
      const formData = new FormData()
      formData.append('appId', 1)
      formData.append('versionCode', this.versionCode)
      formData.append('versionName', this.versionName)
      formData.append('modifyContent', this.modifyContent)
      formData.append('uploaderId', 1)
      formData.append('file', this.file)
      versionUpload(formData)
        .then(res => {
          Message({ message: res.message, type: 'success', duration: 3 * 1000 })
          this.$router.back()
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancelUpload() {
      this.$router.back()
    }
  }
}
</script>

<style></style>
