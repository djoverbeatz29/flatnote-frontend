import React from 'react'

class Note extends React.Component {
    render() {
        console.log(props)
        return (
            <div key={ix} className='note'>
                <h1>{noteObj.title}</h1>
                <p>{noteObj.content}</p>
                <button>Edit</button>
                <button onClick={this.deleteNote}>Delete</button>
            </div>
        )
    }
}

export default Note