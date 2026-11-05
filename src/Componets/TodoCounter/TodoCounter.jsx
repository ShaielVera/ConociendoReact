import './TodoCounter.css'

export default function TodoCounter ({totalTodos, completedTodos}) {
  return (
    <h2 className="todocounter">
      Has completado {completedTodos} de {totalTodos} tareas.
    </h2>
  )
}