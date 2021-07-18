import { useState } from "react"

export default function Input({ todos, setTodos }) {
    const [newTodo, setNewTodo] = useState('');

    const handleAddToDo = () => {
        if (!newTodo == '') {
            setTodos([...todos, { description: newTodo, status: false }])
            setNewTodo('');
        }
    }

    return (

        <header>
            <input
                type="text"
                placeholder="Nova tarefa" value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddToDo}>Adicionar</button>
        </header>

    )
}