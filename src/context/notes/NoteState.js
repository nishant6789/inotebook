import React, {useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=> {
    const host = "http://localhost:5000"
    const notesInitial = [
    ]
    const [notes, setNotes] = useState(notesInitial) 
    
    //get all notes
    const getNotes = async()=> {
        const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjEwODZkNTdhZjVhN2ZlZTIzN2YxIn0sImlhdCI6MTY3NDk4MjU4MX0.JGmmY4P_thV_BMN8f2EorcYe0-t2bFjEd3ZQU327WFI"
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json.message)
    }

    // add a note
    const addNote = async(title, description, tag)=> {
        //TODO API call

        // API call
        const response = await fetch(`${host}/api/notes/addNotes`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjEwODZkNTdhZjVhN2ZlZTIzN2YxIn0sImlhdCI6MTY3NDk4MjU4MX0.JGmmY4P_thV_BMN8f2EorcYe0-t2bFjEd3ZQU327WFI"
            },
            body: JSON.stringify({title, description, tag})
        });

        console.log(response)
        console.log("Adding a new note")
        const note = {"_id": "63d782e5beacd349aaae7517",
        "user": "63d61086d57af5a7fee237f1",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-01-30T08:42:13.598Z",
        "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // edit a note
    const editNote = async(id, title, description, tag)=> {
        // API call
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjEwODZkNTdhZjVhN2ZlZTIzN2YxIn0sImlhdCI6MTY3NDk4MjU4MX0.JGmmY4P_thV_BMN8f2EorcYe0-t2bFjEd3ZQU327WFI"
            },
            body: JSON.stringify({title, description, tag})
        });
        // const json = response.json();
        console.log(response)
        // Logic to edit in client
        for(let index = 0;index < notes.length ;index++) {
            let element = notes[index];
            if(element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    // delete a note
    const deleteNote = async(id)=> {

        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjEwODZkNTdhZjVhN2ZlZTIzN2YxIn0sImlhdCI6MTY3NDk4MjU4MX0.JGmmY4P_thV_BMN8f2EorcYe0-t2bFjEd3ZQU327WFI"
            },
        });
        const json = response.json();
        console.log(json)

        console.log("Deleting the note with id" + id)
        let newNotes = notes.filter((note)=> {return note._id!==id})
        setNotes(newNotes)
    }

    return(

        <NoteContext.Provider value = {{notes, addNote, editNote, deleteNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;