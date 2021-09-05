import api from './api';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const mock = require('./mock').default;
  mock();
}

export default {
  getProductList() {
    return api('get', '/product-list');
  },
};
