import { useState } from 'react';

import Card from '../components/Card';
import Input from '../components/Input';

import styles from '../styles/Todos.module.css';

export default function Home() {

  const [todos, setTodos] = useState(
    [
      {
        description: 'Criando primeiro componente.',
        status: true
      },
      {
        description: 'Usando Hook useState().',
        status: false
      },
      {
        description: 'Criando integração entre componentes.',
        status: false
      }
    ]
  );

  const handleRemoveToDo = (description) => {
    setTodos(todos.filter(todo => {
      return todo.description !== description
    }))
  }

  return (

    <div className={styles.toDoContainer}>

      <Input
        todos={todos}
        setTodos={setTodos}
      />

      {
        todos.length === 0 &&
        <p className={styles.notFound}>
          <span>X</span> Nenhuma tarefa encontrada.
        </p>
      }

      {
        todos &&
        todos.map(({ description, status }, index) => (

          <Card
            key={index}
            index={index}
            description={description}
            status={status}
            handleRemoveToDo={() => handleRemoveToDo(description)}
          />
        ))
      }

    </div >

  )
}
