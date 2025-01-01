import React, { useState } from "react";
import InputPortion from "./InputPortion";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const [list, setList] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const handleList = (inputs) => {
    if (!inputs || !inputs.title?.trim() || !inputs.content?.trim()) {
      alert("Please fill in both the title and content before saving.");
      return;
    }

    if (editingNote !== null) {
      // Update existing note
      setList(prev => prev.map((note, index) => 
        index === editingNote ? inputs : note
      ));
      setEditingNote(null);
    } else {
      // Add new note
      setList((prev) => [...prev, inputs]);
    }
  };

  const deleteItem = (id) => {
    setList((prev) => prev.filter((_, index) => index !== id));
  };

  const editItem = (id, noteData) => {
    setEditingNote(id);
    // Pass the note data to InputPortion for editing
    setList(prev => prev.map((note, index) => index === id ? noteData : note));
  };

  return (
    <>
      <InputPortion 
        onAdd={handleList}
        initialNote={editingNote !== null ? list[editingNote] : null}
        isEditing={editingNote !== null}
      />
      <div className="notes-grid">
        {list.map((entry, index) => (
          <NoteItem
            key={index}
            id={index}
            text={entry}
            onDelete={deleteItem}
            onEdit={editItem}
          />
        ))}
      </div>
    </>
  );
};

export default NoteList;