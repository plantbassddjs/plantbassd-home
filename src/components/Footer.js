import {ListGroup} from 'react-bootstrap';

export default function FooterComponent () {
    return (
        <>
            <ListGroup variant="flush" className="text-center footerColors">
                <ListGroup.Item 
                    action
                    href="https://www.instagram.com/plantbassddjs/">
                    <em className="fab fa-instagram"></em> Instagram 
                </ListGroup.Item>
                <ListGroup.Item 
                    action
                    href="mailto: plantbassddjs@gmail.com">
                    <em className="far fa-envelope"></em> Email Us
                </ListGroup.Item>
                <ListGroup.Item 
                    action
                    href="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf">
                    <em className="fab fa-spotify"></em> Spotify
                </ListGroup.Item>
                <ListGroup.Item 
                    action
                    href="https://soundcloud.com/plantbassddjs">
                    <em className="fab fa-soundcloud"></em> Soundcloud
                </ListGroup.Item>
            </ListGroup>

            <div className="text-center py-3">
            {'© '} {new Date().getFullYear()} {" Copyright: Plant Bass'd DJs"}
            </div>
        </>
    )
}