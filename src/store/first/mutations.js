import * as types from './types';
import {message} from "ant-design-vue";

export default {
    [types.GET_LIST_SUCCESS](state, payload) {
        state.list = payload.results;
    },
    [types.GET_LIST_FAILED]() {
        message.error('获取数据失败')
    },
};
