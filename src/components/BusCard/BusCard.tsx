import './BusCard.css';

interface Bus {
    numeroBus: string;
    placa: string;
    marca: string;
    caracteristicas: string;
    estado: boolean;
}

export default function BusCard({ bus }: { bus: Bus }) {
    return (
        <div className='card'>
            <h2>Bus Number: {bus.numeroBus}</h2>
            <p><strong>Placa:</strong> {bus.placa}</p>
            <p><strong>Marca:</strong> {bus.marca}</p>
            <p><strong>Características:</strong> {bus.caracteristicas}</p>
            <p><strong>Estado:</strong> {bus.estado ? "Disponible" : "No disponible"}</p>
        </div>
    );
}
