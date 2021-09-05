import axios from 'axios';

const API = '/api';

export const instance = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default function(method, url, data = null) {
  const requestType = method.toLowerCase();

  switch (requestType) {
    case 'get':
      return instance.get(url, { params: data });
    case 'put':
      return instance.put(url, data);
    case 'delete':
      return instance.delete(url, { params: data });
    case 'post':
      return instance.post(url, data);
    default:
      throw new Error(
        `Unknown request method of ${method}! You might have a typo.`,
      );
  }
}
