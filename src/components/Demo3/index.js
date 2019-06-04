import React from 'react';
import { Button, Modal } from "antd";

const HelloModal = ({ visible, handleHide }) => (
  <Modal visible={visible} title="Hello" onOk={handleHide} onCancel={handleHide}>
    World!
  </Modal>
);

class Demo3 extends React.Component {
  state = {
    visible: false
  };

  handleShow = () => {
    this.setState({ visible: true });
  };

  handleHide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <HelloModal visible={visible} handleHide={this.handleHide} />
        <Button type="primary" onClick={this.handleShow}>
          Click me!
        </Button>
      </div>
    );
  }
}

export default Demo3