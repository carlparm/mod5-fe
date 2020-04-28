import React from 'react';
import {Route} from 'react-router-dom' // switch
import Navigation from '../components/Navbar';
import SpotifyWebApi from 'spotify-web-api-js';
import ConcertContainer from './ConcertContainer'


var spotifyApi = new SpotifyWebApi();

class Home extends React.Component {


    constructor() {
        super();
        const params = this.getHashParams()
        if (params.access_token) {
          spotifyApi.setAccessToken(params.access_token);
        }
        this.state = {
          access_token: params.access_token,
          loggedIn: params.access_token ? true : false,
          user: {},
          concerts: []
        };
    }
    
    componentDidMount() {
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=409&apikey=ELQg9rpqGEQFKn7YGMShUbWcqtjTLAB9')
            .then(resp => resp.json())
            .then(concerts => this.setState({concerts: concerts._embedded.events}))
        let payload = {user: {'name': this.props.user.display_name, 'spotify_id': this.props.user.id}}
        console.log(payload)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(resp => resp.json())
        .then(user => console.log(user))
    }

    //   componentDidMount() {
    //     let payload = {'name': this.props.user.display_name, 'spotify_id': this.props.user.id}
    //     fetch('http://localhost:3000/users', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(payload)
    //     }).then(resp => resp.json())
    //     .then(user => console.log(user))
    //   }

      getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }

    render() {
        return(
            <div>
                <Navigation accessToken={this.props.accessToken}/>
                {/* <Route path='/concerts' redner={() => <ConcertContainer concerts={this.state.concerts}/>} /> */}
                <ConcertContainer concerts={this.state.concerts}/>
            </div>
        )
    }
}

export default Home;