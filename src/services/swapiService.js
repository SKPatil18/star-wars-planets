const fetchPlanets = async (page = 1) => {
    const response = await fetch(`https://swapi.dev/api/planets/?page=${page}&format=json`);
    const data = await response.json();
    return data;
  };
  
  const fetchResident = async (residentUrl) => {
    const response = await fetch(residentUrl);
    const data = await response.json();
    return data;
  };
  
  export { fetchPlanets, fetchResident };
  