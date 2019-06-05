import React, { Component } from 'react'
import { Toggle } from 'react-powerplug'
import { Button, Checkbox } from 'antd'

export default class Demo4 extends Component {
    render() {
        return (
            <div>
                <Toggle initial={false}>
                    {({ on, toggle }) => (
                        <>
                            <Button onClick={toggle}>click</Button>
                            <Checkbox checked={on} />
                            {on.toString()}
                        </>

                    )}
                </Toggle>
            </div>
        )
    }
}
