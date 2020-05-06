import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import ArtistCard from '../components/ArtistCard'
import SpotifyWebApi from 'spotify-web-api-js';


var spotifyApi = new SpotifyWebApi();

class ArtistContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            searchTerm: '',
            artists: []
        }
    }

    
    renderArtists = () => {
        return this.state.artists.map( artist => {
            return <ArtistCard artist={artist} key={artist.id} />
        })      
    }

    searchArtists = (e) => {
        e.preventDefault()
        spotifyApi.setAccessToken(this.props.accessToken);
        spotifyApi.searchArtists(this.state.searchTerm).then(data =>
                this.setState({artists: data.artists.items})
            )
    }

    setSearchTerm = (e) => {
        e.preventDefault()
        this.setState({searchTerm: e.target.value})
    }

    render() {
        return(
            <div className='artist-search'>
                <Container>
                    <form inline onSubmit={this.searchArtists}>
                        <FormControl type="text" placeholder="Find Artists" className="mr-sm-2" value={this.state.searchTerm} onChange={this.setSearchTerm}/>
                        <input type="submit" value="Submit" className={'artistButton'}/>
                    </form>
                    <CardColumns>
                        {this.state.artists ? this.state.artists.map( artist => <ArtistCard artist={artist} key={artist.id}  userBackend={this.props.userBackend}/>) : null}
                    </CardColumns>
                </Container>
            </div>
        )
    }
}

export default ArtistContainer;