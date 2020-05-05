import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom' // switch
import Navigation from '../components/Navbar';
import SpotifyWebApi from 'spotify-web-api-js';
import ConcertContainer from './ConcertContainer'
import ArtistContainer from './ArtistContainer'
import Profile from './Profile'


var spotifyApi = new SpotifyWebApi();

class Home extends React.Component {


    constructor() {
        super();
        const params = this.getHashParams()
        if (params.access_token) {
          spotifyApi.setAccessToken(params.access_token);
        }
        this.state = {
          userBackend: {},
          concerts: [],
          userConcerts: [],
          userArtists: []
        };
    }
    
    componentDidMount() {
        let payload = {user: {'name': this.props.user.display_name, 'spotify_id': this.props.user.id}}

        fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=409&apikey=ELQg9rpqGEQFKn7YGMShUbWcqtjTLAB9')
            .then(resp => resp.json())
            .then(concerts => {
                fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            }).then(resp => resp.json())
            .then(user => {
                this.setState({concerts: concerts._embedded.events, userBackend: user, userConcerts: user.events, userArtists: user.artists})
            })
            })
    }

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
                <Router>
                    <Navigation accessToken={this.props.accessToken}/>
                    <Switch> 
                        <Route path='/artists/'  render={() => <ArtistContainer accessToken={this.props.accessToken} userBackend={this.state.userBackend}/>} />
                        <Route path='/concerts/' render={() => <ConcertContainer concerts={this.state.concerts}  userBackend={this.state.userBackend}/>} />
                        <Route path='/profile/' render={() => <Profile concerts={this.state.userConcerts} artists={this.state.userArtists} userBackend={this.state.userBackend}/>} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Home;