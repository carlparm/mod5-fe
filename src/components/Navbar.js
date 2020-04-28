
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

const header = (props) => {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3001/concerts/">Concerts</Nav.Link>
                    <Nav.Link href="#features">Artists</Nav.Link>
                    <Nav.Link href="#pricing">My Concerts</Nav.Link>
                    <Nav.Link href="#pricing">Profile</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
}

export default header;