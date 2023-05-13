import React from 'react'

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id)
    }
    return (
        <div className='col col-12 col-md-3 my-2'>
            <div className='card'>
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    <p>{props.content}</p>
                </div>
                <div className='card-footer float-right'>
                    <button className='btn btn-warning btn-sm mx-1' onClick={deleteNote}>Delete</button>
                    <button className='btn btn-info btn-sm'>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Note