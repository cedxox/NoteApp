import React, {useState, useEffect} from 'react'
import CreateNote from './CreateNote'
import Xnote from './Xnote';
import {v4 as uuid} from "uuid"

const Notes = () => {
    const [inputText, setInputText] = useState("")
    const [note, setNote] = useState ([])
    const [editToggle, setEditToggle] = useState(null)

    const editHandler =(id, text) =>{
        setEditToggle(id)
        setInputText(text)
    }
    const saveHandler = () =>{
        if(editToggle) {
            setNote(note.map((n) => (
                n.id === editToggle ?
                {...n, text:inputText}
                :n
            )))
        } else{
            setNote((prevNote)=>[
                ...prevNote, {
                    id: uuid(),
                    text:inputText
    
                }
            ])
        }
       
        setInputText("")
        setEditToggle(null)
    }

    const deleteHandler = (id) => {
        const newNote = note.filter((n)=> n.id !== id)
        setNote(newNote)
    }

    useEffect (()=>{
        const data = JSON.parse(localStorage.getItem("myNote"))
        if (data) {
            setNote(data)
        }
    },[])

    useEffect (()=>{
       window.localStorage.setItem("myNote", JSON.stringify(note))
    },[note])
  return (
    <div className='notes'>
        {
            note.map((xnote)=>(
                
                // edit-line
            editToggle === xnote.id ?  

            <CreateNote 
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
            />

            :
                <Xnote
                key={xnote.id}
                id={xnote.id}
                text={xnote.text}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                >

                </Xnote>
            ))
        }
        {
            editToggle === null ?
            <CreateNote 
            inputText={inputText}
            setInputText={setInputText}
            saveHandler={saveHandler}
            /> : <></>
        }
       
    </div>
  )
}



export default Notes