import {Button, Modal} from 'react-bootstrap'


export default function ArtistModal ({artist, onClick, onHide}) {

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