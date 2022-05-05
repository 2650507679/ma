<template>
  <div id="table-box">
    <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
    <el-table
      border
      :header-cell-style="{ background: '#FAFAFA', color: '#606266' }"
      :data="tableData"
      style="width: 100%;height:80%"

    >
      <el-table-column align="center" type="selection" width="55px" >
      </el-table-column>
      <el-table-column label="序号" align="center" width="100px" prop="serial">
      </el-table-column>
      <el-table-column align="center" label="名称" prop="date">
      </el-table-column>

      <el-table-column align="center" label="上级区划" prop="name">
      </el-table-column>
      <el-table-column align="center" label="坐标" prop="name">
        你好
      </el-table-column>
      <el-table-column align="center" width="200px" label="操作" prop="name">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            class="compile-delete"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            class="compile-delete"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:'',
      tableData: [
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "01",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "02",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "03",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "04",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "05",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "06",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "07",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "08",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "09",
        },
        {
          date: "宜兴市",
          name: "无锡市-新吴区-XX街道",
          serial: "10",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>