<template>
  <div class="zb_wrap">
    <div class="page_title">首页</div>
    <div class="page-filter">
      <div>欢迎来到活动星球</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
  .page-filter {
    .el-form {
      margin-right: 130px;
    }
    .el-input,
    .el-select {
      width: 300px;
    }
  }

  .el-dialog {
    .el-form-item.is-required {
      /deep/ .el-form-item__label:before {
        display: none;
      }
    }
  }

  .dialog-channel {
    .el-form {
      /*padding: 0 50px;*/
      /deep/ .el-form-item__label {
        line-height: 30px;
      }
      /deep/ .el-input-group__append {
        color: #999;
      }
    }
    .submit {
      margin-top: 15px;
      width: 100%;
    }
  }

  .dialog-preview {
    .cnt {
      width: 260px;
      margin: 0 auto;
    }
    .qr {
      width: 160px;
      margin: 0 auto 30px;
      text-align: center;
      box-shadow: rgb(236, 236, 236) 0 2px 6px 0;
      img {
        display: block;
        width: 160px;
        height: 160px;
        margin: 0 auto;
      }
      .copy {
        display: block;
        margin-top: -8px;
        line-height: 24px;
        font-size: 12px;
        color: #E83C7B;
        cursor: pointer;
      }
    }
    .select {
      display: block;
    }
    .complete {
      display: block;
      margin-top: 20px;
    }
  }
  /deep/ .el-input__inner {
    height: 36px !important;
    line-height: 36px !important;
  }
</style>
