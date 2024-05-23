import React from 'react';
import Note from './Note';

const NoteList = ({ notes, handleEditNote, handleDeleteNote }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <Note
          key={index}
          index={index}
          note={note}
          handleEditNote={handleEditNote}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </ul>
  );
};

export default NoteList;
