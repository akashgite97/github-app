import React, { useState, useEffect } from 'react';
import { Row, Container, Col } from 'reactstrap';
import Axios from 'axios';
import { toast } from 'react-toastify';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import IssueHeader from './IssueHeader';

const Issues = () => {
  const [issues, setIssues] = useState([]);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(
        `https://api.github.com/repos/microsoft/typescript/issues`
      );
      setIssues(data);
      console.log({ data });
    } catch (eror) {
      toast('No issues found', { type: 'error' });
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <Container>
      <Row className=' mt-3'>
        <IssueHeader />
        <Col md='12 mx-auto'>
          {issues.map((issue) => (
            <ListGroupItem key={issue.id}>
              <p className=''>
                <span className='text-primary mr-2'>#{issue.id}</span>
                {issue.title}
              </p>
            </ListGroupItem>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Issues;
