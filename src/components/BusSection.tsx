import { useState, useEffect } from 'react';
import BusCard from './BusCard/BusCard';
import './BusSection.css';

interface Bus {
    id: number;
    numeroBus: string;
    placa: string;
    fechaCreacion: string;
    caracteristicas: string;
    marca: string;
    estado: boolean;
}

export default function BusSection() {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [page, setPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);

    const fetchBuses = (page: number) => {
        fetch(`http://localhost:8080/buses?page=${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('error');
                }
                return response.json();
            })
            .then(data => {
                setBuses(data.content);
                setTotalPages(data.totalPages);
            })
            .catch(error => {
                console.error('error-', error);
            });
    };

    useEffect(() => {
        fetchBuses(page);
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 0) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="busSection">
                <div className="busCards">
                    {buses.map(bus => (
                        <BusCard key={bus.id} bus={bus} />
                    ))}
                </div>
    
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 0}>
                    Previous
                </button>
                <span>{`Page ${page + 1} of ${totalPages}`}</span>
                <button onClick={handleNextPage} disabled={page === totalPages - 1}>
                    Next
                </button>
            </div>
        </div>
    );    
}
