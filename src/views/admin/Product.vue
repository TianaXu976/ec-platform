<template>
  <div class="product">
    <h2>產品管理</h2>
    <div class="addProduct">
      <button @click="handleDialog('CREATE')">新增產品</button>
    </div>
    <!-- <FormDialog
      :dialogVisible="dialogVisible"
      :handleOpen="handleOpen"
      :submitNewProduct="submitNewProduct"
    >
      <template slot="title"><h4>新增產品</h4></template>
      <template slot="content">
        <form class="addForm">
          <label>
            類別
            <input type="text" id="category" v-model="productInfo.category" />
          </label>
          <label>
            品項
            <input type="text" id="title" v-model="productInfo.title" />
          </label>
          <label>
            價格
            <input type="text" id="price" v-model="productInfo.price" />
          </label>
          <label>
            上架狀態
            <el-switch
              v-model="productInfo.is_enabled"
              active-value="上架中"
              inactive-value="已下架"
            >
            </el-switch>
          </label>
        </form>
      </template>
    </FormDialog> -->
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
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"> -->
          <el-button size="mini" @click="handleDialog('EDIT')">
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
import { uuid } from "vue-uuid";
import { mapMutations } from "vuex";
// import { DIALOG_TYPE } from "../../store/productDialog"

export default {
  name: "Product",
  // components: {
  //   FormDialog,
  // },
  data() {
    return {
      dialogVisible: false,
      productInfo: {
        category: "",
        title: "",
        price: "",
        is_enabled: "已下架",
        id: uuid.v4(),
      },
      productList: [
        {
          category: "Boy",
          title: "Tom",
          price: "189",
          is_enabled: "已下架",
          id: "001",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("productDialog", ["handleDialog"]),

    submitNewProduct() {
      const itemIndex = this.productList.findIndex(
        (item) => item.id === this.productInfo.id
      );
      if (itemIndex !== -1) {
        //  this.productList[itemIndex] = {...this.productInfo};
        this.$set(this.productList, itemIndex, { ...this.productInfo });

        // this.productList.splice(itemIndex, 1, this.productInfo);
      } else {
        // this.productList.push(this.productInfo);
        this.productList = [...this.productList, this.productInfo];
      }
      this.productInfo = {
        category: "",
        title: "",
        price: "",
        is_enabled: "已下架",
        id: uuid.v4(),
      };
    },
    handleEdit(index, row) {
      this.handleOpen(true);
      this.productInfo = { ...row };

      console.log(row);
    },
    handleDelete(index, row) {
      this.productList = this.productList.filter((item) => item.id !== row.id);
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