import {useState} from 'react';
import {Button, Card, Collapse} from 'react-bootstrap'


export default function ArtistCard ({artist}) {

    const [open, setOpen] = useState(false);

    return (
            <Card
                className="takeoverCardStyle cardHover">

                <Card.Img 
                    variant="top" 
                    src={'/artists/' + artist.image + '.jpg'}
                    className="cardImage"
                    alt={artist.name}/>

                <Card.Body>

                        <Button
                            className="btnColor takeoverButton"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open} >
                            {artist.name}
                        </Button>

                        <Collapse in={open}>
                            <Card.Text className="takeoverTextEdit">
                                {artist.description}
                            </Card.Text>
                        </Collapse>
                    
                </Card.Body>
            </Card>
    );
}