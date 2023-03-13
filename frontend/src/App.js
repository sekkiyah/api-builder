import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages';
import { getAllCompanies } from './api';

const App = () => {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const result = await getAllCompanies();
    console.log(result);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
