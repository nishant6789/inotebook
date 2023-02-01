import React, {useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=> {
    
    const notesInitial = [
        {
            "_id": "63d64466401e0c9c6217dfe9",
            "user": "63d61086d57af5a7fee237f1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2023-01-29T10:03:18.189Z",
            "__v": 0
        },
        {
            "_id": "63d782e5beacd349aaae7515",
            "user": "63d61086d57af5a7fee237f1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2023-01-30T08:42:13.598Z",
            "__v": 0
        },
        {
            "_id": "63d782e5beacd349aaae7515",
            "user": "63d61086d57af5a7fee237f1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2023-01-30T08:42:13.598Z",
            "__v": 0
        },
        {
            "_id": "63d782e5beacd349aaae7515",
            "user": "63d61086d57af5a7fee237f1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2023-01-30T08:42:13.598Z",
            "__v": 0
        },
        {
            "_id": "63d782e5beacd349aaae7515",
            "user": "63d61086d57af5a7fee237f1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2023-01-30T08:42:13.598Z",
            "__v": 0
        },
        {
            "_id": "63d782e5beacd349aaae7515",
            "user": "63d61086d57af5a7fee237f1",
            "title": "My title",
            "description": "My description",
            "tag": "personal",
            "date": "2023-01-30T08:42:13.598Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)  
    return(

        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;