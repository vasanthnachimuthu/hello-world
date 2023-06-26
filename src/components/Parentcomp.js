import React, { Component } from 'react'
import Regularcomp from './Regularcomp'
import Purecomp from './Purecomp'
import Memocomp from './Memocomp'

class Parentcomp extends Component {
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
                <Memocomp name={this.state.name} />
                { /*<Purecomp name={this.state.name} />*/}
                { /*<Regularcomp name={this.state.name} /> */}
            </div>
        )
    }
}

export default Parentcomp