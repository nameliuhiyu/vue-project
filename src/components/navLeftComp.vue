<template>
<div class="left_nav_warp">
  <el-menu :default-active="routeMatch" :router="true" text-color="#9499a9">
    <!--<el-submenu index="1" :route="{ name: 'show' }">-->
      <!--<template slot="title">-->
        <!--<i class="el-icon-zb-home nav-ico1"></i>-->
        <!--<span>活动星球</span>-->
      <!--</template>-->
      <!--<el-menu-item index="show" :route="{ name: 'show' }">演出管理</el-menu-item>-->
      <!--<el-menu-item index="order" :route="{ name: 'order' }">订单管理</el-menu-item>-->
      <!--<el-menu-item index="member" :route="{ name: 'member' }">会员管理</el-menu-item>-->
      <!--<el-menu-item index="financing" :route="{ name: 'financing' }">财务管理</el-menu-item>-->
    <!--</el-submenu>-->
    <el-menu-item index="dashboard" :route="{ name: 'dashboard' }">
      <i class=" nav-ico1"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="show" :route="{ name: 'show' }" v-if="privilegesArr.indexOf('5b5eecdcf70218417d2374eb')!=-1">
      <i class=" nav-ico1"></i>
      <span slot="title">演出库</span>
    </el-menu-item>
    <el-menu-item index="showList" :route="{ name: 'showList' }" v-if="privilegesArr.indexOf('5b5eecfef70218417d2374ee')!=-1">
      <i class=" nav-ico1"></i>
      <span slot="title">星球演出</span>
    </el-menu-item>
    <el-menu-item index="choicenessShowList" :route="{ name: 'choicenessShowList' }" v-if="privilegesArr.indexOf('5b5eed1bf70218417d2374f1')!=-1">
      <i class=" nav-ico1"></i>
      <span slot="title">精选演出</span>
    </el-menu-item>
    <el-menu-item index="orderList" :route="{ name: 'orderList' }" v-if="privilegesArr.indexOf('5b5fd23ea2b00f08f7f59c6f')!=-1">
      <i class="nav-ico1"></i>
      <span slot="title">订单管理</span>
    </el-menu-item>
    <el-submenu index="memberList" :route="{ name: 'memberList' }" v-if="privilegesArr.indexOf('5b5eed49f70218417d2374f4')!=-1 || privilegesArr.indexOf('5b5eed5cf70218417d2374f6')!=-1">
      <template slot="title">
        <i class="nav-ico1"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="memberList" :route="{ name: 'memberList' }" v-if="privilegesArr.indexOf('5b5eed49f70218417d2374f4')!=-1">会员列表</el-menu-item>
      <el-menu-item index="userList" :route="{ name: 'userList' }" v-if="privilegesArr.indexOf('5b5eed5cf70218417d2374f6')!=-1">用户列表</el-menu-item>
    </el-submenu>
    <!--<el-menu-item index="memberList" :route="{ name: 'memberList' }">-->
      <!--<i class=" nav-ico1"></i>-->
      <!--<span slot="title">会员管理</span>-->
    <!--</el-menu-item>-->
    <!--<el-menu-item index="userList" :route="{ name: 'userList' }">-->
      <!--<i class=" nav-ico1"></i>-->
      <!--<span slot="title">用户管理</span>-->
    <!--</el-menu-item>-->
    <el-menu-item index="financingList" :route="{ name: 'financingList' }" v-if="privilegesArr.indexOf('5b5eed79f70218417d2374fa')!=-1">
      <i class=" nav-ico1"></i>
      <span slot="title">财务管理</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
import winComp from '@/components/winComp';
import loginService from "@/services/login";

export default {
  name: 'navLeft',
  data() {
    return {
      routeMatch: "",
      privilegesArr: this.$store.getters.privileges || [],
    };
  },
  components: {
    winComp,
  },
  methods: {
    navDefaultMatch(route) {
      const pathArray = route.path.split("/");
      this.routeMatch = pathArray[2] || "";
    },
  },
  watch: {
    $route(to, from) {
      this.navDefaultMatch(to);
    },
  },
  mounted() {
    this.navDefaultMatch(this.$route);
  },
};
</script>

<style scoped lang="scss">
.left_nav_warp {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 160px;
    height: 100%;
    overflow: auto;
    min-height: 650px;
    padding-top: 50px;
    background: #fff;
}

.el-menu {
    height: 100%;
    border-right: solid 1px #ECECEC;
}

.el-menu-item {
    height: 48px;
    line-height: 48px;
    font-size: 13px;
    border-top: 1px solid #364150;
    [class^="el-icon-"] {
        position: relative;
        margin-right: 2px;
        color: rgb(215, 218, 225);
    }
    &.is-active {
        background-color: #364150;
        [class^="el-icon-"] {
            color: #e83c7b;
        }
        &:before {
            position: absolute;
            left: 0;
            top: 0;
            content: "";
            display: block;
            width: 5px;
            height: 100%;
            background-color: #e83c7b;
        }
    }
}

.el-submenu {
    /*border-top: 1px solid #efefef;*/
    [class^="el-icon-"] {
        position: relative;
        margin-right: 2px;
        color: rgb(215, 218, 225);
    }
    /deep/ .el-submenu__title {
        height: 48px;
        line-height: 48px;
        font-size: 13px;
    }
    /deep/ .el-submenu__icon-arrow {
        right: 15px;
    }
    .el-menu-item {
        height: 42px;
        line-height: 42px;
        min-width: 0;
        padding: 0 15px 0 50px !important;
    }
}

.nav-ico1 {
    top: -1px;
    font-size: 15px;
}
.nav-ico2 {
    font-size: 14px;
}
.nav-ico3 {
    top: -1px;
    font-size: 16px;
}
.nav-ico4 {
    top: -1px;
    font-size: 17px;
}
.nav-ico5 {
    top: -1px;
    font-size: 17px;
}

.qr_box {
    position: fixed;
    bottom: 80px;
    right: 90px;
    width: 150px;
    min-height: 160px;
    border: 1px solid #f2f2f2;
    text-align: center;
    padding-top: 7px;
    font-size: 12px;
    letter-spacing: 0.2em;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 500;
    cursor: pointer;
    border-radius: 6px;
    img {
        width: 100%;
        height: 100%;
    }
}

.qr-icon {
    position: fixed;
    bottom: 120px;
    right: 0;
    width: 50px;
    height: 50px;
    border: 1px solid #f2f2f2;
    text-align: center;
    padding-top: 7px;
    font-size: 12px;
    letter-spacing: 0.2em;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 500;
    cursor: pointer;
    color: #fff;
    background: rgba(62, 70, 97, 0.4);
    border-radius: 6px;
}
</style>
