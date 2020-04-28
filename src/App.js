import React from 'react';
import './App.css';
import {Route} from 'react-router-dom' // switch
import Login from './components/Login'
import Home from './containers/Home'
import SpotifyWebApi from 'spotify-web-api-js';



var spotifyApi = new SpotifyWebApi();


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      access_token: '',
      loggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    const params = this.getHashParams()
    spotifyApi.setAccessToken(params.access_token);
    spotifyApi.getMe().then(data => this.setState({user: data}, () => 
      {
        if (params.access_token) {
          this.setState({loggedIn: true})
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


  render() {
    return (
    <div className="App">
      {this.state.loggedIn ? <Home user={this.state.user} accessToken={this.state.access_token}/> : <Login />}
    </div>
    );
  }
}


export default App;
