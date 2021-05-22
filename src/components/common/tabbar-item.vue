<template>
  <div class="tabbar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icom"></slot>
    <slot v-else name="item-icom-active"></slot>
    <div :style="itemColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    itemColor() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      console.log('dd', this.$route);
      this.$router.replace(this.path);
    }
  }
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>
