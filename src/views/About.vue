<template>
  <div class="home">
    <tinymce
    id="myedit"
    ref="editor"
    v-model="msg"
    :disabled="disabled"
    @onClick="onClick"
    />
    <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
  </div>
</template>
<script>
import tinymce from '@/components/tinymce'

export default {
  name: 'tinymcedemo',
  components: {
    tinymce
  },
  data () {
    return {
      disabled: false,
      msg: 'Welcome to Use Tinymce Editor',
      isabled: false
    }
  },
  methods: {
    // 内容
    getContent () {
      console.log('内容', this.msg)
    },
    // 鼠标单击的事件
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear () {
      console.log(this.$refs.editor)
      this.$refs.editor.clear()
    }
  }
}
</script>

