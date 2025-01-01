import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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
          <EditIcon/>
        </button>
        <button 
          className="delete-button"
          onClick={() => props.onDelete(props.id)}
        >
          <DeleteIcon/>
      
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
