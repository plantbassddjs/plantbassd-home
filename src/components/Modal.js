import {Button, Modal} from 'react-bootstrap'
import {Link } from "react-router-dom";


export default function ArtistModal ({artist, onClick, onHide}) {

    var playlist = 'https://open.spotify.com/playlist/5skAgzUfGmZLwrOPNLnGVf?si=ca0f5ffdba8e4868'

    return (
        <div>
            <Modal 
                size="lg" 
                show={artist.show} 
                centered 
                onHide={() => onHide()}
            >

                <Modal.Header closeButton>
                    <Modal.Title>
                        {artist.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="modalArtistDescription">
                    {artist.description}

                </Modal.Body>

                <div className="modalLinks">
                    Spotify Playlist: <Link to={playlist}>{playlist}</Link> 🌿
                </div>
                
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={() => onClick()}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}