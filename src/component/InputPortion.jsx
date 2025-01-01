import React, { useState, useEffect } from "react";

const InputPortion = ({ onAdd, initialNote, isEditing }) => {
  const [inputs, setInputs] = useState({ title: "", content: "" });

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
      <input
        type="text"
        name="title"
        id="note-title"
        placeholder="Title"
        value={inputs.title}
        onChange={handleChange}
      />
      <textarea
        id="note-content"
        name="content"
        placeholder="Write your note here..."
        value={inputs.content}
        onChange={handleChange}
      />
      <button onClick={handleSave}>
        {isEditing ? 'Update Note' : 'Save Note'}
      </button>
    </div>
  );
};

export default InputPortion;