<style scoped lang="less">
.form-basic.ivu-form{
  max-width: 50em;
  margin: 1em 0;
  .ivu-form-item-content{
    max-width: 40em;
  }
}
</style>
<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" class="form-basic" :label-width="120">
    <FormItem label="序号：" prop="id">
      <Input v-model="formValidate.id" placeholder="数字越大，排名越靠前，如果为空，默认排序方式为创建时间"></Input>
    </FormItem>
    <FormItem label="商品名称：" prop="name">
      <Input v-model="formValidate.name" placeholder="请输入商品名称"></Input>
    </FormItem>
    <FormItem label="商品图：" prop="picture">
      <Upload action="//jsonplaceholder.typicode.com/posts/" v-model="formValidate.picture"
      :format="['jpg','jpeg','png']"
      :max-size="2048"
      >
        <Button>+添加商品</Button>
      </Upload>
      <span>建议图片长宽比1:1，长方形图片将被自动裁剪为方形</span>
    </FormItem>
    <FormItem label="商品分类：" prop="sort">
      <Select v-model="formValidate.sort" placeholder="请选择商品分类" :filterable="true" :clearable="true">
        <Option v-for="item in sortList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </FormItem>
    <FormItem label="商品属性：" prop="property">
      <CheckboxGroup v-model="formValidate.property">
        <Checkbox label="新品"></Checkbox>
        <Checkbox label="热门"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="是否上架：" prop="isShow">
      <RadioGroup v-model="formValidate.isShow">
        <Radio label="1">上架</Radio>
        <Radio label="0">暂不上架，放入仓库</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="是否群发推送：" prop="isPush">
      <RadioGroup v-model="formValidate.isPush">
        <Radio label="1">是</Radio>
        <Radio label="0">否</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">下一步</Button>
    </FormItem>
  </Form>
</template>
<script>
  export default {
    name: 'newProductBasic',
    data () {
      return {
        sortList: [{
          label: '商品1类',
          value: 1,
        },{
          label: '商品2类',
          value: 2,
        },{
          label: '商品3类',
          value: 3,
        }],
        formValidate: {
          id: '',
          name: '',
          picture: '',
          sort: '',
          property: [],
          isShow: 1,
          isPush: 1,
        },
        ruleValidate: {
          id: [
            { required: true, message: '请输入商品序号' },
            { pattern: /^\d+$/, message: '仅可填写整数' }
          ],
          name: [
            { required: true, message: '请输入商品名称' }
          ],
          // picture: [
          //   { required: true, message: '请上传图片' }
          // ],
          sort: [
            { required: true, message: '请选择商品类别' }
          ],
          // property: [
          //   { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          //   { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
          // ],
          isShow: [
            { required: true, message: '请选择商品是否上架' }
          ],
          isPush: [
            { required: true, message: '请选择商品是否群发推送' }
          ],
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$emit('changeActiveTag','2')
          }
        })
      },
    }
  }
</script>
