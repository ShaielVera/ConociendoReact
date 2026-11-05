import Localidad from "../Localidad/Localidad.jsx";
import { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import useLocalidadesApi from "../../Hooks/useLocalidadesApi";
import { CircularProgress, Button, Card, CardContent, CardActions, CardHeader } from "@mui/material";

export default function LocalidadesList() {
    const {
        localidades,
        cargando,
        error,
        eliminarLocalidad,
        actualizarLocalidad,
    } = useLocalidadesApi();
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState(null);

    return (
    <div>
    <br/>
    <hr/>
    <br/>
    <h1 className="center">Localidades</h1>
    <br/>
    <hr/>
    {mostrarFormulario && (
        <Modal>
            <Card>
                <CardHeader title="Editar Localidad" />
                <CardContent>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={localidadSeleccionada ? localidadSeleccionada.name : ""}
                    />
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        onClick={async () => {
                            const nombre = document.getElementById("name").value;
                            await actualizarLocalidad(localidadSeleccionada.id, {
                                id: localidadSeleccionada.id,
                                name: nombre,
                                provinciaId: localidadSeleccionada.provinciaId,
                                isDeleted: localidadSeleccionada.isDeleted,
                            });
                            setLocalidadSeleccionada(null);
                            setMostrarFormulario(false);
                        }}
                    >
                        Guardar
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setLocalidadSeleccionada(null);
                            setMostrarFormulario(false);
                        }}
                    >
                        Cerrar
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    )}
    {cargando && <CircularProgress />}
    {error && <p>Error al cargar las localidades</p>}
    {!cargando && !error && (
        <ul>
        {localidades.map((localidad) => (
            <li key={localidad.id}>
            <Localidad
                localidad={localidad}
                id={localidad.id}
                name={localidad.name}
                onEliminar={eliminarLocalidad}
                onSeleccionar={setLocalidadSeleccionada}
                onModificar={setMostrarFormulario}
            />
            </li>
            ))}
        </ul>
        )}
    </div>
);
}