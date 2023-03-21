import React, { useEffect, useState } from 'react';
import { Accordion, Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getCompanyById } from '../api';

const CompanyView = ({ navigate }) => {
  const { companyId } = useParams();
  const [company, setCompany] = useState({});

  const fetchCompany = async id => {
    const result = await getCompanyById(id);
    if (result) {
      setCompany(result);
    }
  };

  const handleSubmit = async () => {};

  useEffect(() => {
    fetchCompany(companyId);
  }, []);

  return (
    <>
      <h2 className='text-center my-3'>Company API</h2>
      {company && Object.values(company) != null ? (
        <Form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}>
          <Form.Group as={Row}>
            <Col sm='6' className='p-0'>
              <FloatingLabel label='affid'>
                <Form.Control id='affid' placeholder='affid' plaintext disabled defaultValue={company.affid} />
              </FloatingLabel>
            </Col>
            <Col sm='6' className='p-0'>
              <FloatingLabel label='Company Name'>
                <Form.Control
                  id='companyName'
                  placeholder='companyName'
                  plaintext
                  disabled
                  defaultValue={company.companyName}
                />
              </FloatingLabel>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col className='p-0'>
              <FloatingLabel label='API Key'>
                <Form.Control id='apiKey' placeholder='apiKey' plaintext disabled defaultValue={company.apiKey} />
              </FloatingLabel>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Accordion flush className='mt-3' defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>API Body</Accordion.Header>
                <Accordion.Body>
                  <h5>Fields to build out</h5>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Form.Group>

          <Form.Group className='mt-3 d-flex justify-content-end'>
            <Button variant='success' className='mx-2'>
              Save
            </Button>
            <Button variant='secondary' onClick={() => navigate('/')}>
              Return
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <></>
      )}
    </>
  );
};

export default CompanyView;
