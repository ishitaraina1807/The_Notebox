import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card wrap mt-4">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary"> {note.tag}</h6>
                    <p className="card-text"> {note.description}.</p>
                    
                    <i className="fa-solid fa-trash mx-2"></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
