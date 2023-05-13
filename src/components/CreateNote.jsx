import React, { useState } from 'react'

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    const [expand, setExpand] = useState(false)

    //get input field value
    const inputEvent = (e) => {
        const { name, value } = e.target
        setNote((previousData) => {
            return {
                ...previousData,
                [name]: value
            }
        })
    }

    //form submition
    const formSubmit = (e) => {
        e.preventDefault()
        props.passNote(note)
        setNote({
            title: '',
            content: ''
        })

    }


    return (
        <>
            <div className='col col-12 mx-auto'>
                <h2>Google Keep App</h2>
            </div>
            <hr />
            <div className='col col-12 col-md-4 mx-auto'>
                <div className='card'>
                    <div className="card-header">
                        Gooogle Keep Note
                    </div>
                    <div className="card-body">
                        <form onSubmit={formSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" name="title" value={note.title} placeholder="Title" autoComplete='off' onChange={inputEvent} />
                            </div>

                            <div className="input-group mb-3">
                                <input type="text" className="form-control" name="content" value={note.content} placeholder="write something.." onChange={inputEvent} />
                                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Save</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreateNote