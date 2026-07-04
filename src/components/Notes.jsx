import { useState } from "react";
import api from "../services/api";

function Notes({ lead }) {

  const [notes, setNotes] = useState(lead.notes || []);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const saveNotes = async (updatedNotes) => {
    const updatedLead = {
      ...lead,
      notes: updatedNotes,
    };

    await api.put(`/leads/${lead.id}`, updatedLead);

    setNotes(updatedNotes);
  };

  const addOrUpdate = () => {

    if (!text.trim()) return;

    if (editingId) {

      const updated = notes.map(note =>
        note.id === editingId
          ? { ...note, text }
          : note
      );

      saveNotes(updated);

      setEditingId(null);

    } else {

      const updated = [
        ...notes,
        {
          id: Date.now(),
          text,
          createdBy: "Admin",
          createdDate: new Date().toISOString().split("T")[0]
        }
      ];

      saveNotes(updated);
    }

    setText("");

  };

  const editNote = (note) => {
    setText(note.text);
    setEditingId(note.id);
  };

  const deleteNote = (id) => {
    saveNotes(notes.filter(n => n.id !== id));
  };

  return (
    <>
      <hr />

      <h5>Notes</h5>

      <div className="input-group mb-3">

        <input
          className="form-control"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={addOrUpdate}
        >
          {editingId ? "Update" : "Add"}
        </button>

      </div>

      {notes.map(note=>(
        <div className="card mb-2" key={note.id}>

          <div className="card-body">

            <h6>{note.text}</h6>

            <small>
              {note.createdBy} | {note.createdDate}
            </small>

            <br/>

            <button
              className="btn btn-warning btn-sm me-2 mt-2"
              onClick={()=>editNote(note)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm mt-2"
              onClick={()=>deleteNote(note.id)}
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </>
  );
}

export default Notes;