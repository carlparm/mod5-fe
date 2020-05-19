import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import ConcertCard from '../components/ConcertCard';

const ConcertContainer = (props) => {

    const rednerConcerts = () => {
        return props.concerts.map( concert => {
            return <ConcertCard concert={concert} key={concert.id} userBackend={props.userBackend}/>
        })      
    }

    return(
        <Fragment>
            <p></p>
            <Container>
                <CardColumns>
                    {rednerConcerts()}
                </CardColumns>
            </Container>
        </Fragment>
    )
}

export default ConcertContainer;