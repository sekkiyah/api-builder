import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CompanyView, Home } from './pages';
import { getAllCompanies } from './api';

const App = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    setCompanies(await getAllCompanies());
  };

  const refresh = async () => {
    await fetchCompanies();
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <Container>
        <Routes>
          <Route path='/' element={<Home companies={companies} navigate={navigate} refresh={refresh} />} />
          <Route path='/company/:companyId' element={<CompanyView navigate={navigate} refresh={refresh} />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
