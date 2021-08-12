import {Card} from 'react-bootstrap'
import {Link } from "react-router-dom";


export default function ArtistCard ({artist}) {

    var description = artist.description.split("\n");
    description = description.slice(3,4)

    var id = artist.image.split("_").slice(1);

    return (

        <Link to={`/takeover/${id}`} className="linkStyler">
            <Card
                style={{ cursor: "pointer" }}
                className="cardStyle">

                <Card.Img 
                    variant="top" 
                    src={'/artists/' + artist.image + '.jpg'}
                    className="img-fluid"
                    alt={artist.name}/>

                <Card.Body>
                    <Card.Title>{artist.name}</Card.Title>
                    <Card.Text className="cardTextEdit">
                        {description}
                    </Card.Text>
                </Card.Body>

            </Card>
        </Link>
    );
}