import React, { useState } from 'react'

  const EditText = (props) => {
    const [text, setText] = useState(props.val)

    //function for handle onchange
    const handleOnchange = (event) => {
      setText(event.target.value)
    }

    const saveAndClose = () => {
      props.handleSave(props.id, text)
      props.closeEditText()
    }

    return (
      <span>
        <input
          type="text"
          value={text}
          onChange={handleOnchange}
        />
        <button onClick={saveAndClose}>save</button>
        <button onClick={props.closeEditText}>X</button>
      </span>
    )
  }

export default EditText