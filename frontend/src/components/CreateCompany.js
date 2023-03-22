import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { createCompany } from '../api';

const CreateCompany = ({ navigate, refresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [affid, setAffid] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [apiName, setApiName] = useState('');

  const handleSubmit = async () => {
    const company = {
      affid,
      companyName,
      apiName,
    };
    const result = await createCompany(company);

    if (result) {
      handleClose();
      refresh();
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setAffid('');
    setCompanyName('');
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Create API</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop='static'>
        <Modal.Header>Create API</Modal.Header>
        <Form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}>
          <Modal.Body>
            <Row>
              <Col className='p-1'>
                <FloatingLabel label='Affid'>
                  <Form.Control required placeholder='affid' onChange={e => setAffid(e.target.value)} />
                </FloatingLabel>
              </Col>
              <Col className='p-1'>
                <FloatingLabel label='Company Name'>
                  <Form.Control required placeholder='companyName' onChange={e => setCompanyName(e.target.value)} />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <FloatingLabel as={Col} className='p-1' label='API Name'>
                <Form.Control required placeholder='apiName' onChange={e => setApiName(e.target.value)} />
              </FloatingLabel>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='success' type='submit'>
              Create
            </Button>
            <Button variant='secondary' onClick={() => handleClose()}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateCompany;
