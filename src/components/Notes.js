import React from 'react'

class Note extends React.Component {
    render() {
        return (
            <div class='note-holder'>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Note