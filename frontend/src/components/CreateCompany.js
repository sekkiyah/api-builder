import React, { useState } from 'react';
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { createCompany } from '../api';

const CreateCompany = ({ navigate, refresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [affid, setAffid] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = async () => {
    const company = {
      affid,
      companyName,
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
      <Button onClick={() => setShowModal(true)}>Create Company</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop='static'>
        <Modal.Header>Create Company</Modal.Header>
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
