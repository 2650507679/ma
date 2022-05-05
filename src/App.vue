<template>
  <div id="app">
    <el-container>
  <el-header>Header</el-header>
  <el-container>
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
      <el-main><tabs/><keep-alive><router-view/></keep-alive></el-main>
    </el-container>
  </el-container>
</el-container>
</div>
</template>
<script>
import NavMenu from './components/trees.vue'
import tabs from '@/components/tabs.vue'
export default {
  data() {
    return {
       menuData: [
        {
          //一级
          entity: {
            id: 0,
            name: "aa",
            icon: "el-icon-message",
            alias: "首页"
          }
        },
        {
          //一级
          entity: {
            id: 1,
            name: "pageBox",
            icon: "el-icon-message",
            alias: "管理"
          },
          //二级
          childs: [
            {
              entity: {
                id: 3,
                name: "page1",
                icon: "el-icon-message",
                alias: "权限管理"
              }
            },
            {
              entity: {
                id: 2,
                name: "page2",
                icon: "el-icon-edit",
                alias: "菜单管理"
              }
            },
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
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    background-image: url(../public/image/navigationleft.svg);
    background-size: 102% 105%;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    // border: 1px solid red;
    padding: 0 !important;
  }

    html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
          /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
    }
  #vue-box{
    // border: 1px solid red;
    overflow-y: scroll;
    width: 100%;
    height: 95%;
  }
</style>
