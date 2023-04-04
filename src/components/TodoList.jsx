import React from 'react'
import TodoItem from '@/components/TodoItem'

function TodoList({ todos, handleChange, deleteTodo }) {

    return (
        <ul>
            {todos?.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todoItem={todo}
                    handleChange={handleChange}
                    deleteTodo={deleteTodo}
                />
            )}
        </ul>
    )
}

export default TodoList