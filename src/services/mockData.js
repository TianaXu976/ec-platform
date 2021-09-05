export default {
  productList: (params) => {
    console.log(params);
    return {
      productList: [
        {
          category: 'Boy',
          title: 'Tom',
          price: '189',
          is_enabled: '已下架',
        },
      ],
    };
  },
};
