import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: '', description: '', tag: '' });

    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({
            title: '',
            description: '',
            tag: 'default',
        });
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    value = {note.title}
                    id="title"
                    name="title"
                    placeholder="Add a title.."
                    onChange={onChange} // Place the onChange event here
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    className="form-control"
                    value = {note.description}
                    id="description"
                    name="description"
                    rows="3"
                    onChange={onChange} // Place the onChange event here
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">
                    Tag
                </label>
                <textarea
                    className="form-control"
                    value = {note.tag}
                    id="tag"
                    name="tag"
                    rows="1"
                    onChange={onChange} // Place the onChange event here
                ></textarea>
            </div>
            <button type="button" className="btn btn-light" onClick={handleclick}>
                Add note
            </button>
        </div>
    );
};

export default AddNote;
