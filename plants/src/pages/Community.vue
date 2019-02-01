<template>
  <div id="community" class="page">
    <Router-view/>
    <header class="header">
      <div class="left">
        <van-icon name="search"/>
        <input type="text" placeholder="搜索圈友植物">
      </div>
      <div @click="btnMessageAction" class="right">
        <van-icon name="chat-o"/>
        <span>消息</span>
      </div>
    </header>
    <scroller :top="44" :bottom="49">
      <div class="cut-line"></div>
      <div v-for="(item,index) in  userActivity" :key="item.id" class="userActivity">
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
        <div class="function border-bottom">
          <i @click="btnLiveAction" class="pl aixin" :style=" styleLive"></i>
          <i @click="btnCommentAction(item)" class="pl pinglun1"></i>
          <i @click="btnShareAction(item,index)" class="pl fenxiang"></i>
        </div>
      </div>
    </scroller>
    <van-popup v-model="popupVisible" position="bottom" :overlay="false">
      <div @click="btnClosrAction" class="popup-content">
        <div class="popup-top">
          <i class="pl iconfontzhizuobiaozhunbduan32"></i>
          <span>微信好友</span>
        </div>
        <div class="popup-top">
          <i class="pl pengyouquan"></i>
          <span>朋友圈</span>
        </div>
        <div class="popup-top">
          <i class="pl fenxiangqqhaoyou"></i>
          <span>QQ好友</span>
        </div>
        <div class="popup-bottom">
          <i class="pl qqkongjian"></i>
          <span>QQ空间</span>
        </div>
        <div class="popup-bottom">
          <i class="pl fuzhilianjie"></i>
          <span>复制链接</span>
        </div>
      </div>
      <!-- <div style="height:100px;
      background:red"></div>-->
    </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isSelector: false,
      styleLive: {
        color: ""
      },
      popupVisible: false
    };
  },
  methods: {
    //点赞按钮
    btnLiveAction() {
      this.isSelector = !this.isSelector;
      if (this.isSelector) {
        this.styleLive.color = "red";
      } else {
        this.styleLive.color = "";
      }
    },
    //分享按钮
    btnShareAction() {
      if (!this.popupVisible) {
        console.log("弹框");
        this.popupVisible = true;
      }
    },
    btnClosrAction() {
      console.log(6666);
      this.popupVisible = false;
    },
    //评论 切换组件
    btnCommentAction(item) {
      this.$store.commit("community/setComment", item);
      this.$router.push("/community/comment");
    },
    //切换到消息组件
    btnMessageAction() {
      this.$router.push("/community/message");
    }
  },
  computed: {
    ...mapState({
      userActivity: state => state.community.userActivity
    })
  },
  created() {
    console.log(555);
    this.$store.dispatch("community/getCommunityUserActivity");
  }
};
</script>

<style lang="scss" scoped>
.van-popup {
  .popup-content {
    box-sizing: border-box;
    padding-top: 0.6rem;
    display: flex;
    height: 3rem;
    flex-wrap: wrap;
    i::before {
      font-size: 0.32rem !important;
    }
    span {
      font-size: 0.32rem;
    }
    div:nth-child(1) i::before {
      color: rgb(146, 198, 94);
    }
    div:nth-child(2) i::before {
      color: rgb(81, 216, 184);
    }
    div:nth-child(3) i::before {
      color: rgb(129, 129, 228);
    }
    div:nth-child(4) i::before {
      color: rgb(233, 233, 139);
    }
    div:nth-child(5) i::before {
      color: rgb(102, 102, 216);
    }
    .popup-top {
      flex-direction: column;
      width: 33.33%;
      display: flex;
      // justify-content: flex-end;
      align-items: center;
    }
    .popup-bottom {
      flex-direction: column;
      width: 40%;
      display: flex;
      align-items: center;
    }
  }
}
#community {
  .v-modal {
    width: 100px;
    height: 200px;
    background: blue;
  }
  .function {
    .active {
      color: red;
    }
    box-sizing: border-box;
    height: 1rem;
    position: relative;
    .pl {
      position: absolute;
      bottom: 0.32rem;
    }
    .aixin {
      right: 2.24rem;
    }
    .pinglun1 {
      right: 1.44rem;
    }
    .fenxiang {
      right: 0.64rem;
    }
  }

  .cut-line {
    background: #eee;
    height: 0.1rem;
  }
  .userActivity {
    padding-left: 0.24rem;
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
  .scroller-content {
    width: 100%;
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
  }
  .header {
    display: flex;
    // height: 44px;
    padding: 7px 0;
    padding-left: 14px;
    // background: blue;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .left {
    flex: 1;
    position: relative;
    .van-icon.van-icon-search::before {
      position: absolute;
      left: 0.2rem;
      top: -0.24rem;
      font-size: 0.34rem !important;
    }
    input {
      padding-left: 0.58rem;
      box-sizing: border-box;
      height: 30px;
      width: 6rem;
      background: #f4f4f4;
      outline: none;
      border: 1px solid #f4f4f4;
      border-radius: 0.1rem;
      color: #b2b2b2;
      font-size: 11px;
    }
  }
  .right {
    box-sizing: border-box;
    padding-left: 0.46rem;
    .van-icon-chat-o::before {
      display: block;
      font-size: 20px;
      margin-top: -0.06rem;
    }
    flex: 1;
    span {
      font-size: 12px;
      color: #666;
      display: block;
      margin-top: -0.12rem;
    }
  }
}
</style>

