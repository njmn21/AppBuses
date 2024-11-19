import { useNavigate } from 'react-router-dom';
import './BusCard.css';

interface Bus {
    id: number;
    numeroBus: string;
    placa: string;
    marca: string;
    caracteristicas: string;
    estado: boolean;
    fechaCreacion: string;
}

export default function BusCard({ bus }: { bus: Bus }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/buses/${bus.id}`);
    }

    return (
        <div className='card'>
            <h2>Bus Number: {bus.numeroBus}</h2>
            <p><strong>Placa:</strong> {bus.placa}</p>
            <p><strong>Marca:</strong> {bus.marca}</p>
            <p><strong>Fecha de creación:</strong> {bus.fechaCreacion}</p>
            <p><strong>Características:</strong> {bus.caracteristicas}</p>
            <p><strong>Estado:</strong> {bus.estado ? "Disponible" : "No disponible"}</p>
            <button onClick={handleClick}>Ver detalles</button>
        </div>
    );
}
