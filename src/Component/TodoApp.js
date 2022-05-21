import React, { useEffect, useState } from 'react'
import DoneTodoContainer from './SubComponents/DoneTodoContainer'
import AddTodoModules from './SubComponents/AddTodoModules'
import TodoContainer from './SubComponents/TodoContainer'

const TodoApp = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || [])
  const [doneTodoList, setDoneTodoList] = useState(JSON.parse(localStorage.getItem('doneTodoList')) || [])

  // save todo list in local storage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])

  // save doneTodoList in local storage
  useEffect(() => {
      localStorage.setItem('doneTodoList', JSON.stringify(doneTodoList));
  }, [doneTodoList])

  //add todo in todoList array
  const addTodo = (text) => {
      setTodoList([...todoList, text])
  }

  //delete todo from todoList
  const deleteTodo = (id) => {
    const dataAfterDelete = todoList.filter(( _, index) => {
      if (id === index) {
        return false
      }
      return true
    })
    setTodoList(dataAfterDelete)
  }

  //update todo from todolist
  const handleSave = (id, text) => {
    if (text) {
      const dataAfterUpdate = todoList.map((val, index) => {
        if (index === id) {
          return text
        }
        return val
      })
      setTodoList(dataAfterUpdate)
    }
  }

  //add todo in donetodo  list
  const addDoneTodo = (listValue) => {
    setDoneTodoList([...doneTodoList, listValue])
  }

  //delete done todo from doneTodoList
  const deleteDoneTodo = (id) => {
    const deletedData = doneTodoList.filter((val, index) => {
      return index === id ? false : true
    })
    setDoneTodoList(deletedData)
  }

  return (
    <>
      <AddTodoModules addTodo={addTodo} />
      {
        todoList && todoList.map((val, index) => {
            return (
              <TodoContainer
                key={index}
                val={val} 
                id={index} 
                deleteTodo={deleteTodo}
                handleSave={handleSave}
                addDoneTodo={addDoneTodo}
              />
            )
          })
      }

      <DoneTodoContainer
        doneTodoList={doneTodoList}
        deleteDoneTodo={deleteDoneTodo}
        addTodo={addTodo}
      />
    </>
  )
}

export default TodoApp