<template>
  <div class="navMenu">
    <template v-for="navMenu in navMenus">
      <!-- 最后一级菜单 -->
      <el-menu-item v-if="!navMenu.childrens"
                    :key="navMenu.id" :data="navMenu" :index="navMenu.name"
                    @click="handClick(navMenu)" 
                   >
        <i :class="navMenu.icon"></i>
        <span slot="title">{{navMenu.alias}}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="navMenu.childrens"
                  :key="navMenu.id" :data="navMenu" :index="navMenu.name">
        <template slot="title">
          <i :class="navMenu.icon"></i>
          <span> {{navMenu.alias}}</span>
        </template>
        <!-- 递归 -->
        <NavMenu :navMenus="navMenu.childrens"></NavMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: ['navMenus'],
    data() {
      return {}
    },
    methods: {
      handClick(addTabItem){
      if(this.$route.name===addTabItem.name)return
      this.$router.push({
        name:addTabItem.name
      })
      var tabFindIndex = this.$store.state.tabArray.findIndex(item=>item.id===addTabItem.id)
      if(tabFindIndex===-1){
      this.$store.commit('add',addTabItem)
      }
      }
    }
  }
</script>

<style>
</style>