import React from 'react';

function Footer() {
    return (
        <div className="container-fluid bg-black"> 
            <div className="row justify-content-md-center pt-4">

            <div className="col-md-auto footer-color">
                    <h4 className="text-uppercase">Plant Bass`d DJs</h4>
                    <p>- Oisin, Michael, and Peter.</p>
                </div>

            <div className="col-md-6">
                <div className="text-center">
                    <a href="#"><i class="fa fa-angle-up cb-circle footer-color"></i></a>
                </div>

                <div className="col align-self-end copyright-footer text-center pr-4">
                    © 2021 Copyright: Plant Bass`d DJs
                </div>
            </div>

                <div className="col-md-auto footer-color">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href="https://www.instagram.com/plantbassddjs/">
                            <em className="fab fa-instagram"></em> Instagram</a>
                        </li>
                        <li className="list-inline-item"><a href="mailto: plantbassddjs@gmail.com">
                            <em className="far fa-envelope"></em> Email Us</a>
                        </li>
                        <li className="list-inline-item"><a href="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf">
                            <em className="fab fa-spotify"></em> Spotify</a>
                        </li>
                        <li className="list-inline-item"><a href="https://soundcloud.com/oisin-campbell">
                            <em className="fab fa-soundcloud"></em> Soundcloud</a>
                        </li>
                    </ul>
                </div>
            </div>

            
        </div>
    );
}

export default Footer;
