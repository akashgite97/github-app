import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const Header = () => {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='info' light expand='sm'>
      <NavbarBrand to='/' tag={Link} className='text-white'>
        Github APP
      </NavbarBrand>
      {/*  <NavbarText className="text-white">
     {context.user?.email ? context.user.email:" "}
   </NavbarText> */}

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          {context.user ? (
            <>
              <NavItem>
                <NavLink tag={Link} to='/issues' className='text-white  '>
                  Issues
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  onClick={() => {
                    context.setUser(null);
                  }}
                  className='text-white '
                >
                  Logout
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to='/signup' className='text-white '>
                  Sign Up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/signin' className='text-white'>
                  Sign In
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
