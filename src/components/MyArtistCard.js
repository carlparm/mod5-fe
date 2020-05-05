import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const MyArtistCard = (props) => {


    const deleteFollow = () => {
        console.log(props)
        let payload = {user: {'id': props.userBackend.id}, artist: {'name': props.artist.name, 'img_url': props.artist.images[0].url, 'genre': props.artist.genres[0], 'popularity': props.artist.popularity, 'spotify_id': props.artist.id, 'spotify_uri': props.artist.uri}}
        fetch('http://localhost:3000/artists', {
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
            <Card.Img variant="top" src={props.artist?.img_url} />
                <Card.Body>
                    <Card.Title>{props.artist.name}</Card.Title>
                    <Card.Text>
                        <div>Genre: {props.artist.genres}</div> 
                        <div>Popularity: {props.artist.popularity}</div>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <Button onClick={deleteFollow}>Add to follow list</Button></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={props.artist.spotify_uri} target="_blank">View in Sportify</Card.Link>
                    <Card.Link href={`https://www.google.com/search?q=${props.artist.name.split(' ').join('+')}`}  target="_blank">Google Artist</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyArtistCard;