import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const RecCard = (props) => {

    const addFollow = () => {
        console.log(props)
        let payload = {user: {'id': props.userBackend.id}, event: {'name': props.concert.name, 'img_url': props.concert.images[0].url, 'date': props.concert.dates.start.localDate, 'location': props.concert._embedded.venues[0].name, 'ticketmaster_id': props.concert.id, 'google_key': props.concert._embedded.venues[0].name.split(' ').join('+'), 'url': props.concert.url}}
        fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"                
            },
            body: JSON.stringify(payload)
        })
    }


    return(
        <div class='rec-card'>
            <Card className="text-center">
                <Card.Header>{props.concert.name}</Card.Header>
                <Card.Body>
                    <Card.Title>When: {props.concert.dates.start.localDate}</Card.Title>
                    <Card.Text>
                        Location: {props.concert._embedded.venues[0].name}
                    </Card.Text>
                    <Button onClick={addFollow}>Add to follow list</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RecCard;