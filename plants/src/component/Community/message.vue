<template>
  <div class="page page-son">
    <header>
      <div @click="backAction" class="back">
        <van-icon name="arrow-left"/>
      </div>
      <div class="title">消息中心</div>
    </header>
    <div class="content">
      <div class="cut-line"></div>
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

