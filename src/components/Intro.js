import Carousel from 'react-bootstrap/Carousel';
import {Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function IntroCard() {

    var carousel = [
        {
            "img": "Oisin_Peter",
            "alt": "First slide - first gig"
        },
        {
            "img": "Oisin_Michael_Peter",
            "alt": "Second slide - gigging at a party"
        },
        {
            "img": "Oisin_Peter_Michael",
            "alt": "Third slide - playing in garage"
        }
    ]

    const history = useHistory();  
    function handleClick(path) {
        history.push(path);
    }

    return (
        <>
            <div>
                <div className="overlayer whiteColor">
                    <h1 className="hs1Header bolder">
                        DJ / Party Collective and dance music blog based in Monaghan via Dublin
                        and Edinburgh...
                    </h1>
                    <h1 className="bolder">
                        Nothin' But Organic Beats 🌿
                    </h1>

                    <div className="aboutBtnHolder">
                        <Button onClick={() => handleClick("about")}
                            className="offWhite btnBG btnStyle">
                            CONTACT US
                        </Button>
                    </div>
                </div>
                <Carousel>
                    {carousel.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100 carousel-items"
                                src={"/djs/" + item.img + ".jpg"}
                                alt={item.alt}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div>
                
            </div>
        </>
    )
}