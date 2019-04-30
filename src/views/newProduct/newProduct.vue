<template>
  <div class="index">
    <Card>
      <Tabs v-model="activeTag">
        <TabPane label="基本信息" name="1">
          <newProductBasic @changeActiveTag="changeActiveTag"></newProductBasic>
        </TabPane>
        <TabPane label="规格/库存" name="2">标签二的内容</TabPane>
        <TabPane label="商品详情" name="3">标签三的内容</TabPane>
      </Tabs>
    </Card>
  </div>
</template>
<script>
import newProductBasic from './newProductBasic'
export default {
  name: 'newProduct',
  components: {
    newProductBasic
  },
  data () {
    return {
      activeTag: '1'
    }
  },
  methods: {
    changeActiveTag(value) {
      console.log('changeActiveTag',value)
      this.activeTag = value
    }
  }
}
</script>
<style lang="less" scoped>
  .cardMessage {
    .ivu-icon {
      font-size: 38px;
    }
    .subText {
      color: #9ea7b4;
    }
  }
</style>
