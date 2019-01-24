<template>
  <div class="scroller-wrap" ref="scroll" :style="wrapStyle">
    <div class="scroller-content">
      <div class="pull-down" v-if="forword"></div>
      <slot/>
      <div class="pull-up" v-if="next"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroller",
  props: {
    width: Number,
    height: Number,
    top: Number,
    bottom: Number,
    forword: Function,
    next: Function
  },
  computed: {
    flag() {
      if (this.forword) {
        return true;
      } else {
        return false;
      }
    },
    wrapStyle() {
      //定位的滚动视图
      if (this.top && this.bottom) {
        return {
          position: "absolute",
          top: this.top + "px",
          bottom: this.bottom + "px"
        };
      } else {
        //普通调用滚动视图
        return {
          width: this.width + "px",
          height: this.height + "px"
        };
      }
    }
  },
  methods: {
    // scrollTo(y, time) {
    //   this.scroll.scrollTo(0, y, time);
    // }
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      startY: this.forword ? -50 : 0,
      probeType: 3
    });
    this.scroll.on("beforeScrollStart", () => {
      this.scroll.refresh();
    });

    //监听滚动跳转到上一页
    if (this.forword) {
      this.scroll.on("scrollEnd", () => {
        let y = this.scroll.y;
        if (y >= -10) {
          //触发跳转上一页
          this.forword();
        }

        if (y > -50) {
          this.scroll.scrollTo(0, -50, 200);
        }
      });
    }
    //监听滚动跳转到下一页面
    if (this.next) {
      this.scroll.on("scrollEnd", () => {
        let y = this.scroll.y;
        let maxY = this.scroll.maxScrollY;
        if (y < maxY + 50) {
          this.scroll.scrollTo(0, maxY + 50, 200);
        }
        if (y <= maxY) {
          //滚动到下一页
          this.next();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.scroller-wrap {
  background: white;
  overflow: hidden;
  width: 100%;
  left: 0;
}
.pull-down {
  width: 100%;
  height: 50px;
  // background: yellow;
}
.pull-up {
  // background: blue;
  width: 100%;
  height: 50px;
}
</style>

