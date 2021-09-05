/**
 * axios-mock-adapter Document for reference.
 * https://github.com/ctimmerm/axios-mock-adapter
 *
 */
import MockAdapter from 'axios-mock-adapter';
import { instance } from './api';
import mockData from './mockData';

const mock = new MockAdapter(instance, { delayResponse: 300 });

const { productList } = mockData;

export default () => {
  mock.onGet('/product-list').reply(() =>
    // 200 is mocking status code.
    [200, productList],
  );
};
