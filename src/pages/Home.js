import artists from '../assets/artists.json';
import Card from '../components/Card.js';
import {Button, Col, Row} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import ReactPlayer from 'react-player'

var numArtists = artists.length;
var previewArtists = artists.slice(numArtists - 4, numArtists).reverse();

export default function HomePage () {

    const history = useHistory();  
    function handleClick(path) {
        history.push(path);
    }

    return (
        <>

{/* ========================= About Section ============================ */}
            <div className="homeSections backgroundBlue hs1Style">
                <div className="offWhite">
                    <h1 className="hs1Header">
                        DJ / Party Collective and dance music blog based in Monaghan via Dublin
                        and Edinburgh...
                    </h1>
                    <h1>
                        Nothin' But Organic Beats 🌿
                    </h1>

                    <div className="aboutBtnHolder">
                        <Button onClick={() => handleClick("about")}
                            className="offWhite btnBG btnStyle">
                            ABOUT US
                        </Button>
                    </div>
                </div>
            </div>

{/* ========================= Takeover Section ============================ */}
            <div className="homeSectionTakeover backgroundPink">
                <h1 className="hsHeader offWhite">
                    Plant Bass'd Takeovers
                </h1>

                <div className="cardFlexLayout">
                    <Row>
                    {previewArtists.map((a, index) => (
                        <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={3}>
                            <Card artist={a} />
                        </Col>
                    ))}
                    </Row>
                </div>

                <div className="takeoverBtnHolder">
                    <Button onClick={() => handleClick("takeovers")}
                        className="offWhite btnBG btnStyle">
                        SEE ALL PLANT BASS'D TAKEOVERS
                    </Button>
                </div>
            </div>

{/* ========================= Mixes Section ============================ */}
<div className="homeSections backgroundWhite">
                <h1 className="hsHeader offGrey">
                    PB Mixes
                </h1>
            </div>
        </>
    );
}