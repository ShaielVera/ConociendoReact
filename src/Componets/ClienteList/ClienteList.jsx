import Cliente from "../Cliente/Cliente";
import { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import useClientesApi from "../../Hooks/useClientesApi";
import { CircularProgress, Button, Card, CardContent, CardActions, CardHeader } from "@mui/material"; // <- 1. Importa Button aquí

export default function ClienteList() {
    const { clientes = [], cargando, error, eliminarCliente, crearCliente, clienteSeleccionado, setClienteSeleccionado, actualizarCliente, obtenerClientes, obtenerClientesEliminados, RestaurarCliente } = useClientesApi();
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [mostrarEliminados, setMostrarEliminados] = useState(false);
    const restaurarYMostrarActivos = async (id) => {
        const restaurado = await RestaurarCliente(id);
        if (restaurado) {
            setMostrarEliminados(false);
            await obtenerClientes();
        }
        return restaurado;
    };

    return (
    <div>
    <br/>
    <hr/>
    <br/>
    <h1 className="center">Clientes</h1>
    <br/>
    <hr/>
        {mostrarFormulario && (
        <Modal>
            <Card>
                <CardHeader title="Agregar/Editar Cliente" />
                <CardContent>   
                    <label htmlFor="firstname">Nombre:</label>
                    <input type="text" id="firstname" name="firstname"
                    defaultValue={clienteSeleccionado ? clienteSeleccionado.firstname : ""} />
                    <br/>
                    <label htmlFor="lastname">Apellido:</label>
                    <input type="text" id="lastname" name="lastname"
                    defaultValue={clienteSeleccionado ? clienteSeleccionado.lastname : ""} />
                    <br/>
                    <label htmlFor="dni">DNI:</label>
                    <input type="text" id="dni" name="dni"
                    defaultValue={clienteSeleccionado ? clienteSeleccionado.dni : ""} />
                    <br/>
                    <label htmlFor="address">Dirección:</label>
                    <input type="text" id="address" name="address"
                    defaultValue={clienteSeleccionado ? clienteSeleccionado.address : ""} />
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button variant="contained" onClick={async () => {
                const nuevoCliente = {
                    firstname: (document.getElementById("firstname")).value,
                    lastname: (document.getElementById("lastname")).value,
                    dni: (document.getElementById("dni")).value,
                    address: (document.getElementById("address")).value,
                    localidadId: 1,
                };
                if (clienteSeleccionado) {
                    await actualizarCliente(clienteSeleccionado.id, {...nuevoCliente, id: clienteSeleccionado.id});
                    setClienteSeleccionado(null);
                } else {
                    await crearCliente(nuevoCliente);
                }
                setMostrarFormulario(false);
                }}>
                Guardar
                </Button>

                <Button variant="outlined" onClick={() => setMostrarFormulario(false)}>
                Cerrar
                </Button>
                </CardActions>
            </Card>
        </Modal>
    )}
    {cargando && <CircularProgress />}
    {error && <p>Error al cargar clientes</p>}
    {!cargando && !error && (
        <ul>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <Button variant="contained" color="primary" onClick={() => {setClienteSeleccionado(null); setMostrarFormulario(true)}}>
                Crear Cliente
            </Button>
            <Button variant="outlined" onClick={async () => {
                setMostrarEliminados(!mostrarEliminados)
                if (!mostrarEliminados) {
                    await obtenerClientesEliminados();
                } else {
                    await obtenerClientes();
                }
                }}>
                {mostrarEliminados ? "Ver Activos" : "Ver Eliminados"}
            </Button>
        </div>

        {clientes.map((cliente) => (
            <li key={cliente.id}>
            <Cliente
                cliente={cliente}
                onEliminar={eliminarCliente}
                onSeleccionar={setClienteSeleccionado}
                onModificar={setMostrarFormulario}
                mostrarEliminados={mostrarEliminados}
                onRestaurar={restaurarYMostrarActivos}
            />
            </li>
            ))}
        </ul>
        )}
    </div>
    );
}