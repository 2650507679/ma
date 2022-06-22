<template>
<div id="elementBox">
<el-container>
  <el-header></el-header>
  <el-container >
    <el-aside width='260px'>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="$route.name"
    >
      <NavMenu :navMenus="menuData"></NavMenu>
    </el-menu>
    </el-aside>
    <el-container>
      <el-main><tabs/><div class="main"><keep-alive><router-view/></keep-alive></div></el-main>
    </el-container>
  </el-container>
</el-container>
</div>
</template>
<script>
import NavMenu from '@/components/trees.vue'
import tabs from '@/components/tabs.vue'
export default {
  data() {
    return {
       menuData: [
        {
            id: 0,
            name: "aa",
            icon: "el-icon-message",
            alias: "首页"
        },
        {
            id: 1,
            name: "pageBox",
            icon: "el-icon-message",
            alias: "管理",
            childrens: [
            {
                id: 3,
                name: "page1",
                icon: "el-icon-message",
                alias: "权限管理"
            },
            {
                id: 2,
                name: "page2",
                icon: "el-icon-edit",
                alias: "菜单管理"
            }
            ]
        }
      ],
      value:'',
      isCollapse:false
    };
  },
  created() {
  },
  components: {
    NavMenu,
    tabs
  },
}
</script>

<style lang="scss">
  #elementBox{
    height: 100%;
    .el-header {
    background-color: gray;
    }
    .el-aside {
      background-color: #545C64;
      text-align: center;
      overflow: hidden;
      .el-menu{
        width: 100%;
      }
    }
    .el-main {
      background-color: #E9EEF3;
      padding: 0 !important;
      .main{
        height: calc(100% - 45.44px);
      }
    }
    .el-container{
      /*设置内部填充为0，几个布局元素之间没有间距*/
      padding: 0px;
      /*外部间距也是如此设置*/
      margin: 0px;
      /*统一设置高度为100%*/
      height: 100%;
    } 
  }
</style>
