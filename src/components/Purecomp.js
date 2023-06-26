import React, { PureComponent } from 'react'

export class Purecomp extends PureComponent {
    render() {
        console.log("****************pure comp****************")
        return (
            <div>
                Purecomp {this.props.name}
            </div>
        )
    }
}

export default Purecomp

