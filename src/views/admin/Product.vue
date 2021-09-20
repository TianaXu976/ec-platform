<template>
  <div class="product">
    <h2>產品管理</h2>
    <div class="addProduct">
      <button @click="handleDialog({ type: 'CREATE' })">新增產品</button>
    </div>
    <el-table :data="productList" stripe style="width: 100%">
      <template slot="empty"> 尚無資料 </template>
      <el-table-column prop="category" label="類別" width="180">
      </el-table-column>
      <el-table-column prop="title" label="品項" width="180"> </el-table-column>
      <el-table-column prop="price" label="價格" width="180"> </el-table-column>
      <el-table-column prop="is_enabled" label="上架狀態" width="180">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.is_enabled === '上架中' ? 'success' : 'info'"
            effect="plain"
            >{{ scope.row.is_enabled }}</el-tag
          >
        </template>
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
// import FormDialog from "../../components/FormDialog";
// import { uuid } from "vue-uuid";
import { mapMutations, mapState } from "vuex";
// import { DIALOG_TYPE } from "../../store/productDialog"

export default {
  name: "Product",
  data() {
    return {};
  },
  computed: {
    ...mapState("productInfo", ["productList"]),
  },
  methods: {
    ...mapMutations("productDialog", ["handleDialog"]),
    ...mapMutations("productInfo", ["handleProduct"]),

    handleEdit(index, row) {
      this.handleDialog({
        type: "EDIT",
        payload: { ...row },
      });
    },
    handleDelete(index, row) {
      this.$confirm(
        "刪除後就沒了喔",
        "確定？",
        {
          confirmButtonText: "刪除",
          cancelButtonText: "取消",
        }
      )
        .then(() => {
          this.handleProduct({
            type: "DELETE",
            payload: row.id,
          });
          this.$message({
            type: "info",
            message: "刪除成功",
          });
        })
        .catch(() => {});
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

h4 {
  margin: auto;
  width: 70%;
  height: 30px;
  padding-left: 20px;
  border-bottom: 1px solid #cfcfcf;
  text-align: left;
}

.addForm {
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    padding: 20px;
  }
}
.el-table .el-table__cell {
  text-align: center;
}
</style>