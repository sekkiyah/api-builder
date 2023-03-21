import React from 'react';
import { CompanyTable, CreateCompany } from '../components';

const Home = ({ companies, navigate, refresh }) => {
  return (
    <>
      <h2 className='text-center mt-3'>Homepage</h2>
      <CompanyTable companies={companies} navigate={navigate} />
      <CreateCompany navigate={navigate} refresh={refresh} />
    </>
  );
};

export default Home;
