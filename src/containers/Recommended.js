import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import RecCard from '../components/RecCard'


const Recommended = (props) => {

    let artistNames = props.artists.map(artist => artist.name)

    let recommendedEvents = []
    artistNames.forEach(artist => {props.concerts.forEach(concert => {
        if (concert.name.includes(artist)) recommendedEvents.push(concert)
        })
    })

    const renderRecommended = () => {
        return recommendedEvents.map( concert => {
            return <RecCard concert={concert}/>
        })
    }


    return(
        <div>
            {renderRecommended()}
        </div>
    )
}

export default Recommended;