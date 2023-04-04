import { useState, useRef } from 'react'
import styles from '@/style/TodoItem.module.scss'
import styleModal from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'

function TodoItem({ todoItem, deleteTodo }) {

    const [todo, setTodo] = useState(todoItem)
    const [editing, setEditing] = useState(false)

    const inputRef = useRef(null)

    const [showModal, setShowModal] = useState(false)
    const modalRef = useRef()

    useClickOutside(modalRef, showModal, () => setShowModal(false))

    let viewMode = {}
    let editMode = {}

    if(editing) {
        viewMode.display = "none"
    }else{
        editMode.display = "none"
    }

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdateSubmit = () => {
        setTodo({
            ...todo,
            title: inputRef.current.value
        })
        setEditing(false)
    }

    const handleChange = () => {
        setTodo({
            ...todo,
            completed: !todo.completed
        })
    }

    const handleEditingModal = () => {
        setShowModal(true)
    }

    const handleUpdateSubmitModal = () => {
        setTodo({
            ...todo,
            title: inputRef.current.value
        })

        setShowModal(false)
    }

    return (
        <li>
            <div style={viewMode} className={styles.item}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleChange}
            />
            <span style={ todo.completed ? { textDecoration: "line-through"}: null}>
                {todo.title}
            </span>
            <button onClick={handleEditingModal}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>

            <input
                ref={inputRef}
                style={editMode}
                type="text"
                defaultValue={todo.title}
            />
            <button
                style={editMode}
                onClick={handleUpdateSubmit}
            >
                Update
            </button>
            {showModal && (
                <div className={styleModal.overlay}>
                    <div
                        ref={modalRef}
                        className={styleModal.modal}
                    >
                        <div className={styleModal.modalContent}>
                            <input
                                ref={inputRef}
                                // style={editMode}
                                type="text"
                                defaultValue={todo.title}
                            />
                            <button
                                // style={editMode}
                                onClick={handleUpdateSubmitModal}
                            >
                                Update
                            </button>
                        {/* <button onClick={() => setShowModal(false)}>x</button> */}
                        </div>
                    </div>
                </div>
            )}
        </li>
    )
}

export default TodoItem