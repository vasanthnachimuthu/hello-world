import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Username: '',
            Comments: '',
            Topic: 'React'
        }
    }
    handleUsernamechange = event => {
        this.setState({
            Username: event.target.value
        })
    }
    handleCommentschange = event => {
        this.setState({
            Comments: event.target.value
        })
    }
    handleTopicchange = event => {
        this.setState({
            Topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.Username}  ${this.state.Comments}  ${this.state.Topic}`)

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.Username} onChange={this.handleUsernamechange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.Comments} onChange={this.handleCommentschange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.Topic} onChange={this.handleTopicchange}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <button type='submit'>submit</button>
            </form>
        )
    }
}

export default Form