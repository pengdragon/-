<template>
    <div id="shopping" class="page">
        <header class="header">
            <div class="search">
                <van-icon name="search"/>
                <input type="text" placeholder="多肉 绿色植物">
            </div>
        </header>
        <nav class="nav" >
            <ul class="navUl">
                <li @click="btnAction('bouquet')" >新鲜花束</li>
                <li @click="btnAction('potting')" >户外植物</li>
                <li @click="btnAction('out')" >花卉盆栽</li>
            </ul>
        </nav>
        <scroller class="shopList" :top="71" :bottom="49">
            <template>
            <bouquet v-if="flag=='bouquet'"/>
            <potting v-else-if="flag=='potting'"/>
            <out v-else/>
            </template>
           
        </scroller>
    </div>
</template>

<script>

export default {
     components:{
        bouquet: () => import('../component/shoppages/bouquet'),
        out: () => import('../component/shoppages/out'),
        potting: () => import('../component/shoppages/potting'),
     },
    data(){
        return {
            flag:"bouquet",
            classVal:"effect",
        }
    },
    methods:{
        btnAction(flag){
            this.flag=flag;
            if(this.flag=flag){
                
            }else{
                this.classVal=""
            }
        }
    },
    
    created(){
        this.$store.dispatch("shopping/getShoppingtrade");
    },
  computed: {
    ...mapState({
      shopping: state => state.shopping.shopping
    })
  },
}
</script>

<style lang='scss' scoped>
.header{
    height: 44px;
}
.search{
    padding: 7px 0;
    text-align: center;
    position: relative;
    .van-icon.van-icon-search::before {
      position: absolute;
      left: 0.2rem;
      top: -0.24rem;
      font-size: 0.34rem !important;
    }
    input{
        padding-left:0.5rem;
        width: 6rem;
        background: #f4f4f4;
        color: #b2b2b2;
        height: 30px;
        border: 1px solid #f4f4ff;
        border-radius: 0.3rem; 
        font-size: 11px;
    }
}
.navUl{
    display: flex;
    flex: 3;
    
    li{
        text-align: center;
        width: 100%;
        margin: 0.08rem 0
    }
}
.shopList{
    background: #f4f4f4;
    height: 100%;
}
.effect{
    color: #5ecc71;
    border-bottom: 1px solid #5ecc71;
}
</style>
