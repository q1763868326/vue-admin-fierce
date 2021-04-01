import qs from 'qs'
import request from '@/utils/request'

export function getAppInfoList(data) {
  return request({
    url: '/application/list?' + qs.stringify(data),
    method: 'GET'
  })
}

export function deleteApplication(data) {
  return request({
    url: '/application/delete',
    method: 'POST',
    data: qs.stringify(data)
  })
}
