import React, { useState, useEffect } from 'react';
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  ButtonDropdown,
  DropdownToggle,
  InputGroupText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-toastify';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import Dropdown from 'reactstrap/lib/Dropdown';

const IssueHeader = () => {
  return (
    <Container>
      <Row className=' mt-3 mb-2 '>
        <Col md='5' className='display-flex '>
          <div>
            <InputGroup className='w-50'>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  Filter <i className='fa fa-angle-down ml-1'></i>
                </InputGroupText>
              </InputGroupAddon>
              <Input type='text' placeholder='is:issue' />
            </InputGroup>
          </div>
        </Col>
        <Col md='7'>
          <Button className='float-right' size-='sm' color='success'>
            New Issue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default IssueHeader;
