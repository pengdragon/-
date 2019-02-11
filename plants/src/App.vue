<template>
  <div id="app">
    <Router-view/>
    <tab-bar>
      <tab-item :info="{title:'植物圈',path:'/plant'}"></tab-item>
      <tab-item :info="{title:'社区',path:'/community'}"></tab-item>
      <tab-item :info="{title:'商城',path:'/shopping'}"></tab-item>
      <tab-item :info="{title:'我的',path:'/mine'}"></tab-item>
    </tab-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#app{
  
}
</style>

