import artists from '../assets/artists.json';
import {Col, Card, Row} from 'react-bootstrap'
import ArtistModal from '../components/Modal.js';
import { useState } from 'react';

export default function TakeoverPage () {

    const [artistInfo, setArtist] = useState({
        'name': '',
        'description': '',
        'show': false,
    });

    const handleShow = artist => () => {

        setArtist({
            'name': artist.name,
            'description': artist.description,
            'show': true,
        })
    }
    const handleClose = () => setArtist({'show': false});

    return (
        <div className="takeoverDiv">

            <h1 className="takeoverHeader">
                Plant Bass'd Takeovers
            </h1>

            <p className="takeoverText"> 
                In 2020/2021, we invited upcoming artists, friends, and exciting talents 
                onto the page to share their top 10 tunes that they wanted to play once
                they returned to the clubs.
            </p>

            <Row>
                {artists.map((artist, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
                        <Card
                            className="takeoverCardStyle cardHover"
                            onClick={handleShow(artist)}>

                            <Card.Img 
                                variant="top" 
                                src={'/artists/' + artist.image + '.jpg'}
                                className="cardImage"
                                alt={artist.name}/>

                            <Card.Body>
                                {index+1}. {artist.name}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <ArtistModal 
                artist={artistInfo}
                onClick={handleClose}
                onHide={handleClose}
            />
        </div>
    )
}