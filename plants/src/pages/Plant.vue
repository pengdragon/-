<template>
  <div id="plant" class="page">
    <h2>植物多</h2>
    <scroller :top="44" :bottom="49">
      <van-swipe @change="onChange" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in plant.swiper" :key="index">
          <img v-lazy="item.img" alt>
        </van-swipe-item>
        <div ref="ef" class="custom-indicator" slot="indicator">{{ current }}/3</div>
      </van-swipe>
      <ul class="mains">
        <li class="main" v-for="(item,index) in plant.plantList" :key="index">
          <span class="decPlant-one">{{item.dec}}</span>
          <img class="imgPlant-one" v-lazy="item.img" alt>
          <span class="actorbty">{{actor}}</span>
          <span class="commentPlant-one">{{item.comment}}</span>
          <span class="lovePlant-one">{{item.love}}</span>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
//引入方法mapState将仓库store的数据传到组件中
import { mapState } from "vuex";
export default {
  data() {
    return {
      current: 1,
      color: ["red", "white", "yellow"],
      actor: "编者最美"
    };
  },
  methods: {
    onChange() {
      if (this.current == 3) {
        this.current = 0;
        console.log(this.current);
      }
      this.current++;
      // console.log(this.$refs.ef);

      // this.$refs.ef.style["color"] = "#" + this.getRandomColor();
      this.$refs.ef.style["color"] = this.color[this.current - 1];
    },
    //随机颜色，十六进制方法；
    getRandomColor() {
      var rand = Math.floor(Math.random() * 0xffffff).toString(16);
      if (rand.length == 6) {
        return rand;
      } else {
        return getRandomColor();
      }
    }
  },
  created() {
    //执行action中plant模块的getPlantfirst方法 执行后数据所请求的数据就到了store中了
    // this.$store.dispatch("plant/getTest");
    this.$store.dispatch("plant/getPlantfirst");
  },
  computed: {
    //将全局数据传到组件中，组件数据字段为data可任意命名
    ...mapState({
      data: state => state.plant.list,
      plant: state => state.plant.plant
    })
  }
};
</script>

<style lang="scss" scoped>
#plant {
  flex-direction: column;
  h2 {
    height: 1rem;
    font-size: 18px;
    text-align: center;
    line-height: 1rem;
  }
  .van-swipe-item img {
    width: 7.5rem;
    height: 6rem;
  }
  .custom-indicator {
    position: absolute;
    right: 0;
    bottom: 0;
    color: pink;
  }
  .mains {
    width: 7.5rem;
    position: relative;
  }
  .main {
    height: 2.5rem;
    border: 1px solid #ccc;
    margin-top: 1rem;
    background: lightcyan;
  }
  .decPlant-one {
    font-size: 0.43rem;
    position: absolute;
    width: 3.75rem;
  }
  .actorbty {
    position: absolute;
    line-height: 4.5rem;
    right: 6.2rem;
  }
  .commentPlant-one {
    position: absolute;
    line-height: 4.5rem;
    right: 3.9rem;
  }
  .lovePlant-one {
    position: absolute;
    line-height: 4.5rem;
    right: 5.1rem;
  }
  .imgPlant-one {
    width: 2.9rem;
    height: 2.5rem;
    position: absolute;
    right: 0;
  }
}
</style>


