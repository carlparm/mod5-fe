import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import ConcertCard from '../components/ConcertCard'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

class ArtistContainer extends React.Component {

    // rednerArtists = () => {
    //     return props.artists.map( concert => {
    //         return <ConcertCard concert={concert} key={concert.id} />
    //     })      
    // }

    render() {
        return(
            <Fragment>
                <Container>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <CardColumns>
                        {/* {rednerArtists()} */}
                    </CardColumns>
                </Container>
            </Fragment>
        )
    }
}

export default ArtistContainer;