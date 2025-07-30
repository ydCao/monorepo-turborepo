import request from '@/utils/request'
export const getVisualization = () => {
    return request({
        url: '/areas_v3/bound/620000_full.json',
    })
}
