import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button, Card, CardHeader, CardContent, CardActions } from "@mui/material";

export default function Cliente ({ cliente, onEliminar, onSeleccionar, onModificar, mostrarEliminados, onRestaurar }) {
    const Swal2 = withReactContent(Swal);
    const configuracionVentana = {
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo!'
    };
    const configuracionRestaurar = {
    title: '¿Restaurar cliente?',
    text: "El cliente volverá a la lista de clientes activos.",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, restaurarlo!',
    cancelButtonText: 'Cancelar'
    };
    const onEliminarAdvertencia = (id) => {
    Swal2.fire(configuracionVentana)
        .then((result) => {
        if (result.isConfirmed) {
            onEliminar(id);
            Swal2.fire(
            'Eliminado!',
            'El cliente ha sido eliminado.',
            'success'
            )
        }
        });
}
    const onRestaurarAdvertencia = (id) => {
    Swal2.fire(configuracionRestaurar)
        .then((result) => {
        if (result.isConfirmed) {
            return onRestaurar(id);
        }
        return false;
        })
        .then((restaurado) => {
        if (restaurado) {
            Swal2.fire(
            'Restaurado!',
            'El cliente ha sido restaurado.',
            'success'
            )
        }
        });
}
        return (
        <Card className="center" variant="outlined" sx={{ marginBottom: 2 }}>
        <CardHeader title={`${cliente.firstname} ${cliente.lastname} `} />
        <CardContent>
        <p>DNI: {cliente.dni}</p>
        <p>Dirección: {cliente.address}</p>
        </CardContent >
        <CardActions sx={{ justifyContent: 'center' }}>
        {mostrarEliminados ? (
        <Button variant="contained" color="primary" onClick={() => onRestaurarAdvertencia(cliente.id)}>
            Restaurar Cliente
        </Button>
        ) : (
        <>
            <Button variant="contained" color="primary" onClick={() => {
            onSeleccionar(cliente);
            onModificar(true);
            }}>
            Modificar Cliente
            </Button>

            <Button variant="contained" color="error" onClick={() => onEliminarAdvertencia(cliente.id)}>
            Eliminar Cliente
            </Button>
        </>
        )}
        </CardActions>
        </Card>
    );
}