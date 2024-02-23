import React, { useState, useEffect } from 'react';
import ResidentList from './ResidentList';
import { fetchResident } from '../services/swapiService';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidentsData = async () => {
      const residentsData = await Promise.all(planet.residents.map(fetchResident));
      setResidents(residentsData);
    };

    fetchResidentsData();
  }, [planet.residents]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <ResidentList residents={residents} />
    </div>
  );
};

export default PlanetCard;
