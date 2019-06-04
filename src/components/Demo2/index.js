import React from 'react'
import ModalContainer from './ModalContainer'
import { Button, Modal } from 'antd'


const HelloModal = ({ visible, handleHide }) => (
  <Modal visible={visible} title="Hello" onOk={handleHide} onCancel={handleHide}>
    World!
  </Modal>
);

export default class Demo2 extends React.Component {
  render() {
    return (
      <ModalContainer>
        {modal => (
          <div>
            <HelloModal visible={modal.visible} handleHide={modal.hide} />
            <Button type="primary" onClick={modal.show}>
              Click me!
            </Button>
          </div>
        )}
      </ModalContainer>
    );
  }
}
