import React from 'react';
import { CompanyTable } from '../components';

const Home = ({ companies }) => {
  return (
    <>
      <h2 className='text-center mt-3'>Homepage</h2>
      <CompanyTable companies={companies} />
    </>
  );
};

export default Home;
