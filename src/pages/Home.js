import artists from '../assets/artists.json';
import Card from '../components/CardPreview.js';
import {Button, Col, Row} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

var numArtists = artists.length;
var previewArtists = artists.slice(numArtists - 4, numArtists).reverse();

export default function HomePage () {

    const history = useHistory();  
    function handleClick(path) {
        history.push(path);
      }

    return (
        <>
            <div className="homeSection1">
                <div className="hs1Style">
                    <h1 className="hs1Header">
                        DJ / Party Collective and dance music blog based in Monaghan via Dublin
                        and Edinburgh...
                    </h1>
                    <h1>
                        Nothin' But Organic Beats 🌿
                    </h1>
                </div>
            </div>

            <div className="homeSection2">

                    <h1 className="hs2Header">Plant Bass'd Takeovers</h1>
                
                    <Row>
                        {previewArtists.map((a, index) => (
                            <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={3}>
                                <Card artist={a} />
                            </Col>
                        ))}
                    </Row>

                <Button
                    onClick={() => handleClick("takeovers")}
                    className="btnColor btnStyle">
                    SEE ALL PLANT BASS'D TAKEOVERS
                </Button>
            </div>

            

            <div className="homeSection3"></div>
        </>
    );
}