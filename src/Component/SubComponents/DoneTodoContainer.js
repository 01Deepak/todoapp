import React from 'react'

const DoneTodoContainer = (props) => {

    //Undo todo list
    const undo = (id, text) => {
        props.deleteDoneTodo(id)
        props.addTodo(text)
    }

    return (
        <div>
            <h1>Done Todo List </h1>
            {
                props.doneTodoList ?
                    props.doneTodoList.map((val, index) => {
                        return (
                            <div key={index}>
                                <span>{val}</span>
                                <button onClick={() => props.deleteDoneTodo(index)}>X</button>
                                <button onClick={() => undo(index, val)}>undo</button>
                                <br />
                            </div>
                        )
                    })
                    : ''
            }
        </div>
    )
}

export default DoneTodoContainer