import axios from 'axios';
import {message} from 'ant-design-vue';
import util from '@/util/util'

const request = async config => {
    const {method, url, data} = config

    const realUrl = method === 'post' ? url : `${url}?${util.objParams2Str(data)}`
    const result = await axios.request({
        method,
        url: realUrl,
        data,
    });

    if (result.status === 200) {
        return result.data
        // if (result.data.code === 0) {
        //     return result.data.data
        // } else {
        //     message.error(result.data.msg)
        // }
    } else if (result.status === 401) {
        // todo
    } else {
        message.error(result.statusText)
    }

}

export default {
    request,
}
