<template>
  <div class="page page-son">
    <header>
      <div @click="backAction" class="back">
        <van-icon name="arrow-left"/>
      </div>
      <div class="title">正文</div>
    </header>
    <div class="content">
      <div class="cut-line"></div>
      <div class="userActivity">
        <div class="avtor">
          <div class="avtorImage">
            <img v-lazy="item.avtor" alt>
          </div>
          <div class="avtorName">{{item.name}}</div>
        </div>

        <div class="userActivity-content">
          <img v-lazy="item.img1" alt>
          <img v-lazy="item.img2" alt>
          <p>{{item.dec}}</p>
        </div>
        <scroller>
          <div>暂无评论，来抢沙发</div>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      item: state => state.community.comment
    })
  },
  methods: {
    backAction() {
      this.$router.push("/community");
    }
  }
};
</script>

<style lang="scss">
.page-son {
  .cut-line {
    background: #eee;
    height: 0.1rem;
  }
  .userActivity-content {
    clear: both;
    img {
      width: 3.4rem;
      height: 3rem;
      float: left;
      margin-right: 0.23rem;
      border-radius: 0.1rem;
      margin-bottom: 0.3rem;
    }
    p {
      clear: both;
      font-size: 0.3rem;
      color: #333;
      font-weight: bold;
    }
  }
  .userActivity {
    overflow: hidden;
    .avtorImage {
      margin-top: 0.14rem;
      float: left;
      width: 0.64rem;
      height: 0.64rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .avtorName {
      height: 0.92rem;
      line-height: 0.92rem;
      float: left;
      color: #666666;
      font-size: 0.3rem;
    }
  }
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0px;
  height: 100%;
  width: 100%;
  background: white;
  .content {
    position: absolute;
    top: 0.88rem;
    left: 0;
    height: 30%;
    width: 100%;
  }
  header {
    height: 0.88rem;

    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;
    display: flex;
    .title {
      width: 100%;
      text-align: center;
      line-height: 0.88rem;
      font-size: 0.32rem;
    }
    .back {
      position: absolute;
      left: 0.2rem;
      top: 0.2rem;
      font-size: 0.32rem;
    }
  }
}
</style>

