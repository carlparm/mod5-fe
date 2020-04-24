import React from 'react';
import './App.css';
import {Route} from 'react-router-dom' // switch
import Login from './components/Login'
import Home from './containers/Home'
import SpotifyWebApi from 'spotify-web-api-js';


// const spotifyApi = new SpotifyWebApi();
var Spotify = require('spotify-web-api-js');
// var s = new Spotify();
var spotifyApi = new SpotifyWebApi();


class App extends React.Component {
  constructor() {
    super();
    const params = this.getHashParams()
    if (params.access_token) {
      spotifyApi.setAccessToken(params.access_token);
    }
    this.state = {
      access_token: params.access_token,
      loggedIn: params.access_token ? true : false,
      user: {}
    };
  }

  componentDidMount() {
    spotifyApi.getMe().then(
      data => this.setState({user: data}))
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
    return (
    <div className="App">
      <Route exact path="/" > {this.state.loggedIn ? <Home /> : <Login />} </Route>  
    </div>
    );
  }
}


export default App;
