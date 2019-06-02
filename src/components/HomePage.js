import React from "react";
import HelloModal from "./HelloModal";
import ModalContainer from "./ModalContainer";

// import "./styles.css";
import { Button } from 'antd';

class App extends React.Component {
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
        <div style={{ margin: 10 }}>
          <div style={{ marginBottom: 10 }}>
            <HelloModal visible={visible} handleHide={this.handleHide} />
            <Button type="primary" onClick={this.handleShow}>
              Click me!
            </Button>
          </div>
        
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
         
        </div>
      );
    }
  }
export default App
