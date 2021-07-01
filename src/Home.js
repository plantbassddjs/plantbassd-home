import React from 'react';
import Iframe from 'react-iframe';
import guys from './assets/img/guys.jpg';

function Home() {
    return (
        <div className="container">
            <div className="mt-5 text-center">
                <p>DJ/ Party Collective and dance music blog based in Monaghan via Dublin and Edinburgh. Nothin’ But Organic Beats 🌿</p>
                <p>Enquiries: plantbassddjs@gmail.com</p>

                <div className="img-container">
                        <img src={guys} className="image-guys" alt="the 3 PB DJs"/>
                        <div className="overlay">
                            <a href="https://www.instagram.com/plantbassddjs/">
                                <div className="text-overlay">Check Out Our Instagram</div>
                            </a>
                        </div>
                </div>
            </div>

            <h4 className="text-center pt-3">Regularly Updated Selects from our 3 DJs.</h4>
            <div className="d-flex justify-content-center pb-2">
                <Iframe url="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf"
                    className="spotify"
                    width="640" height="380"
                    title="Spotify playlist"
                    allowfullscreen
                    allow="encrypted-media" />
            </div>
        </div>
    );
}

export default Home;
