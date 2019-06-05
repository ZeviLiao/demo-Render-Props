import React from 'react';
import { Button, Modal } from "antd";

const HelloModal = ({ title, children, visible, handleHide }) => {
  return (
    <Modal visible={visible} title={title}
      onOk={handleHide}
      onCancel={handleHide}>
      {children}
    </Modal>
  )
}

class Demo31 extends React.Component {
  state = {
    visible: false
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { children } = this.props;
    return children({
      visible,
      show: this.show,
      hide: this.hide
    })

  }
}

class Demo3 extends React.Component {
  render() {

    return (
      <div>
        <Demo31>
          {(modal) => (
            <div>
              <HelloModal visible={modal.visible} title="abc"
                handleHide={modal.hide}
              >
                def!
            </HelloModal>
              <Button type="primary" onClick={modal.show}>
                Click me!
            </Button>
            </div>
          )}
        </Demo31>
      </div>


    )
  }
}

export default Demo3