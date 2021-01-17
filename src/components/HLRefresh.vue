<template>
    <scroller class="scroller"  @loadmore="onloadmore" loadmoreoffset="0">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
            <text class="indicator-text">{{pullDownTipTxt}}</text>
            <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <div class="cell" v-for="num in lists" :key="num">
            <div class="panel">
                <text class="text">{{num}}</text>
            </div>
        </div>
        <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
            <text class="indicator-text">Loading ...</text>
            <loading-indicator class="indicator"></loading-indicator>
        </loading>

    </scroller>
</template>

<script>
    const modal = weex.requireModule('modal')
    export default {
        data () {
            return {
                loadinging: false,
                refreshing: false,
                lists: [1, 2, 3, 4, 5],
                ///下拉加载默认文案
                pullDownTipTxt: '下来刷新'
            }
        },
        methods: {
            onloading (event) {
                console.log('--------onloading--------',event);
                modal.toast({ message: 'Loading', duration: 1 })
                this.loadinging = true
                setTimeout(() => {
                    this.loadinging = false
                }, 2000)
            },
            onrefresh (event) {
                console.log('---------onrefresh------',event);
                modal.toast({ message: 'Refreshing', duration: 1 })
                this.refreshing = true;
                this.pullDownTipTxt = '刷新中...';
                this.lists = [];
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
                this.getDataList();
            },
            onpullingdown (event) {
                console.log('---------onpullingdown------');
                if (event.pullingDistance > 50) {
                    this.pullDownTipTxt = '松开立即刷新';
                } else {
                    this.pullDownTipTxt = '下来刷新';
                }
            },
            onloadmore: function (e) {
                const self = this;
                console.log('---------onloadmore------',self);
                this.getDataList();
            },
            getDataList() {
                // 随机生成5个数
                let data_list = Object.keys(Array.apply(null, {length: 5}));
                this.lists = this.lists.concat(data_list);
            }
        }
    }
</script>

<style scoped>
    .loading {
        width: 750px;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .indicator-text {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }
    .indicator {
        margin-top: 16px;
        height: 40px;
        width: 40px;
        color: blue;
    }
    .panel {
        width: 600px;
        height: 250px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: #DDDDDD;
        background-color: #F5F5F5;
    }
    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }
</style>
