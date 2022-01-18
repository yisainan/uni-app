<template>
    <view class="uni-padding-wrap">
       123wwww
       
       <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'tababr',
webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }                

            }
        },
        methods: {

        }
    }
</script>

<style>
    button {
        margin-top: 30upx;
    }

    .btn-area {
        padding-top: 30upx;
    }
</style>
