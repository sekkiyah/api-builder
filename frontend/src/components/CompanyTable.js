import React from 'react';
import { Button, Table } from 'react-bootstrap';

const CompanyTable = ({ companies, navigate }) => {
  return (
    <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>API Name</th>
          <th>Affid</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        {companies &&
          companies.map(company => {
            return (
              <tr key={company.id} id='companyRow' onClick={() => navigate(`/company/${company.id}`)}>
                {/* <td>{company.id}</td> */}
                <td>{company.apiName}</td>
                <td>{company.affid}</td>
                <td>{company.companyName}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default CompanyTable;
