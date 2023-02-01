import React from 'react'
import { useContext } from 'react';
import noteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem';

export const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context
  return (
    <div className="row my-3">
        <h1>Your notes</h1>
        {notes.map((note)=>{
            return <NoteItem note = {note}/>
        })}
        
    </div>

  )
}
