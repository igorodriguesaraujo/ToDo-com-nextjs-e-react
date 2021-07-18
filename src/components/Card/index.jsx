import { useState } from "react"

import styles from '../../styles/Card.module.css';

export default function Card({ description, status, index, handleRemoveToDo }) {
    const [done, setDone] = useState(status);

    const handleDoneTask = () => {
        setDone(done != true);
        document.querySelector('button').classList.add('active')
    }

    return (
        <article className={styles.card}>
            <span className={done ? styles.active : ''}>
                {index + 1}. {description}
            </span>

            <button
                className={done ? styles.active : ''}
                onClick={handleDoneTask}>
                {done ? 'Feito' : 'A Fazer'}
            </button>

            {
                done &&
                <button
                    className={styles.btnRemove}
                    onClick={handleRemoveToDo}>
                    Excluir
                </button>
            }
        </article>
    )
}