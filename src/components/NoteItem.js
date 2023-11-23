import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card wrap">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary"> {note.tag}</h6>
                    <p className="card-text"> {note.description}.</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
