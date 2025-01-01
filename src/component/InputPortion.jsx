import React, { useState, useEffect } from "react";
import Note from "./Note";
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import { Fab, Zoom } from "@mui/material";

const InputPortion = ({ onAdd, initialNote, isEditing }) => {
  const [inputs, setInputs] = useState({ title: "", content: "" });
  const[expand, setExpand] = useState(false);

  useEffect(() => {
    if (initialNote) {
      setInputs(initialNote);
    } else {
      setInputs({ title: "", content: "" });
    }
  }, [initialNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onAdd(inputs);
    setInputs({ title: "", content: "" });
  };

  return (
    
    <div className="note-container">
      {expand && (
          <input
          type="text"
          name="title"
          id="note-title"
          placeholder="Title"
          value={inputs.title}
          onChange={handleChange}
          />
      )
      
      }
   
      <textarea
        onClick={()=>{
          setExpand(true)
        }}
        id="note-content"
        name="content"
        placeholder="Write your note here..."
        value={inputs.content}
        onChange={handleChange}
        rows={expand ? 3 : 1}
      />
      <Zoom in={expand}>

        
        <Fab onClick={handleSave} >
        {isEditing ?   <UpdateIcon/>:<AddIcon/> } 


        </Fab>

      </Zoom>
    </div>
  );
};

export default InputPortion;
