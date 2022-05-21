import React, { useState } from 'react'

const AddTodoModules = ({ addTodo }) => {
  const [text, setText] = useState('')

  //function for handle input text change
  const handleOnchange = (event) => {
    setText(event.target.value)
  }
  //add todo in todo list after that empty input box
  const addTodoAndClearInputs = () => {
    // exit if empty text
    if(!text.trim()) return

    addTodo(text)
    setText('')
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleOnchange}
      />
      <button onClick={addTodoAndClearInputs}>Add</button>
    </div>
  )
}

export default AddTodoModules