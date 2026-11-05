import React, { useState } from 'react';

export default function AccionesAlumno() {
    const [mostrarAcciones, setMostrarAcciones] = useState(true);

    const mostrarAlertaAlumno = () => {
        console.log("Alumno: Shaiel Vera");
    };

    const mostrarAlertaEditar = () => {
        console.log("Editando alumno: Shaiel Vera");
    };

    const mostrarAlertaEliminar = () => {
        console.log("Eliminando alumno: Shaiel Vera");
    };

    return (
        <div className='center'>        
            <input type="checkbox" id="mostrarAcciones" name="mostrarAcciones" checked={mostrarAcciones} onChange={(e) => setMostrarAcciones(e.target.checked)} />
            <label htmlFor="mostrarAcciones" className='center'>Mostrar Acciones</label>
            <br />
            {mostrarAcciones && (
                <div>
                    <h2 className='alumno'>Acciones del Alumno</h2>
                    <div>
                        <button onClick={mostrarAlertaAlumno}>Ver alumno</button> {' '}{' '}
                        <button onClick={mostrarAlertaEditar}>Editar alumno</button> {' '}{' '}
                        <button onClick={mostrarAlertaEliminar}>Eliminar alumno</button> {' '}{' '}
                    </div>
                </div>
            )}
        </div>
    );
}