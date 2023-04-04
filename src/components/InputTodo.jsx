import { useState } from 'react'

function InputTodo({ addTodo }) {
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title.trim()){
            addTodo(title)
            setTitle('')
        } else {
            setMessage("Please write something")
        }
    }

    const handleChange = (e) => {
        setMessage('')
        setTitle(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Add todo..."
                    value={title}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <span style={{ fontSize: "0.7rem", color: "red"}}>{message}</span>
        </>
    )
}

export default InputTodo