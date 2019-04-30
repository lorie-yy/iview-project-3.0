<template>
  <div class="index">
      这里是商品管理
    <a @click="$emit('changeRouter', '/newProduct')"><Button>新建商品</Button></a>
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
