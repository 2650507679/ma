<template>
    <div id="tabBox">
        <el-tag
        :key="item.entity.id"
        v-for="item in $store.state.tabArray"
        :closable="item.entity.name!=='aa'"
        :disable-transitions="false"
        :effect="item.entity.name===$route.name?'dark':'plain'"
        @click="toPath(item.entity.name)"
        @close="handleClose(item)">
        {{item.entity.alias}}
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
    var tabFindIndex =  this.$store.state.tabArray.findIndex(item=>item.entity.id===delTagItem.entity.id)
    var length = this.$store.state.tabArray.length
    this.$store.commit('del',tabFindIndex)
    if(delTagItem.entity.name!==this.$route.name) return
    if(length-1===tabFindIndex){
    this.toPath(this.$store.state.tabArray[tabFindIndex-1].entity.name)
    }else{
    this.toPath(this.$store.state.tabArray[tabFindIndex].entity.name)
    }
    }
    }
}
</script>
<style lang="scss" scoped>
 #tabBox{
     width:100%;
     height: 5%;
    //  border: 1px solid red;
    .el-tag{
        cursor: pointer;
    }
 }
</style>