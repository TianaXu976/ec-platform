<template>
  <div class="product">
    <h2>產品管理</h2>
    <div class="addProduct">
      <button
        @click="
          handleOpen({
            type: 'open',
            payload: { name: 'DrawerProduct', title: '新增產品' },
          })
        "
      >
        新增產品
      </button>
      <button
        @click="
          handleOpen({
            type: 'open',
            payload: { name: 'CreateOrder', title: '新增訂單' },
          })
        "
      >
        新增訂單
      </button>
    </div>

    <el-table :data="productList" stripe style="width: 100%">
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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Product',
  computed: {
    ...mapState('products', ['productList']),
  },
  methods: {
    ...mapActions('drawer', ['updateDrawer']),
    ...mapActions('products', ['updateEditProduct']),
    handleOpen(info) {
      this.updateDrawer(info);
    },
    handleEdit(rowIndex, rowInfo) {
      this.updateEditProduct({ index: rowIndex, product: rowInfo });
      this.updateDrawer({
        type: 'edit',
        payload: { name: 'DrawerProduct', title: '編輯產品' },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: left;
  margin-bottom: 40px;
  font-size: 30px;
}
.addProduct {
  text-align: right;
  padding: 20px;
  button {
    margin: 0 5px;
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
