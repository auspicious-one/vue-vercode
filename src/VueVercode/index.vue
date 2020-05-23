<template>
  <div class="code-input-main">
    <div
      class="code-input-main-item"
      v-for="(item,index) in codeList"
      :key="index"
    >{{code[index] ||''}}</div>
    <input class="code-input-input" v-model="code" maxlength="6" type="number" />
  </div>
</template>
 
<script>
export default {
  name: "VueVercode",
  props: {
    codeLength: {
      default: 6,
      type: Number
    }
  },
  data() {
    return {
      codeList: [],
      code: ""
    };
  },
  mounted() {
    // 定义一个数组用于循环
    this.codeList = new Array(this.codeLength).fill("");
  },
  watch: {
    // 截取字符长度
    code() {
      if (this.code.length > this.codeLength) {
        this.code = this.code.substring(0, this.codeLength);
      }
    }
  },
  methods: {
    getCode() {
      return this.code;
    }
  }
};
</script>
<style scoped>
@import "./index.css";
</style>