import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <form className='note-form' onSubmit={}>
                <input className='title' type='text' placeholder='Title' />
                <input className='content' type='text' placeholder='Content' />
            </form>
        )
    }
}