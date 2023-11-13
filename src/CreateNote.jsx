import React from 'react'
import './CreateNote.css'

const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const card = 100
    const cardLimit = card - inputText.length;
  return (
    <div className='note'>
        <textarea name=""
         id="" 
         cols="10" 
         rows="5"
         placeholder='type....'
         onChange={(evt)=> setInputText(evt.target.value)}
         maxLength={100}
         value={inputText}
         >
        </textarea>
        <div className='note-footer'>
            <span className='label'>{cardLimit} left</span>
            <button className='note-save' onClick={saveHandler}>save</button>
        </div>

    </div>
  )
}

export default CreateNote