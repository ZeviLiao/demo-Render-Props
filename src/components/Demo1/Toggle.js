import React from "react";
import { Button, Popover } from 'antd';

class Toggle extends React.Component {
    state = {
        on: this.props.initial,
    };

    toggle = () => {
        this.setState(({ on }) => ({
            on: !on,
        }));
    };

    render() {
        return this.props.children(
            {
                on: this.state.on,
                toggle: this.toggle
            }
        );
    }
}

const Out = () =>
    (
        <Toggle>
            {popover => (
                <div>
                    <Popover
                        placement="bottom"
                        visible={popover.on}
                        content="world!"
                        title="Hello"
                    >
                        <Button type="primary" onClick={popover.toggle}>
                            Button
                        </Button>
                    </Popover>
                </div>
            )}
        </Toggle>
    )

export default Out
