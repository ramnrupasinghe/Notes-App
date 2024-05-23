import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (editIndex !== null) {
      const updatedNotes = notes.map((note, index) =>
        index === editIndex ? noteText : note
      );
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, noteText]);
    }
    setNoteText('');
  };

  const handleEditNote = (index) => {
    setNoteText(notes[index]);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>
        <NoteForm
          noteText={noteText}
          handleInputChange={handleInputChange}
          handleAddNote={handleAddNote}
          editIndex={editIndex}
        />
        <NoteList
          notes={notes}
          handleEditNote={handleEditNote}
          handleDeleteNote={handleDeleteNote}
        />
      </header>
    </div>
  );
}

export default App;
