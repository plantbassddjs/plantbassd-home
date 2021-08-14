import artists from '../assets/artists.json';
import Card from '../components/CardPreview.js';
import {Button, Col, Row} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import Iframe from 'react-iframe'

var numArtists = artists.length;
var previewArtists = artists.slice(numArtists - 4, numArtists).reverse();

export default function HomePage () {

    const history = useHistory();  
    function handleClick(path) {
        history.push(path);
    }

    return (
        <>
            <div className="homeSections backgroundBlue">
                <div className="hs1Style offWhite">
                    <h1 className="hs1Header">
                        DJ / Party Collective and dance music blog based in Monaghan via Dublin
                        and Edinburgh...
                    </h1>
                    <h1>
                        Nothin' But Organic Beats 🌿
                    </h1>
                </div>
            </div>

            <div className="homeSections backgroundWhite">
                <h1 className="hsHeader offGrey">
                    PB Mixes
                </h1>

                <div className="iframeDiv">

                    <Iframe 
                        url="http://www.youtube.com/embed/xDMP3i36naA"
                        position="relative"
                        scrolling="no" frameborder="no" allow="autoplay" 
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1291309252%3Fsecret_token%3Ds-eWGod3gYIh2&color=%23c7a97e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" 
                    />

                    <div className="soundcloudDiv">
                        <a href="https://soundcloud.com/plantbassddjs" title="Plant Bass'd DJs" target="_blank" className="soundcloudAnchor">
                            Plant Bass'd DJs
                        </a> · 
                        <a href="https://soundcloud.com/plantbassddjs/sets/pbd-mixes/s-eWGod3gYIh2" title="PBD Mixes" target="_blank" className="soundcloudAnchor">
                            PBD Mixes
                        </a>
                    </div>
                </div>
            </div>

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

                <div className="btnHolder">
                    <Button
                        onClick={() => handleClick("takeovers")}
                        className="offWhite btnBG btnStyle">
                        SEE ALL PLANT BASS'D TAKEOVERS
                    </Button>
                </div>
            </div>
        </>
    );
}