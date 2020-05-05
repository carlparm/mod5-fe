import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import MyConcertCard from '../components/MyConcertCard';
import MyArtistCard from '../components/MyArtistCard'

const Profile = (props) => {


    const renderEvents = () => {
        return props.concerts.map(event => {
            return <MyConcertCard concert={event} key={event.id} user={props.userBackend} deleteEvent={props.deleteEvent}/>
        })
    }
    const renderArtists = () => {
        return props.artists.map(artist => {
            return <MyArtistCard artist={artist} key={artist.id} user={props.userBackend} deleteArtist={props.deleteArtist}/>
        })
    }

    return(
        <Fragment>
            <Container>
                <CardColumns>
                    <h1>Your Events</h1>
                    {renderEvents()}
                    <h1>Your Artists</h1>
                    {renderArtists()}
                </CardColumns>
            </Container>
        </Fragment>
    )
}


export default Profile;