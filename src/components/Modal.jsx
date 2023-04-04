import { useState, useEffect, useRef } from 'react'
import styles from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'

function Modal() {
    const [showModal, setShowModal] = useState(false)

    const modalRef = useRef()

    useClickOutside(modalRef, showModal, () => setShowModal(false))

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Modal Button</button>
            {showModal && (
                <div className={styles.overlay}>
                    <div
                        ref={modalRef}
                        className={styles.modal}
                    >
                        <div className={styles.modalContent}>
                            <input
                                // ref={inputRef}
                                // style={editMode}
                                type="text"
                            // defaultValue={todo.title}
                            />
                            <button
                                // style={editMode}
                                // onClick={handleUpdateSubmit}
                            >
                                Update
                            </button>
                        {/* <button onClick={() => setShowModal(false)}>x</button> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal