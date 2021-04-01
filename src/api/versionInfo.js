import request from '@/utils/request'
import qs from 'qs'

export function versionUpload(data) {
  return request({
    url: '/version/upload',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: data
  })
}

export function getVersionInfoList(data) {
  return request({
    url: '/version/list?' + qs.stringify(data),
    method: 'GET'
  })
}

export function deleteVersion(versionId) {
  return request({
    url: '/version/' + versionId,
    method: 'Delete'
  })
}

export function downloadVersion(url) {
  var elemIF = document.createElement('iframe')
  elemIF.src = 'http://127.0.0.1:9777' + url
  elemIF.style.display = 'none'
  document.body.appendChild(elemIF)
}
