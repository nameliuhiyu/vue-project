<template>
<div class="app-header" element-loading-text="提交中" v-if="$route.name != 'print' && $route.name != 'enlarge'">
  <router-link class="logo" :to="{ name: 'dashboard' }">logo
  </router-link>
</div>
</template>

<script>
// export default {
//   data() {},
//   methods: {},
//   watch: {
//     $route(to, from) {
//       if (from.name === "login" && this.$route.name !== "reg" && this.$route.name !== "findpwd") {
//         this.getStoreInfo();
//       }
//     },
//   },
//   mounted() {
//     if (this.$route.name !== "login" && this.$route.name !== "reg" && this.$route.name !== "findpwd") {
//       this.getStoreInfo();
//     }
//   },
// };
</script>

<style scoped lang="scss">
.app-header {
    position: fixed;
    z-index: 101;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #2b3643;
    .logo {
        position: absolute;
        left: 25px;
        top: 50%;
        display: block;
        height: 36px;
        margin-top: -18px;
    }
    .logo-img {
        display: block;
        height: 100%;
    }
}

.help-menu {
    position: absolute;
    right: 30px;
    top: 50%;
    margin-top: -10px;
    line-height: 20px;
    .link {
        margin-left: 20px;
        font-size: 12px;
        color: #AAA;
        text-decoration: none;
    }
    .el-dropdown {
        margin-left: 20px;
        font-size: 12px;
    }
    .el-dropdown-link {
        color: #AAA;
    }
}

/deep/ .dialog-pwd {
    .el-dialog__body {
        padding: 40px 50px 0;
    }
    .el-dialog__footer {
        padding-left: 50px;
        padding-right: 50px;
        padding-bottom: 40px;
    }
    .el-button {
        width: 100%;
    }
}

/deep/ .dialog-info {
    .el-dialog__body {
        padding-top: 30px;
        padding-right: 45px;
        padding-bottom: 0;
    }
    .el-dialog__footer {
        padding-bottom: 35px;
    }
    .el-form-item__error {
        padding-top: 2px;
    }
    .el-select {
        width: 100%;
    }
    .el-button {
        width: 150px;
    }
    .db1 {
        margin-bottom: 4px;
    }
    .db2 {
        margin-bottom: 12px;
    }
    .setmb {
        margin-left: 20px;
        text-decoration: underline;
        cursor: pointer;
    }
}

/deep/ .dialog-mobile {
    .el-dialog__body {
        padding-top: 30px;
        padding-right: 40px;
        padding-bottom: 0;
    }
    .el-dialog__footer {
        padding-bottom: 35px;
    }
    .el-form-item__error {
        padding-top: 2px;
    }
    .el-button {
        width: 150px;
    }
    .row-captcha {
        .el-input__inner {
            padding-right: 146px;
        }
        .el-input__suffix {
            right: 119px;
        }
    }
    .captcha-input {
        border-right: 0;
        margin-right: 110px;
    }
    .captcha-btn {
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        width: 116px;
        height: 40px;
        font-weight: 400;
        color: #FF5D01!important;
        background-color: transparent;
        &:before {
            position: absolute;
            left: 0;
            top: 50%;
            content: "";
            display: block;
            width: 1px;
            height: 20px;
            margin-top: -10px;
            background-color: #E0E0E0;
        }
        &[disabled] {
            color: #BDBDBD!important;
        }
    }
}
</style>
