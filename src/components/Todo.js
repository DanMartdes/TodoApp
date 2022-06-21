import { useState } from 'react'
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deletedTodo, setDeletedTodo] = useState(false);
    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    function deleteTodo() {
        setDeletedTodo(true);
    }


    return (
        <div>
            <div className='card'>
                <h2>{props.text}</h2>
                <div className='actions'>
                    <button className='btn' onClick={deleteHandler}>Delete</button>
                </div>
                {/* { modalIsOpen ? <Modal /> : null } */}
                {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={deleteTodo} />}
                {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
            </div>
        </div>
    );
}

export default Todo;