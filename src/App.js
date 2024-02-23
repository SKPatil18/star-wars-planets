import React, { useState, useEffect } from 'react';
import PlanetCard from './components/PlanetCard';
import Pagination from './components/Pagination';
import { fetchPlanets } from './services/swapiService';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlanets(currentPage);
      setPlanets(data.results);
      setTotalPages(Math.ceil(data.count / 10));
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (action) => {
    if (action === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (action === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="app">
      {planets.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
