<template>
  <div id="vue-box">
    <h1>菜单管理</h1>
    <areaTable></areaTable>
    <!-- <total></total> -->
  </div>
</template>
<script>
import areaTable from '@/components/area-table.vue'
import total from '@/components/total.vue'
export default {
  data() {
    return {
    };
  },
  components: {
    areaTable,
    total
  },
  methods: {
  }
};
</script>
<style scoped>
</style>
