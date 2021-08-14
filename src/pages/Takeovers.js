import artists from '../assets/artists.json';
import Card from '../components/Card.js';
import {Col, Row} from 'react-bootstrap'

export default function TakeoverPage () {

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
                {artists.map((a, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
                        <Card artist={a} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}