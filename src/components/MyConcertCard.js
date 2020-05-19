import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const MyConcertCard = (props) => {


    const deleteFollow = () => {
        props.deleteEvent(props.concert)
        let payload = {user: {'id': props.user.id}, event: {'id': props.concert.id}}
        fetch(`http://localhost:3000/user_events/${props.concert.id}`, {
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
            <Card style={{ width: '18rem', height: '34rem'}}>
            <Card.Img variant="top" src={props.concert.img_url} style={{width: "100%", height: "12rem", alignSelf: "center"}}/>
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
                        <button onClick={deleteFollow} className="button">Unfollow Event</button>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body style={{alignItems: "center"}}>
                    <Card.Link href={props.concert.url} target="_blank" style={{margin: "atuo"}}>Concert Website</Card.Link>
                    <Card.Link href={`https://www.google.com/maps/search/?api=1&query=${props.concert.google_key}`}  target="_blank">View on Map</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyConcertCard;
