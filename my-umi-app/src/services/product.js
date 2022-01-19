import { request } from 'umi';

export async function queryProductList(options) {
  return request('/store/inventory', {
    method: 'GET',
    ...(options || {}),
  });
}
