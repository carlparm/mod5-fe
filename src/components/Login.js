import React from 'react';


class Login extends React.Component {

    render() {
        return(
                <div style={{marginTop: 200}}>
                    <h1>Welcome to ConcertFinder</h1>
                    <a href='https://master.d2o09wn1c5pdp4.amplifyapp.com/index.html'>
                    <button className='button3'>Please login with Spotify</button>
                    </a>
                </div>

        )
    }
}

export default Login;
