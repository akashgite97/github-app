import React, { useState, useContext } from 'react';

import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap';

import { UserContext } from '../Context/UserContext';
import firebase from 'firebase/app';
import { toast } from 'react-toastify';

const Forgot = () => {
  const [reset, setReset] = useState('');
  const context = useContext(UserContext);

  const sendResetEmail = () => {
    var emailAddress = reset;
    firebase
      .auth()
      .sendPasswordResetEmail(emailAddress)
      .then((res) => {
        toast('Password sent successfully', { type: 'success' });
      })
      .catch((error) => {
        toast(error.message, {
          typr: error,
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const onSent = (e) => {
    e.preventDefault();
    sendResetEmail();
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={4} className='offset-lg-4 mt-5 text-center'>
          <Card>
            <Form onSubmit={onSent}>
              <CardHeader> Forgot Password</CardHeader>
              <CardBody>
                <FormGroup>
                  Email:
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='provide your email'
                    onChange={(e) => setReset(e.target.value)}
                  />
                </FormGroup>
              </CardBody>
              <Button type='submit' color='primary' className='mb-4 '>
                Send Link
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Forgot;
