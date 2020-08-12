<template lang="pug">
    .wrap
        header
            .logo
                a-icon(type="team")
                span XXX系统
            .info
            .logout(title="退出登录" @click="logout")
                a-icon(type="logout")
        .body
            nav
                a-menu(
                    mode="inline"
                    :inline-collapsed="collapsed"
                    @click="onOpenChange"
                    :defaultSelectedKeys="defaultSelectedKeys"
                    :defaultOpenKeys="defaultOpenKeys"
                )
                    a-sub-menu(v-if="item.children" v-for="item in navData" :key="item.path")
                        span(slot="title")
                            a-icon(:type="item.icon")
                            span {{item.name}}
                        a-menu-item(v-for="subItem in item.children" :key="subItem.path")
                            span {{subItem.name}}
                    a-menu-item(v-if="!item.children" v-for="item in navData" :key="item.path")
                        a-icon(:type="item.icon")
                        span {{item.name}}
            .content
                router-view
</template>

<script>
    import navData from '../routes/nav-config'

    export default {
        name: "index",
        data() {
            return {
                collapsed: false,
                navData,
                defaultSelectedKeys: [this.$route.path],
                defaultOpenKeys: [`/${this.$route.path.split('/')[1]}`],
            };
        },
        methods: {
            onOpenChange(item) {
                this.$router.push(`${item.key}`)
            },
            logout(){

            },
        },
        mounted() {
            // this.defaultOpenKeys = [`/${this.$route.path.split('/')[1]}`]
            console.log('this.$route', this.$route.path.split('/')[1])
        }
    }
</script>

<style lang="stylus" scoped>
    .wrap
        max-height 100vh

        header
            width 100%
            padding 0
            background #FFFFFF
            box-shadow 0 2px 4px 0 rgba(214, 225, 232, 0.49)
            position relative
            height 56px

            .logo
                float left
                height 100%
                background #3484FE
                color #fff
                line-height 56px
                width 200px
                text-indent 10px
                font-size 20px

            .logout
                float right
                margin-right 10px
                width 56px
                height 56px
                size 70px
                line-height 56px
                text-align center

                &:hover
                    cursor pointer

        .body
            nav
                float left
                width 200px
                height calc((100vh - 64px))
                overflow-y auto
                overflow-x hidden

                >>>
                    .ant-menu-inline
                        height 100%


            .content
                margin-left 200px
                height calc((100vh - 64px))
                overflow-y auto
                overflow-x hidden
                padding 20px
</style>
