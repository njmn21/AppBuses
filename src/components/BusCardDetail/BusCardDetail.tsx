import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BusCardDetail.css';

interface Bus {
    id: number;
    numeroBus: string;
    placa: string;
    marca: string;
    caracteristicas: string;
    estado: boolean;
}

export default function BusCardDetail() {
    const { id } = useParams<{ id: string }>();
    const [bus, setBus] = useState<Bus | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/buses/${id}`)
            .then(response => response.json())
            .then(data => setBus(data));
    }, [id]);

    const click = () => {
        window.history.back();
    }

    return (
        <div className='busDetail'>
            <h2>Bus Number: {bus?.numeroBus}</h2>
            <p><strong>Placa:</strong> {bus?.placa}</p>
            <p><strong>Marca:</strong> {bus?.marca}</p>
            <p><strong>Características:</strong> {bus?.caracteristicas}</p>
            <p><strong>Estado:</strong> {bus?.estado ? "Disponible" : "No disponible"}</p>
            <button onClick={click}>Regresar</button>
        </div>
    );
}
