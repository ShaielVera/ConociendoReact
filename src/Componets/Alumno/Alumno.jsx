import imagenCiencia from '../../assets/imagenciencia.png'
import './Alumno.css'
import { useState } from 'react'

export default function Alumno ({Alumno, curso, añoActual}) {
    const suma = 20 + 8;
    const [nombre, setNombre] = useState(Alumno);
    const [mostrarImagen, setMostrarImagen] = useState(true);

    return (
        <div className='center'>
            <h2 className='alumno'>Alumno: {nombre}</h2>
            <h2 className='alumno'>Curso: {curso}</h2>
            <h2 className='alumno'>Año Actual: {añoActual}</h2>
            <h2 className='alumno'>Suma: {suma}</h2>
            {mostrarImagen && <img src={imagenCiencia} alt="Imagen de Ciencia" className='img' />}            
            <label htmlFor="nombre" className='center'>Nombre:</label>
            <br />
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa tu nombre" />
            <br />
            <input type="checkbox" id="mostrarImagen" name="mostrarImagen" checked={mostrarImagen} onChange={(e) => setMostrarImagen(e.target.checked)} />
            <label htmlFor="mostrarImagen" className='center'>Mostrar Imagen</label>
            <br />
            <hr/>
            <a href="https://es.react.dev/" target="_blank" rel="noopener noreferrer" className='enlace'>Ir la pagina de React</a>
        </div>
    );
}