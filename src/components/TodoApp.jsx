import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import InputTodo from '@/components/InputTodo'
import TodoList from '@/components/TodoList'

import { todos as todosData } from '@/data/todoData'

function TodoApp() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        if(!localStorage.getItem("todos")){
            const temp = JSON.stringify(todosData)
            localStorage.setItem("todos", temp)
        }else{
            const temp = JSON.parse(localStorage.getItem("todos"))
            setTodos(temp)
        }
    }, [])

    const handleChange = (id) => {
        setTodos((prevState) => {
            return prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        })
    }

    const deleteTodo = (id) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== id)
        })
    }

    const addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title,
            completed: false
        }
        setTodos([newTodo, ...todos])
    }

    return (
        <>
            <InputTodo addTodo={addTodo} />
            <TodoList
                todos={todos}
                handleChange={handleChange}
                deleteTodo={deleteTodo}
            />
        </>
    )
}

export default TodoApp