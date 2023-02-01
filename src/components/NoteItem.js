import React from 'react'

const NoteItem = (props) => {
    const {note} = props;
    return (
    <div className="col-md-3">
        <div className="card my-1">

        <div className="card-body ">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et at eveniet distinctio ipsam dolore harum? Dolorum nostrum quibusdam sed sapiente labore, ipsam laudantium, necessitatibus nesciunt repellat ea quisquam unde, iste nulla ab doloremque placeat.</p>
        </div>
  </div>
    </div>
    )
}

export default NoteItem
