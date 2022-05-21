import React, { useState } from 'react'
import EditTodoModules from './EditTodoModules'
import TodoModules from './TodoModules'

  const TodoContainer = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    const handleSave = props.handleSave

     //function for open edit text
     const openEditText = () => {
      setIsEdit(true)
    }

    //function for close edit text
    const closeEditText = () => {
      setIsEdit(false)
    }

    return (
      isEdit ?
        <EditTodoModules
          val={props.val}
          handleSave={handleSave}
          id={props.id}
          closeEditText={closeEditText}
        />
        :
        <TodoModules 
          id={props.id}
          val={props.val}
          deleteTodo={props.deleteTodo}
          openEditText={openEditText}
          addDoneTodo={props.addDoneTodo}
        />
    )
  }

export default TodoContainer