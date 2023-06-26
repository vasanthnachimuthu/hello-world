import React, { Component, PureComponent } from 'react'
import Regularcomp from './Regularcomp'
import Purecomp from './Purecomp'

class Parentcomp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'vasanth'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'vasanth'
            })
        }, 2000)
    }
    render() {
        console.log("****************parent comp****************")
        return (
            <div>Parent component
                <Purecomp name={this.state.name} />
                <Regularcomp name={this.state.name} />
            </div>
        )
    }
}

export default Parentcomp