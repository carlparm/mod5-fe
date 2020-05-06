import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import MyConcertCard from '../components/MyConcertCard';
import MyArtistCard from '../components/MyArtistCard'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import Avatar from '@material-ui/core/Avatar';

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

        {/* <MyProfile /> */}
        

        <Tabs defaultActiveKey="concerts" transition={false} id="noanim-tab-example">
            <Tab eventKey="concerts" title="Concerts">
                <p></p>
                <Container>
                    <CardColumns>
                        {renderEvents()}
                    </CardColumns>
                </Container>
            </Tab>
            <Tab eventKey="artists" title="Artists">
                <p></p>
                <Container>
                    <CardColumns>
                        {renderArtists()}
                    </CardColumns>
                </Container>
            </Tab>
        </Tabs>

        </Fragment>

        // <Fragment>
        //             <div><h1>Your Events</h1></div>
        //             <main className='div1'>{renderEvents()}</main>
        //             <h1>Your Artists</h1>
        //             {renderArtists()}
        // </Fragment>
    )
}


export default Profile;