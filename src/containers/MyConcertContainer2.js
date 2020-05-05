import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import MyConcertCard from '../components/MyConcertCard';

class MyConcertContainer extends React.Component {


        state = {
            events: [],
            id: this.props.userBackend.id
        }


    componentDidUpdate(prevState) {
        if (this.props.userBackend.id && !prevState.events) {
        fetch(`http://localhost:3000/users/${this.props.userBackend.id}`)
            .then(resp => resp.json())
            .then(user => this.setState({events: user.events}))  
        } 
    }  

    renderEvents = () => {
        return this.state.event && this.state.events.map(event => <MyConcertCard concert={event} key={event.id} userBackend={this.props.userBackend} />)
    }

    render() {
    return(
        <Fragment>
            <Container>
                <CardColumns>
                    {this.renderEvents()}
                </CardColumns>
            </Container>
        </Fragment>
    )
    }
}

export default MyConcertContainer;


import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import MyConcertCard from '../components/MyConcertCard';

class MyConcertContainer extends React.Component {


    renderEvents = () => {
        return this.props.userBackend.events.map(event => <MyConcertCard concert={event} key={event.id} userBackend={this.props.userBackend} />)
    }

    render() {
    return(
        <Fragment>
            <Container>
                <CardColumns>
                    {this.renderEvents()}
                </CardColumns>
            </Container>
        </Fragment>
    )
    }
}

export default MyConcertContainer;