import { useRequest } from 'umi';
import { queryProductList } from '@/services/product';
import { message } from 'antd';

// TODO, actual remove productions
function removeProducts(id) {
  return true;
}

export default function useProductList(params: { pageSize: number; current: number }) {
  const msg = useRequest(() => queryProductList(params));

  const deleteProducts = async (id: string) => {
    try {
      await removeProducts(id);
      message.success('success');
      msg.run();
    } catch (error) {
      message.error('fail');
    }
  };

  return {
    dataSource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    deleteProducts,
  };
}
