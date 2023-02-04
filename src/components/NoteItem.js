import React, {useContext} from 'react'
import noteContext from "../context/notes/NoteContext"

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context
    const {note, updateNote} = props;
    return (
    <div className="col-md-3">
        <div className="card my-1">

        <div className="card-body ">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et at eveniet distinctio ipsam dolore harum? Dolorum nostrum quibusdam sed sapiente labore, ipsam laudantium, necessitatibus nesciunt repellat ea quisquam unde, iste nulla ab doloremque placeat.</p>
        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
        <i className="fa-sharp fa-solid fa-pen-to-square mx-2" onClick = {() => {updateNote(note)}}></i>
        </div>
  </div>
    </div>
    )
}

export default NoteItem
