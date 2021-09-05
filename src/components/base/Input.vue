<template>
  <div class="input-container">
    <slot class="prefix" name="prefix" />
    <div class="field">
      <label :for="inputId">{{ label }}</label>
      <el-input
        :id="inputId"
        v-model="updatedValue"
        :readonly="readonly"
        class="input"
      />
    </div>
    <slot class="suffix" name="suffix" />
  </div>
</template>

<script>
export default {
  name: 'InputBasic',
  props: {
    value: {
      type: String,
      default: () => '',
    },
    readonly: {
      type: Boolean,
      default: () => false,
    },
    inputId: {
      type: String,
      default: () => '',
    },
    label: {
      type: String,
      default: () => '',
    },
  },

  computed: {
    updatedValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$color-text: #6d5bff;
$color-border: #ffcd1e;
.input-container {
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.field {
  display: flex;
  flex-direction: column;
  width: 100%;
  > * {
    margin: 5px 0;
  }
}
</style>
