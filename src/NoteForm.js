import React from 'react';

const NoteForm = ({ noteText, handleInputChange, handleAddNote, editIndex }) => {
  return (
    <div>
      <input
        type="text"
        value={noteText}
        onChange={handleInputChange}
        placeholder="Enter a note"
      />
      <button onClick={handleAddNote}>
        {editIndex !== null ? 'Edit Note' : 'Add Note'}
      </button>
    </div>
  );
};

export default NoteForm;
