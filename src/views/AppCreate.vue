<template>
  <v-card>
    <v-card-title>新建应用</v-card-title>
    <v-row class="flex-column col-11 pa-0">
      <v-col class="pa-0 ml-4">
        <v-radio-group v-model="platform" row>
          <template v-slot:label>
            <div>
              <strong>应用平台:</strong>
            </div>
          </template>
          <v-radio v-for="(platform, index) in platforms" :key="index" :rules="[rules.required]" color="red" :label="platform" :value="platform" />
        </v-radio-group>
      </v-col>
      <v-col class="pb-0">
        <v-text-field v-model="appName" :rules="[rules.required]" class="col-5 ml-8 pa-0" outlined label="应用名称" />
      </v-col>
      <v-col>
        <v-select v-model="category" :rules="[rules.required]" class="col-5 ml-8 pa-0" outlined :items="categorys" label="应用分类" />
      </v-col>
    </v-row>
    <v-card-actions>
      <v-btn class="primary ml-6 mb-6" @click="createApp">Create</v-btn>
      <v-btn class="error ml-6 mb-6" @click="backToPage">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import request from '@/utils/request'
import qs from 'qs'
import { Message } from 'element-ui'

export default {
  data: () => ({
    platforms: ['Android', 'IOS', 'Windows', 'Web', 'IOT'],
    platform: '',
    appName: '',
    category: '',
    categorys: [
      '实用工具',
      '影音视听',
      '聊天社交',
      '图书阅读',
      '学习教育',
      '效率办公',
      '时尚购物',
      '居家生活',
      '旅行交通',
      '摄影摄像',
      '医疗健康',
      '体育运动',
      '新闻资讯',
      '娱乐消遣',
      '金融理财',
      '游戏应用',
      '其他'
    ],
    rules: {
      required: value => !!value || 'Required.'
    }
  }),
  methods: {
    createApp() {
      if (this.platform === '' || this.appName.trim === '' || this.category === '') {
        Message({ message: '请填写完整的应用信息！', type: 'error', duration: 3 * 1000 })
        return
      }
      const data = {
        appName: this.appName,
        platform: this.platform,
        category: this.category,
        userId: this.$store.getters.userInfo.id
      }

      request({
        url: '/application/save',
        method: 'POST',
        data: qs.stringify(data)
      }).then(res => {
        Message({ message: '创建成功', type: 'success', duration: 5 * 1000 })
        this.$router.push('/appInfoList')
      })
    },
    backToPage() {
      this.$router.back()
    }
  }
}
</script>

<style></style>
