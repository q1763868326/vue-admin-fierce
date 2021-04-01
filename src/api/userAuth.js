import qs from 'qs'
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'POST',
    data: qs.stringify(data)
  })
}
