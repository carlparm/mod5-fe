import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ConcertCard = (props) => {
    return(
        <div>
            <Card>
                <Card.Header as="h5">{props.concert.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Location: {props.concert._embedded.venues[0].name}</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ConcertCard;