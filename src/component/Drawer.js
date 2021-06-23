
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

const Draw = (props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Drawer
        title="Details"
        placement="right"
        closable={false}
        onClose={props.onClose}
        visible={props.visible}
      >
        <b>PR Guidelines</b>
        <p>Created By:</p>
        <p>Modified By:</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <b>Revision History</b>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <b>Share Setting</b>
      </Drawer>
    </>
  );
};

export default Draw;