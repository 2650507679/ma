<template>
  <div id="app">
    <el-button slot="append" icon="el-icon-search"></el-button>
    <el-button type="success" round>成功按钮</el-button>
     <el-button type="danger" icon="el-icon-delete" circle></el-button>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
export default {
  created(){
    this.$axios({
      url:"goodlist",
      type_one:"个护"
    }).then(res=>{
      console.log(res);
    })
   var a= this.$jiami(123)
   console.log(a);
   console.log(this.$jiemi(a));
    
  }
}
</script>

