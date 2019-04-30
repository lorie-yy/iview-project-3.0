<template>
  <div class="index">
      这里是index
    <a @click="$emit('changeRouter', '/productManage')"><Button>商品管理</Button></a>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
        
    }
  },
  methods: {
      
  }
}
</script>
<style lang="less" scoped>
.index{
  margin: 5em auto;
  text-align: center;
}
</style>
