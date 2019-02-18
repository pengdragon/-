<template>
    <div class="listOne">
        <div class="first">
            <div class="left">
                <img src="" alt="">
                <p><h6>白色香水百合花</h6></p>
                <p>慢100减10</p>
                <span>￥99</span>
            </div>
            <div class="right">
                 <img src="" alt="">
                <p><h6>郁金香菊花</h6></p>
                <p>慢100减10</p>
                <span>￥99</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

    .listOne{
        background: #f4f4f4;
        widows: 100%;
        height: 100%;
    }
    .first{
        display: flex;
        flex: 2;
        .left{
            width: 100%;
            height: 4.6rem;
            background:green;
            border-radius:  0.2rem; 
            margin: 0.26rem 0.12rem 0 0.24rem;
        }
        .right{
            width: 100%;
            height: 4.6rem;
            background: aqua;
            border-radius:  0.3rem; 
            margin: 0.26rem 0.24rem 0 0.12rem;
        }
    }
</style>
