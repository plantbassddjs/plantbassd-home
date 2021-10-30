import { Container, Col, Row } from "react-bootstrap";
import "../css/footer.scss";

import { ReactComponent as Instagram } from "../assets/images/instagram.svg";
import { ReactComponent as Gmail } from "../assets/images/gmail.svg";
import { ReactComponent as Soundcloud } from "../assets/images/soundcloud.svg";
import { ReactComponent as Spotify } from "../assets/images/spotify.svg";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";

const Icon = ({ SocialMedia, link }) => (
	<Col className="d-flex justify-content-center">
		<a href={link}>{SocialMedia}</a>
	</Col>
);

export default function FooterComponent() {
	return (
		<div className="footerBG">
			<Container className="footerSpace">
				<Row>
					<Icon
						SocialMedia={<Facebook className="icon" />}
						link="https://www.facebook.com/plantbassddjs"
					/>
					<Icon
						SocialMedia={<Instagram className="icon" />}
						link="https://www.instagram.com/plantbassddjs/"
					/>
					<Icon
						SocialMedia={<Gmail className="icon" />}
						link="mailto: plantbassddjs@gmail.com"
					/>
					<Icon
						SocialMedia={<Spotify className="icon" />}
						link="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf"
					/>
					<Icon
						SocialMedia={<Soundcloud className="icon" />}
						link="https://soundcloud.com/plantbassddjs"
					/>

					<Col
						lg={8}
						md={12}
						sm={12}
						className="d-flex justify-content-end align-items-center yearText"
					>
						{"© "} {new Date().getFullYear()}{" "}
						{" Copyright: Plant Bass'd DJs"}
					</Col>
				</Row>
			</Container>
		</div>
	);
}
