import React from 'react';

const Note = ({ index, note, handleEditNote, handleDeleteNote }) => {
  return (
    <li>
      {note}
      <button onClick={() => handleEditNote(index)}>Edit</button>
      <button onClick={() => handleDeleteNote(index)}>Delete</button>
    </li>
  );
};

export default Note;
