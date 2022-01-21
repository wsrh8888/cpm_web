import { request } from '@/utils/request'
import { baseUrl } from '@/utils/config'

export const getAllVersionsApi = (data: any) => {
  return request({
    method: 'post',
    url: `${baseUrl}/cpmVersion/getCpmVersion`,
    data
  })
}
export const getCpmProjectApi = (data: any) => {
  return request({
    method: 'post',
    url: `${baseUrl}/cpmProject/getCpmProjectInfo`,
    data
  })
}

export const getCpmVersionApi = (data: any) => {
  return request({
    method: 'post',
    url: `${baseUrl}/cpmVersion/getCpmVersion`,
    data
  })
}
