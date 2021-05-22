<template>
  <div id="tabbar">
    <tabbar>
      <tabbar-item path="/home" activeColor="#ff5777">
        <img slot="item-icom" src="~assets/img/tabbar/home.png" alt="" />
        <img
          slot="item-icom-active"
          src="~assets/img/tabbar/home_active.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="item-icom" src="~assets/img/tabbar/exchange.png" alt="" />
        <img
          slot="item-icom-active"
          src="~assets/img/tabbar/exchange_active.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="item-icom" src="~assets/img/tabbar/task.png" alt="" />
        <img
          slot="item-icom-active"
          src="~assets/img/tabbar/task_active.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/my">
        <img slot="item-icom" src="~assets/img/tabbar/user.png" alt="" />
        <img
          slot="item-icom-active"
          src="~assets/img/tabbar/user_active.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar';
import TabbarItem from 'components/common/tabbar-item';
export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>
<style scoped></style>
