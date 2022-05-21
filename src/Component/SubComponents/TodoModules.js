import React from 'react'

const TodoModules = (props) => {

    //combine function for done todo list
    const removeAndAddDoneTodo = () => {
        props.deleteTodo(props.id)
        props.addDoneTodo(props.val)
    }

    return (
        <div>
            <span onClick={props.openEditText}>{props.val}</span>
            <button onClick={() => props.deleteTodo(props.id)}>X</button>
            <button onClick={removeAndAddDoneTodo}>Done</button>
        </div>
    )
}

export default TodoModules