<template>
  <nav class="tabs">
    <slot/>
  </nav>
</template>

<script>
export default {
  name: "tab-bar",
  created() {
    this.$children.map((tab, index) => {
      tab.index = index;
    });
  }
};
</script>

<style scoped>
.tabs {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  background: lightgrey;
}
</style>
