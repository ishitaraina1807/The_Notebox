import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const getRandomColor = () => {
    const predefinedColors = ['#ECEE81', '#8DDFCB', '#82A0D8', '#EDB7ED'];
    const randomIndex = Math.floor(Math.random() * predefinedColors.length);
    return predefinedColors[randomIndex];
  };

  const bgColor = getRandomColor();

  return (
    // Remove the unnecessary div element
      <div style={{ backgroundColor: bgColor }} className='p-4 rounded-lg mt-8'>
        <h5 className="text-2xl text-gray-800 font-bold mb-2">{note.title}</h5>
        <p className="text-xl text-gray-800">{note.description}.</p>
        <h6 className="text-lg text-right font-semibold text-gray-700 mb-2">Due: {note.dueDate}</h6>
        <div className="text-right mt-4">
          <i
            className="fas fa-trash text-gray-800 cursor-pointer mr-4"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="fas fa-edit text-gray-800 cursor-pointer"
            onClick={() => updateNote(note)}
          ></i>
        </div>
      </div>

  );
};

export default NoteItem;
