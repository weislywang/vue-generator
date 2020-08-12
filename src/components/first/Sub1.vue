<template lang="pug">
    .wrap
        .search
            a-form(:form="form")
                a-row
                    label 筛选项1
                    .form-elem
                        a-col(span="4")
                            a-form-item
                                a-select(
                                    v-decorator="['selection1']"
                                    style="width: 90%"
                                    placeholder="请选择"
                                    :allowClear="true"
                                )
                                    a-select-option(value="test1") test1
                                    a-select-option(value="test2") test2
                                    a-select-option(value="test3") test3
                a-row
                    label 筛选项2
                    .form-elem
                        a-col(span="4")
                            a-form-item
                                a-range-picker(v-decorator="['selection2']" style="width: 90%" :placeholder="['开始时间','结束时间']")
                        a-col(span="4")
                            a-form-item
                                a-select(
                                    v-decorator="['selection3']"
                                    style="width: 90%"
                                    placeholder="请选择入群状态"
                                    :allowClear="true"
                                )
                                    a-select-option(value="true") 是
                                    a-select-option(value="false") 否
                    .search-btn
                        a-button(@click="clear") 清空
                        a-button(type="primary" @click="search") 查询
        .content
            a-table(
                :bordered="true"
                :data-source="dataSource"
                :columns="columns"
                :pagination="false"
            )
                img(slot="avatar" slot-scope="avatar" :src="avatar" width="60" height="60")
                .startTime(slot="subscribeTime" slot-scope="text") {{formatTime(text)}}
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "Sub1",
        data() {
            return {
                form: this.$form.createForm(this, {name: 'search'}),
                columns: [{
                    title: 'cell',
                    key: 'cell',
                    dataIndex: 'cell',
                    align: 'center',
                },{
                    title: 'email',
                    key: 'email',
                    dataIndex: 'email',
                    align: 'center',
                },{
                    title: 'gender',
                    key: 'gender',
                    dataIndex: 'gender',
                    align: 'center',
                },{
                    title: 'phone',
                    key: 'phone',
                    dataIndex: 'phone',
                    align: 'center',
                }],
            }
        },
        computed: {
            ...mapState('first', ['list']),
            dataSource() {
                return this.list.map((item,index) => {
                    item.key = index
                    return item
                })
            },
        },
        methods: {
            ...mapActions('first', ['getList']),
            search() {
                const val = this.form.getFieldsValue()
                const {selection1, selection2, selection3} = val
                this.getList({
                    selection1, selection2, selection3
                })
            },
            clear() {
                this.form.resetFields()
            },
        },
        mounted() {
            this.search()
        }
    }
</script>

<style lang="stylus" scoped>
    .wrap

        .search
            margin-bottom 20px

            label
                float left
                width 100px
                font-size 14px
                color #333
                height 40px
                line-height 40px

            .form-elem
                margin-left 100px

                >>>
                .ant-form-item
                    margin-bottom 10px

            .search-btn
                float right

                button
                    margin-left 10px

        .action
            overflow hidden
            margin-bottom 10px

            .action-btn
                float right

        .content
            .detail-btn
                span
                    color #1890ff

                    &:hover
                        cursor pointer

</style>
