import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom' // switch
import './App.css';
import Login from './components/Login'
import SpotifyWebApi from 'spotify-web-api-js';
import ConcertContainer from './containers/ConcertContainer';
import Navigation from './components/Navbar';
import ArtistContainer from './containers/ArtistContainer'
import Profile from './containers/Profile'
import Recommended from './containers/Recommended'
import Welcome from  './components/Welcome'

var spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      access_token: '',
      loggedIn: false,
      user: {},
      userBackend: {},
      concerts: [],
      userConcerts: [],
      userArtists: []
    };
  }

  componentDidMount() {
    const params = this.getHashParams()
    spotifyApi.setAccessToken(params.access_token);
    spotifyApi.getMe().then(data => this.setState({user: data}, () => 
      {
        if (params.access_token) {
          this.setState({loggedIn: true, access_token: params.access_token})
          let payload = {user: {'name': this.state.user.display_name, 'spotify_id': this.state.user.id}}
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
      } 
    ))
    
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

  deleteEventFollow = (concert) => {
    let newEvents = this.state.userConcerts.filter( event => event.id !== concert.id)
    this.setState({userConcerts: newEvents})
  }

  deleteArtistFollow = (artist) => {
      let newArtists = this.state.userArtists.filter( artistOld => artistOld.id !== artist.id)
      this.setState({userArtists: newArtists})
    }


  render() {
    return (
    <div className="App">
      <Router>
            <Navigation accessToken={this.state.access_token} userBackend={this.state.userBackend}/>
          <Switch>
            <Route exact path='/' render={() => this.state.loggedIn ? <Welcome/> : <Login />} />
            <Route path='/artists/'  render={() => <ArtistContainer accessToken={this.state.access_token} userBackend={this.state.userBackend}/>} />
            <Route path='/concerts/' render={() => <ConcertContainer concerts={this.state.concerts}  userBackend={this.state.userBackend}/>} />
            <Route path='/profile/' render={() => <Profile concerts={this.state.userConcerts} artists={this.state.userArtists} userBackend={this.state.userBackend} deleteEvent={this.deleteEventFollow} deleteArtist={this.deleteArtistFollow}/>} />
            <Route path='/recommended/' render={() => <Recommended userConcerts={this.state.userConcerts} artists={this.state.userArtists} userBackend={this.state.userBackend} concerts={this.state.concerts}/>} />
        </Switch>
      </Router>
    </div>
    );
  }
}


export default App;
