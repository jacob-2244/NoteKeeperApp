import React from 'react';

const NoteItem = (props) => {
  return (
    <div className="note-item">
      <h3>{props.text.title}</h3>
      <p>{props.text.content}</p>
      <div className="button-group">
        <button 
          className="edit-button"
          onClick={() => props.onEdit(props.id, props.text)}
        >
          Edit
        </button>
        <button 
          className="delete-button"
          onClick={() => props.onDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;