<template>
  <div id="app">
    <header-comp></header-comp>
    <nav-left-comp></nav-left-comp>
    <router-view></router-view>
  </div>
</template>

<script>
import headerComp from "@/components/headerComp";
import navLeftComp from "@/components/navLeftComp";

export default {
  name: 'app',
  components: {
    headerComp,
    navLeftComp,
  },
  mounted() {
    console.log('项目启动...');
  },
};
</script>

<style lang="scss">
  #app {
    position: absolute;
    width: 100%;
    min-width: 1280px;
    height: 100%;
    min-height: 720px;
    color: #3e4661;
    background: #f8f9fa;
    &.app-print {
      width: auto;
      min-width: 0;
    }
  }
  .head{
    width: 100%;
    height: 38px;
    /* line-height: 40px; */
    text-align: center;
    border-bottom: 1px solid #ccc;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none!important;
  }

  li {
    list-style-type: none;
  }

  /* 切换动画 */

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .zb_wrap {
    margin-left: 190px;
    margin-right: 30px;
    padding-top: 72px;
    padding-bottom: 50px;
    text-align: center;
  }

  .page_title {
    font-size: 22px!important;
    color: #3e4661;
    text-align: left;
    margin-bottom: 18px;
  }

  .page_title_financial {
    font-size: 24px;
    color: #3e4661;
    text-align: left;
  }

  .page_title .sub {
    margin-left: 8px;
    font-size: 14px;
    color: #AAAAAA;
    cursor: pointer;
  }

  .page-filter {
    position: relative;
    margin-bottom: 20px;
    text-align: left;
  }
  .button-group:after,
  .field-group:after,
  .page-filter:after {
    display: block;
    content: "";
    clear: both;
  }

  .page-filter .el-autocomplete,
  .page-filter .el-input,
  .page-filter .el-select {
    float: left;
    display: block;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .page-filter .el-autocomplete .el-input,
  .page-filter .el-select .el-input {
    margin-right: 0;
    margin-bottom: 0;
  }

  .page-filter .el-button {
    float: left;
    display: block;
  }

  .page-filter .add-btn {
    float: right;
    margin-top: 3px;
  }

  .box_nav {
    background: #f0f4f8;
    width: 100%;
    height: 50px;
    text-align: left;
    font-size: 12px;
    color: #3e4661;
  }

  .box_nav .item {
    display: inline-block;
    width: 145px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    color: #3e4661;
    font-size: 12px;
    font-weight: bold;
  }

  .box_nav .item.active {
    background: #fff;
  }

  .box_nav .total {
    float: right;
    padding-right: 20px;
    line-height: 50px;
  }

  .zb_form {
    background: #fff;
    width: 100%;
    font-size: 12px;
    padding: 0;
  }

  .zb_form input {
    background: #ffffff;
    border: 1px solid #d8dae2;
    border-radius: 4px;
    height: 34px;
    margin: 5px;
    padding-left: 5px;
    outline: none;
    text-indent: 0.5em;
  }

  .loginForm input,
  .noborder_input {
    border: none;
    background: #f5f6fa;
    border-radius: 100px;
    font-size: 12px;
    color: #3e4661;
    height: 40px;
    margin: 5px;
    padding-left: 5px;
    outline: none;
    text-indent: 0.5em;
    border-radius: 100px;
    text-indent: 1em;
  }

  .noborder_input_one {
    background: #fff;
    font-size: 12px;
    color: #3e4661;
    height: 36px;
    line-height: 36px;
    margin: 5px;
    padding-left: 5px;
    outline: none;
    text-indent: 0.5em;
    text-indent: 1em;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }

  .circle_btn {
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 1px solid #3e4661;
    border-radius: 100%;
    text-align: center;
    line-height: 20px;
    font-size: 20px;
  }

  .close_btn {
    position: absolute;
    right: 16px;
    top: 10px;
    width: 22px;
    height: 22px;
    background: #bdbfc6;
    border-radius: 22px;
    text-align: center;
    cursor: pointer;
    color: #fff;
  }

  .win_submit_btn {
    margin-top: 35px;
    background-image: linear-gradient(-90deg, #ffb39b 0%, #fe6b75 100%);
    border-radius: 100px;
    font-size: 14px;
    color: #ffffff !important;
    letter-spacing: 0;
    width: 280px;
    height: 40px;
    line-height: 40px;
    display: block;
    text-align: center;
    cursor: pointer;
  }

  .login_submit_btn {
    display: inline-block;
    width: 280px;
    height: 40px;
    line-height: 40px;
    background-image: linear-gradient(-180deg, #ff785b 29%, #ff3869 100%);
    box-shadow: 0 7px 15px 0 #fbafbc;
    border-radius: 100px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
  }

  .blue_btn {
    background-image: linear-gradient(-90deg, #6684f4 0%, #a299ff 100%);
    border-radius: 8px;
    height: 32px;
    padding: 0 10px;
    border-radius: 8px;
    line-height: 32px;
    display: inline-block;
    color: #ffffff !important;
    cursor: pointer;
  }

  #show_select_wrap input {
    width: 300px;
    font-size: 12px;
    height: 34px;
  }

  .zb_form select,
  zb_select select {
    height: 34px;
    border: 1px solid #d8dae2;
    border-radius: 4px;
    text-indent: 0.5em;
    width: 120px;
    margin-left: 15px;
    outline: none;
  }

  .zb_form input[type="checkbox"] {
    width: 15px;
    height: 15px;
    background: #ffffff;
    border: 1px solid #d8dae2;
    box-shadow: inset 0 1px 3px 0 #f4f9fe;
    border-radius: 2px;
    margin-top: 1px;
  }

  .zb_form input[type="radio"] {
    width: 15px;
    height: 15px;
    background: #ffffff;
    border: 1px solid #d8dae2;
    box-shadow: inset 0 1px 3px 0 #f4f9fe;
    border-radius: 2px;
    margin-top: 1px;
  }

  .zb_table {
    width: 100%;
    font-size: 12px;
    background: #fff;
  }

  .zb_table > thead > tr {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.06);
    background: #fff;
    height: 50px;
    width: 100%;
  }

  .zb_table > tbody > tr {
    height: 50px;
  }
  .zb_table > tbody > tr:nth-of-type(even) {
    background: #fbfbfb;
  }

  .zb_table thead tr th {
    min-width: 20px;
    border: none;
    color: #9499a9;
  }

  .zb_table tbody tr td {
    padding: 5px 0;
    border: none;
    min-width: 10px;
    /*padding-right: 10px;*/
  }

  .zb_table tbody .wintr td {
    padding: 0;
    /*padding-right: 10px;*/
  }

  .zb_table.h60 tbody tr td {
    height: 60px;
  }

  .tc_table tbody tr td,
  .tc_table thead tr th {
    text-align: center;
  }

  .min_width_table tbody tr td,
  .min_width_table thead tr th {
    min-width: 100px;
  }

  .tr_editbg {
    background: #fff0e4 !important;
  }

  .cancel_btn {
    background-image: linear-gradient(-90deg, #d0d5e0 0%, #b7bdcd 100%);
    border-radius: 100px;
  }

  .to_fetch_btn {
    background-image: linear-gradient(-90deg, #f7b0de 11%, #deb3fc 88%);
    border-radius: 100px;
  }

  .to_send_btn {
    background-image: linear-gradient(-90deg, #78aefe 2%, #cd98ff 98%);
    border-radius: 100px;
  }

  .search_btn {
    background-image: linear-gradient(-90deg, #ffb39b 0%, #fe6b75 100%);
    border-radius: 4px;
  }

  .WriteOff_btn {
    background-image: linear-gradient(-90deg, #78aefe 2%, #cd98ff 98%);
    border-radius: 4px;
  }

  .export_btn {
    background-image: linear-gradient(-90deg, #c1cae0 0%, #a3b0ce 100%);
    border-radius: 4px;
  }

  .to_mana_price_btn {
    /* background-image: linear-gradient(-90deg, #6684F4 0%, #A299FF 100%); */
    border-radius: 100px;
    width: 76px;
    height: 26px;
    display: inline-block;
    line-height: 26px;
    border: 1px solid #fcbcb5;
    color: #fd6857 !important;
    text-align: center;
    cursor: pointer;
    /* color:#FFF!important; */
  }

  .to_mana_price_btn.disable {
    color: #cacaca !important;
    border: 1px solid #efefef !important;
  }

  .see_order_btn {
    /* background-image: linear-gradient(-90deg, #78A0EF 2%, #6DE1D6 100%); */
    border: 1px solid #d8dae2;
    color: #717994;
    border-radius: 100px;
    width: 76px;
    height: 26px;
    display: inline-block;
    line-height: 26px;
    text-align: center;
    cursor: pointer;
    /* color:#FFF!important; */
  }

  .square_btn {
    min-width: 70px;
    height: 34px;
    line-height: 34px;
    display: inline-block;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    color: #ffffff !important;
    letter-spacing: 0.43px;
  }

  .zb_small_btn {
    min-width: 58px;
    height: 28px;
    display: inline-block;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    color: #ffffff !important;
    letter-spacing: 0.43px;
    line-height: 28px;
  }

  .save_btn {
    background-image: linear-gradient(-90deg, #fea1a2 0%, #fe9bc2 100%);
    border-radius: 100px;
  }

  .cancel_btn {
    background: #aaa;
    border-radius: 100px;
  }

  .stop_sale_btn {
    background-image: linear-gradient(-90deg, #a3e38d 0%, #6adfcd 98%);
    border-radius: 100px;
  }

  .open_sale_btn {
    background-image: linear-gradient(-90deg, #f7bd85 3%, #ffcd6c 100%);
    border-radius: 100px;
  }

  .text_btn {
    border: 1px solid #d8dae2;
    border-radius: 100px;
    height: 26px;
    line-height: 26px;
    display: inline-block;
    color: #717994;
    width: 50px;
    cursor: pointer;
  }

  .pink_btn {
    border: 1px solid #fb978b;
    color: #fd6857;
  }
  .pink_btn:hover {
    border: 1px solid #fb978b;
    color: #fd6857 !important;
  }

  .preview_btn {
    border: 1px solid #d8dae2;
    background-image: linear-gradient(-90deg, #6684f4 0%, #a299ff 100%);
    border-radius: 100px;
    height: 26px;
    line-height: 26px;
    display: inline-block;
    color: #717994;
    width: 50px;
    cursor: pointer;
    color: #fff;
  }
  a:hover {
    text-decoration: none;
  }

  .checked_symbol {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: inline-block;
    background: #fb978b;
    position: relative;
    cursor: pointer;
  }

  .checked_symbol::after {
    background: #fff;
    border-radius: 50%;
    position: absolute;
    content: "";
    width: 4px;
    height: 4px;
    top: 50%;
    left: 50%;
    display: inline-block;
    transform: translate(-50%, -50%);
  }

  .uncheck_symbol {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #D8DAE2;
    margin-right: 0;
    cursor: pointer;
  }

  .zb_link {
    font-size: 12px;
    color: #3e4661;
    cursor: pointer;
  }

  .border_none {
    border: none !important;
  }

  .border_bottom_1 {
    border-bottom: 1px solid #efefef;
  }

  .border_r8 {
    border-radius: 8px !important;
  }

  .c_main {
    background: #f8f9fa !important;
  }

  .c_gray {
    color: #9499a9 !important;
  }

  .c_blue {
    color: #79b7ee !important;
  }

  .c_white {
    color: #fff !important;
  }

  .c_text {
    color: #717994 !important;
  }

  .font_bold {
    font-weight: bold !important;
  }

  .f_bold {
    font-weight: bold !important;
  }

  .f_left {
    float: left !important;
  }

  .f_right {
    float: right !important;
  }

  .f_12 {
    font-size: 12px !important;
  }

  .f_16 {
    font-size: 16px !important;
  }

  .f_20 {
    font-size: 20px !important;
  }

  .f_30 {
    font-size: 30px !important;
  }

  .f_40 {
    font-size: 40px !important;
  }

  .m_top_40 {
    margin-top: 40px !important;
  }

  .m_left_5 {
    margin-left: 5px !important;
  }

  .m_left_15 {
    margin-left: 15px !important;
  }

  .m_left_20 {
    margin-left: 20px !important;
  }

  .m_right_5 {
    margin-right: 5px !important;
  }

  .m_bottom_17 {
    margin-bottom: 17px !important;
  }

  .m_bottom_20 {
    margin-bottom: 20px !important;
  }

  .m_bottom_40 {
    margin-bottom: 40px !important;
  }

  .p_left_5 {
    padding-left: 5px !important;
  }

  .p_left_10 {
    padding-left: 10px !important;
  }

  .p_left_20 {
    padding-left: 20px !important;
  }

  .p_left_40 {
    padding-left: 40px !important;
  }
  .require {
    color: #ff5463;
    padding-right: 4px;
    font-weight: bold;
  }
  .text_indent_0 {
    text-indent: 0 !important;
  }

  .text_indent_1em {
    text-indent: 1em !important;
  }

  .t_center {
    text-align: center !important;
  }

  .t_left {
    text-align: left !important;
  }

  .t_right {
    text-align: right !important;
  }

  .t_underline {
    text-decoration: underline !important;
  }

  .v_center {
    margin-top: 50%;
    transform: translateY(-50%);
  }

  .w_25 {
    width: 25px !important;
  }

  .w_50 {
    width: 50px !important;
  }

  .w_60 {
    width: 60px !important;
  }

  .w_65 {
    width: 65px !important;
  }

  .w_70 {
    width: 70px !important;
  }

  .w_80 {
    width: 80px !important;
  }

  .w_100 {
    width: 100px !important;
  }

  .w_120 {
    width: 120px !important;
  }

  .w_125 {
    width: 126px !important;
  }

  .w_140 {
    width: 140px !important;
  }

  .w_150 {
    width: 150px !important;
  }

  .w_165 {
    width: 165px !important;
  }

  .w_200 {
    width: 200px !important;
  }

  .w_220 {
    width: 220px !important;
  }

  .w_230 {
    width: 230px !important;
  }

  .w_280 {
    width: 280px !important;
  }

  .w_295 {
    width: 295px !important;
  }

  .w_300 {
    width: 300px !important;
  }

  .w_350 {
    width: 350px !important;
  }

  .w_400 {
    width: 300px !important;
  }

  .w_500 {
    width: 500px !important;
  }

  .w_370 {
    width: 370px !important;
  }

  .w_400 {
    width: 400px !important;
  }

  .hand_mouse {
    cursor: pointer !important;
  }

  .text_limit {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .num_link {
    font-size: 12px;
    color: #000000;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }

  .upload-image-input {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .underline_none {
    text-decoration: none !important;
  }

  .regBox {
    font-size: 12px;
    background: #fff;
    opacity: 1;
    background: #ffffff;
    border-radius: 10px;
    width: 366px;
    min-height: 400px;
    padding: 45px 40px;
    text-align: center;
  }

  .login_form_title {
    font-size: 12px;
    color: #9499a9;
    margin-left: 24px;
  }

  .win_title {
    font-size: 20px;
    color: #3e4661;
    font-weight: bold;
  }

  .win_do_btn {
    width: 135px;
    height: 40px;
    display: inline-block;
    background-image: linear-gradient(-90deg, #ffb39b 0%, #fe6b75 100%);
    border-radius: 100px;
    line-height: 40px;
    text-align: center;
    color: #fff !important;
    cursor: pointer;
  }

  .win_dotile_btn {
    width: 135px;
    height: 40px;
    display: inline-block;
    background-image: linear-gradient(-90deg, #ffb39b 0%, #fe6b75 100%);
    border-radius: 100px;
    line-height: 40px;
    text-align: center;
    color: #fff !important;
    cursor: pointer;
  }

  .win_cancel_btn {
    width: 135px;
    height: 40px;
    display: inline-block;
    background-image: linear-gradient(-90deg, #d0d5e0 0%, #b7bdcd 100%);
    border-radius: 100px;
    line-height: 40px;
    text-align: center;
    color: #fff !important;
    cursor: pointer;
  }

  .pop {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 890;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .pop_con {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 891;
    width: 28rem;
    font-size: 1.6rem;
    background-color: #fff;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #fff;
    width: 470px;
    min-height: 10px;
    color: #3e4661;
    border-radius: 10px;
  }

  /*Chrome style reset*/
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    box-shadow: 0 0 0 1000px white inset !important;
  }

  /*Element-ui style reset*/

  input::-webkit-input-placeholder {
    font-weight: 300;
  }

  .el-button {
    font-weight: 400;
  }

  .el-table__header-wrapper {
    position: relative;
    z-index: 2;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.06);
  }

  .el-table td,
  .el-table th {
    font-size: 12px;
    font-weight: 400;
    border-bottom: 0!important;
  }

  .el-table .cell {
    padding: 0 7px;
    line-height: 20px;
    color: #717994;
  }

  .el-table .cell .gray {
    color: #9499a9;
  }

  .el-table .cell .clip {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .el-table .cell a {
    text-decoration: underline;
  }

  .el-table th > .cell {
    color: #9499A9;
  }

  .el-table .el-button {
    padding: 6px 10px;
    margin: 2px 2px!important;
  }

  .el-pagination {
    margin-top: 30px;
    text-align: center;
  }

  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    background-color: #EFEFEF;
    font-weight: 400;
  }

  .el-dialog {
    top: 50%;
    overflow: hidden;
    border-radius: 8px;
  }

  .el-dialog__header {
    padding: 15px 20px;
    background: #F6F9FF;
  }

  .el-dialog__title {
    line-height: 26px;
    font-size: 18px;
  }

  .el-dialog__headerbtn {
    right: 12px;
    top: 13px;
    width: 30px;
    height: 30px;
  }

  .el-dialog__close {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -15px;
    margin-top: -15px;
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 22px;
    font-weight: bold;
    color: #D3D3D3!important;
  }

  .el-dialog__body {
    padding-top: 15px;
    padding-bottom: 8px;
  }

  .el-dialog__footer {
    padding-bottom: 30px;
  }

  .el-dialog__footer .el-button {
    padding: 14px 30px;
    border-radius: 2px;
  }

  .el-dialog__footer .el-button span {
    font-size: 16px;
    font-weight: 300;
    color: #FFF;
  }

  /*vue-editor style reset*/
  .ql-toolbar {
    line-height: 1.2;
  }

  /*打印票面*/
  .ticket {
    position: relative;
    width: 1020px;
    height: 410px;
    font-family: 'SimHei', 'Microsoft JhengHei', 'SimSun';
    background-color: #FFF;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    .qr {
      position: absolute;
      left: 66px;
      top: 154px;
      background-color: #FFF;
    }
    .cnt {
      overflow: hidden;
      width: 750px;
      margin-left: 240px;
      padding-top: 60px;
      text-align: left;
      color: #111;
    }
    .ls {
      position: relative;
      height: 280px;
      .itm {
        margin-bottom: 4px;
        line-height: 1.4;
        font-size: 20px;
      }
      .small-itm {
        margin-bottom: 4px;
        line-height: 1.4;
        font-size: 15px;
      }
      .name {
        padding: 4px 0 7px;
        font-size: 24px;
        font-weight: bold;
      }
      &.ls-l {
        float: left;
        width: 470px;
        .tno {
          position: absolute;
          left: 0;
          bottom: 0;
          font-size: 16px;
          font-family: arial;
          color: #555;
        }
      }
      &.ls-r {
        float: right;
        width: 250px;
        .tno {
          font-family: arial;
          .code {
            font-size: 18px;
          }
        }
      }
    }
  }

  /*登录／注册／密码找回*/
  .auth-wrap {
    position: relative;
    min-height: 100%;
    padding: 100px 0;
    .auth-container {
      position: relative;
      width: 400px;
      margin: 0 auto;
      padding: 0 35px 25px;
      background-color: #FFF;
      top: 50%;
      transform: translateY(-50%);
    }
    .auth-support {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      line-height: 40px;
      text-align: center;
      font-size: 12px;
      color: #AAA;
    }
  }

  .auth-container_header {
    position: relative;
    height: 73px;
    margin-bottom: 48px;
    border-bottom: 1px solid #F0F0F0;
    .title {
      position: absolute;
      left: 0;
      bottom: 0;
      line-height: 54px;
      font-size: 16px;
      color: #E83C7B;
      &:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #E83C7B;
      }
    }
  }

  .auth-container_body {
    .el-form-item {
      margin-bottom: 26px;
      .el-input,
      .el-select {
        width: 100%;
      }
      /deep/ .el-input__inner {
        height: 42px;
        padding-right: 30px;
        line-height: 42px;
      }
      /deep/ .el-form-item__error {
        padding-top: 6px;
      }
    }
    .row-captcha {
      /deep/ .el-input__inner {
        padding-right: 146px;
      }
      /deep/ .el-input__suffix {
        right: 119px;
      }
    }
    .row-submit {
      margin-bottom: 20px;
      /deep/ .btn {
        width: 100%;
        font-size: 16px;
      }
    }
    .row-flex {
      margin-bottom: 32px;
      .cb {
        float: left;
        line-height: 20px;
        font-weight: 400;
        color: #BDBDBD;
      }
      .link {
        float: right;
        line-height: 20px;
        color: #BDBDBD;
        cursor: pointer;
        text-decoration: none;
        &:hover {
          color: #E83C7B;
        }
      }
    }
    .row-link {
      text-align: center;
      .link {
        font-size: 16px;
        color: #939393;
        text-decoration: none;
        &:hover {
          color: #E83C7B;
        }
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
      color: #E83C7B!important;
      background-color: transparent;
      &[disabled] {
        color: #BDBDBD!important;
      }
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
