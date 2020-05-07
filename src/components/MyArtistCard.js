import React, { Fragment } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const MyArtistCard = (props) => {


    const deleteFollow = () => {
        props.deleteArtist(props.artist)
        let payload = {user: {'id': props.user.id}, artist: {'id': props.artist.id}}
        fetch(`http://localhost:3000/user_artists/${props.artist.id}`, {
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
            <Card.Img variant="top" src={props.artist?.img_url} style={{width: 286, height: 286, alignSelf: "center"}}/>
                <Card.Body>
                    <Card.Title>{props.artist.name}</Card.Title>
                    <Card.Text>
                        <div>Genre: {props.artist.genres}</div> 
                        <div>Popularity: {props.artist.popularity}</div>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> <button onClick={deleteFollow} className='button'>Unfollow Artist</button></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={props.artist.spotify_uri} target="_blank">View in Spotify</Card.Link>
                    <Card.Link href={`https://www.google.com/search?q=${props.artist.name.split(' ').join('+')}`}  target="_blank">Google Artist</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyArtistCard;