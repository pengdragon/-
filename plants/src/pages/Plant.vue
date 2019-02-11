<template>
  <div id="plant" class="page">
    <h2>植物多</h2>
    <scroller :to="44" :bottom="49">
      <ul class="main">
        <li v-for="(item,index) in data" :key="index">
          <img v-lazy="item.img" alt>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
//引入方法mapState将仓库store的数据传到组件中
import { mapState } from "vuex";
export default {
  created() {
    //执行action中plant模块的getTest方法 执行后数据所请求的数据就到了store中了
    this.$store.dispatch("plant/getTest");
  },
  computed: {
    //将全局数据传到组件中，组件数据字段为data可任意命名
    ...mapState({
      data: state => state.plant.list
    })
  }
};
</script>

<style lang="scss" scoped>
#plant {
  h2 {
    height: 1rem;
    font-size: 18px;
    text-align: center;
    line-height: 1rem;
  }
  main {
    width: 100%;
    overflow: hidden;
  }
}
</style>


