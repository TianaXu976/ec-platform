<template>
  <div class="create-order">
    <div class="main">
      <form class="form">
        <Input
          class="input"
          label="類別"
          v-model="form.category"
          inputId="category"
        />
        <Input
          class="input"
          label="品項"
          v-model="form.title"
          inputId="title"
        />
        <Input
          class="input"
          label="價格"
          v-model="form.price"
          inputId="price"
        />
      </form>
      <div class="switch">
        <label>
          上架狀態
          <el-switch
            v-model="form.is_enabled"
            active-value="上架中"
            inactive-value="已下架"
          >
          </el-switch>
        </label>
      </div>
    </div>
    <DrawerFooter @confirm="handleConfirm" @cancel="handleCancel" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

// components
import DrawerFooter from '@/components/Drawer/DrawerFooter.vue';
import Input from '@/components/base/Input.vue';

export default {
  name: 'DrawerProduct',
  components: {
    DrawerFooter,
    Input,
  },
  data() {
    return {
      form: {
        category: '',
        title: '',
        price: '',
        is_enabled: '已下架',
      },
    };
  },
  computed: {
    ...mapState('products', ['editInfo']),
    ...mapState('drawer', ['drawerType']),
  },
  methods: {
    ...mapActions('drawer', ['updateDrawer']),
    ...mapActions('products', [
      'addProduct',
      'saveProduct',
      'updateEditProduct',
    ]),
    handleConfirm() {
      if (this.drawerType === 'edit') {
        this.updateEditProduct({
          index: this.editInfo.index,
          product: this.form,
        });
        this.saveProduct();
      } else this.addProduct(this.form);
      this.updateDrawer({ type: 'close' });
    },
    handleCancel() {
      console.log('cancel');
      this.updateDrawer({ type: 'close' });
    },
  },
  mounted() {
    if (this.drawerType === 'edit') {
      this.form = {...this.editInfo.product};
    }
  },
};
</script>

<style lang="scss" scoped>
.create-order {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main {
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: auto;
    .form {
      width: 100%;
    }
    .input {
      margin-bottom: 15px;
    }
    .switch {
      margin-top: auto;
    }
  }
}
</style>
