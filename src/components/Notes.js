import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/notes/NoteContext"
import { AddNote } from './AddNote';
import NoteItem from './NoteItem';

export const Notes = () => {
    const context = useContext(noteContext);
    const {notes, getNotes} = context

    const [note, setNote] = useState({title: "", description: "", tag: "default"})
    const {addNote} = context
    useEffect(() => {
      getNotes()
      // eslint-disable-next-line  
    }, [])
    const handleClick = (e)=> {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }

  const ref = useRef(null);
  const updateNote = (note) => {
    ref.current.click(); // if it is shown then hide it and vice versa
  }  
  const onChange = (e)=> {
        
    setNote({...note, [e.target.name] : e.target.value})
}
  
  return (
    <>
    <AddNote/>
    <button ref = {ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
    Launch demo modal
    </button>
    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"  aria-hidden="true">
    <div className="modal-dialog" role="document">
    <div className="modal-content">
        <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Edit Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div className="modal-body">
        <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
        </div>
  
        <div className="mb-3">
        <label htmlFor="tag" className="form-label">tag</label>
        <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
      </div>
        
        <button type="submit" className="btn btn-primary" onClick = {handleClick}>Add Note</button>
      </form>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Update Note</button>
        </div>
    </div>
    </div>
    </div>
    <div className="row my-3">
        <h1>Your notes</h1>
        {notes.map((note)=>{
            return <NoteItem key={note._id} updateNote = {updateNote} note = {note}/>
        })}
        
    </div>
    </>

  )
}
