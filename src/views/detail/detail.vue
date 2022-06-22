<template>
  <div>
    <div class="sy">首页</div>
    <div class="sy" @click="toDemo">toDemo</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  components: {
  },
  created(){
  },
  methods: {
    toDemo(){
      this.$router.push({
         name:'demo' 
      })
    }
  }
};
</script>
<style scoped lang="scss">
.sy{
  font-size: 30px;
  cursor: pointer;
}
</style>
