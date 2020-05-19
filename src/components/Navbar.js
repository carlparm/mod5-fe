
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Avatar from '@material-ui/core/Avatar';


const NavBar = (props) => {


        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>ConcertFinder</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href={`http://localhost:3001/concerts/#access_token=${props.accessToken}`}>Concerts</Nav.Link>
                        <Nav.Link href={`http://localhost:3001/artists/#access_token=${props.accessToken}`}>Artists</Nav.Link>
                        <Nav.Link href={`http://localhost:3001/recommended/#access_token=${props.accessToken}`}>Recommended</Nav.Link>
                        <Nav.Link href={`http://localhost:3001/profile/#access_token=${props.accessToken}`}>Profile</Nav.Link>
                    </Nav>
                   <Form inline>
                        <Avatar src={props.userBackend.img_url}/>
                    </Form>
                </Navbar>
            </div>
        )
}

export default NavBar;