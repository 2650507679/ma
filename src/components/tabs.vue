<template>
    <div id="tabBox">
        <el-tag
        :key="item.id"
        v-for="item in $store.state.tabArray"
        :closable="item.name!=='aa'"
        :disable-transitions="false"
        :effect="item.name===$route.name?'dark':'plain'"
        @click="toPath(item.name)"
        @close="handleClose(item)">
        {{item.alias}}
        </el-tag>
    </div>
</template>
<script>
export default {
    name:'tabs',
    data(){
        return {

        }
    },
    created(){
    console.log(this.$route);
    },
    methods:{
    toPath(name){
    if(this.$route.name===name)return
    this.$router.push({
    name:name
    })
    },
    handleClose(delTagItem){
    var tabFindIndex =  this.$store.state.tabArray.findIndex(item=>item.id===delTagItem.id)
    var length = this.$store.state.tabArray.length
    this.$store.commit('del',tabFindIndex)
    if(delTagItem.name!==this.$route.name) return
    if(length-1===tabFindIndex){
    this.toPath(this.$store.state.tabArray[tabFindIndex-1].name)
    }else{
    this.toPath(this.$store.state.tabArray[tabFindIndex].name)
    }
    }
    }
}
</script>
<style lang="scss" scoped>
 #tabBox{
     width:100%;
     height: 45.44px;
    .el-tag{
        cursor: pointer;
    }
 }
</style>