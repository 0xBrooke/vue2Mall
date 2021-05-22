<template>
  <div class="home">
    <input type="text" v-model="val" />
    <button @click="test">测试</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      val: ''
    };
  },
  components: {},
  methods: {
    test() {
      let val = this.val;
      if (val === 'sss') {
        console.log('dddd');
        return;
      }
      if (val === '22') {
        console.log();
        return;
      }
      if (val === '3') {
        console.log('dd');
        return;
      }
      console.log('dddddddd');
    }
  }
};
</script>
