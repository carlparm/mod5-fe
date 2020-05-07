import React from 'react';


class Login extends React.Component {

    render() {
        return(
                <div className='test'>
                    <h1>Welcome to ConcertFinder</h1>
                    <a href='http://localhost:8888/'>
                    <button className='button3'>Please login with Spotify</button>
                    </a>
                </div>

        )
    }
}

export default Login;
