import Titulo from './Componets/Titulo/Titulo.jsx'
import TodoCounter from './Componets/TodoCounter/TodoCounter.jsx'
import Alumno from './Componets/Alumno/Alumno.jsx'
import AccionesAlumno from './Componets/AccionesAlumno/AccionesAlumno.jsx'
import Contador from './Componets/Contador/Contador.jsx'
import ClienteList from './Componets/ClienteList/ClienteList.jsx'
import LocalidadesList from './Componets/LocalidadesList/LocalidadesList.jsx'

export default function App() {
  return (
    <>
      <Titulo text="Creando mi primera App en React" />
      <TodoCounter totalTodos={10} completedTodos={5} />
      <hr/>
      <Alumno Alumno="Shaiel Vera" curso="React" añoActual={new Date().getFullYear()} />
      <Boton accion={Saludo} />
      <AccionesAlumno />
      <Contador />
      <ClienteList />
      <LocalidadesList />
    </>
  )
}



function Saludo() {
    alert ("Hola, bienvenido a mi primera App en React")
}

function Boton({ accion }) {
  return <button onClick={accion} className='enlace'>Mostrar un saludo</button>
}