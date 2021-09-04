<template>
  <div class="product">
    <h2>產品管理 </h2>
    <div class="addProduct">
      <button  @click="handleOpen(true)">新增產品</button>
    </div>
    <FormDialog :dialogVisible="dialogVisible" :handleOpen="handleOpen"/>
    <el-table :data="tableData" stripe style="width: 100%">
      <template slot="empty"> 尚無資料 </template>
      <el-table-column prop="category" label="類別" width="180">
      </el-table-column>
      <el-table-column prop="title" label="品項" width="180"> </el-table-column>
      <el-table-column prop="price" label="價格" width="180"> </el-table-column>
      <el-table-column prop="is_enabled" label="上架狀態" width="180">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            <i class="el-icon-edit-outline" />
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            <i class="el-icon-delete" />
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import FormDialog from '../../components/FormDialog'

export default {
  name: "Product",
  components:{
    FormDialog
  },
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          category: "Boy",
          title: "Tom",
          price: "189",
          is_enabled: "已下架",
        },
      ],
    };
  },
  methods: {
    handleOpen(state) {
      this.dialogVisible = state;
    },
  },

};
</script>


<style lang="scss" >
h2 {
  text-align: left;
  margin-bottom: 40px;
  font-size: 30px;
}
.addProduct {
  text-align: right;
  padding: 20px;
  button {
    background-color: #757575;
    color: #ffffff;
    padding: 5px 10px;
  }
}
.el-table .el-table__cell {
  text-align: center;
}
</style>