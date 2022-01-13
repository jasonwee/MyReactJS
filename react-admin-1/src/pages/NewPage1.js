import React from 'react';

import { useModel } from 'umi';
import { Button } from 'antd';


export default () => {
  const message = useModel('demo');
  const { add, minus } = useModel('counter', (ret) => ({
    add: ret.increment,
    minus: ret.decrement,
  }));

  return (
	   <>
    <Button.Group>
      <Button onClick={add}>add by 1</Button>
      <Button onClick={minus}>minus by 1</Button>
    </Button.Group><div>{message}</div>
	  </>
  );
};
