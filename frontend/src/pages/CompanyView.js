import React, { useEffect, useState } from 'react';
import { Accordion, Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BASE_URL, deleteCompany, getCompanyById, updateCompany } from '../api';

const CompanyView = ({ navigate, refresh }) => {
  const { companyId } = useParams();
  const [company, setCompany] = useState({});
  const [apiName, setApiName] = useState('');
  const [apiBody, setApiBody] = useState([]);

  const fetchCompany = async id => {
    const result = await getCompanyById(id);
    if (result) {
      setCompany(result);
      setApiName(result.apiName);
      setApiBody(result.apiBody);
    }
  };

  const handleSubmit = async () => {
    const updatedCompany = company;
    updatedCompany.apiName = apiName;
    updatedCompany.apiBody = apiBody;

    const result = await updateCompany(updatedCompany);

    if (result) {
      alert('Successfully saved');
      await refresh();
      navigate('/');
    } else {
      alert('An error occurred');
    }
  };

  const updateField = async (index, e) => {
    let updatedFields = [...apiBody];
    updatedFields[index][e.target.id] = e.target.value;
    setApiBody(updatedFields);
  };

  const handleDelete = async () => {
    const response = confirm('Are you sure you would like to delete this company?');

    if (response) {
      const result = await deleteCompany(companyId);
      if (result) {
        console.log(result);
        await refresh();
        navigate('/');
      }
    }
  };

  useEffect(() => {
    fetchCompany(companyId);
  }, []);

  return (
    <>
      <h2 className='text-center my-3'>API Builder</h2>
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
            <Col className='p-0'>
              <FloatingLabel label='API Endpoint'>
                <Form.Control
                  id='apiEndpoint'
                  placeholder='apiEndpoint'
                  plaintext
                  disabled
                  defaultValue={BASE_URL + '/companies/' + companyId}
                />
              </FloatingLabel>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col className='p-0'>
              <FloatingLabel label='API Name'>
                <Form.Control
                  id='apiName'
                  placeholder='apiName'
                  defaultValue={company.apiName}
                  onChange={e => setApiName(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Accordion flush className='mt-3 border-bottom px-0' defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header id='apiHeader'>API Body</Accordion.Header>
                <Accordion.Body className='py-1 px-0'>
                  {apiBody && apiBody.length ? (
                    apiBody.map((field, index) => {
                      return (
                        <Form.Group key={index} className='py-2 d-flex'>
                          <Form.Control
                            id='key'
                            placeholder='Key'
                            value={field.key}
                            onChange={e => updateField(index, e)}
                          />

                          <Form.Control
                            className='mx-1'
                            id='value'
                            placeholder='Value'
                            value={field.value}
                            onChange={e => updateField(index, e)}
                          />

                          <Button variant='danger'>x</Button>
                        </Form.Group>
                      );
                    })
                  ) : (
                    <Form.Group>
                      <p className='text-center'>No fields added yet</p>
                    </Form.Group>
                  )}
                  <Form.Group className='d-flex justify-content-end py-2'>
                    <Button variant='success'>+</Button>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Form.Group>

          <Form.Group className='mt-3 px-0 d-flex justify-content-end'>
            <Button type='submit' variant='success' className='mx-2'>
              Save
            </Button>
            <Button variant='secondary' onClick={() => navigate('/')}>
              Return
            </Button>
          </Form.Group>

          <Form.Group className='mt-3 d-flex justify-content-end'>
            <Button variant='danger' onClick={() => handleDelete()}>
              Delete
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
