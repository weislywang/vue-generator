import io from '@/util/request'
import urls from '@/constans/url'

const actions = {
    async getList({commit}, params) {
        try {
            const data = await io.request({
                url: urls.getList,
                data: params,
                method: 'get',
            })
            commit('GET_LIST_SUCCESS',data);
        } catch (e) {
            commit('GET_LIST_FAILED', e);
        }
    },
};

export default actions;
