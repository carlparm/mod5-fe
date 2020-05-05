import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const MyConcertCard = (props) => {


    const deleteFollow = () => {
        console.log(props)
        let payload = {user: {'id': props.userBackend.id}, event: {'id': props.concert.id}}
        fetch('http://localhost:3000/userevents', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"                
            },
            body: JSON.stringify(payload)
        })
    }

    return(
        <div>
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.concert.img_url} />
                <Card.Body>
                    <Card.Title>{props.concert.name}</Card.Title>
                    <Card.Text>
                        {/* Extra info if needed */}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>When: {props.concert.date} </ListGroupItem>
                    <ListGroupItem>Location: {props.concert.location}</ListGroupItem>
                    <ListGroupItem>
                        <Button onClick={deleteFollow}>Add to follow list</Button>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={props.concert.url} target="_blank">Concert Website</Card.Link>
                    <Card.Link href={`https://www.google.com/maps/search/?api=1&query=${props.concert.google_key}`}  target="_blank">View on Map</Card.Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default MyConcertCard;
