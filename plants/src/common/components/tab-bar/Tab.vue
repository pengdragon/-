<template>
  <router-link class="tab" :to="info.path">
    <span>{{info.title}}</span>
  </router-link>
</template>

<script>
export default {
  name: "tab-item",
  props: ["info"]
};
</script>

<style>
.tab {
  text-align: center;
  flex: 1;
  list-style: none;
  line-height: 49px;
}
.tab div {
  display: block;
  width: 26px;
  height: 30px;
  overflow: hidden;
  margin: 0 auto;
}
.tab div img {
  width: 100%;
  /* transform: translateY(-61px); */
  /*
    选中图片平移： index*-61px
    未选中平移：index*-61+30.5
    */
}
.tab span {
  display: block;
  font-size: 12px;
  color: #555;
}
</style>
