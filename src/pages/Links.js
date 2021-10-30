import logo from "../assets/images/logo_circle.png";
import "../css/links.scss";
import { Button, Col, Container, Row } from "react-bootstrap";

import { ReactComponent as Instagram } from "../assets/images/instagram.svg";
import { ReactComponent as Gmail } from "../assets/images/gmail.svg";
import { ReactComponent as Soundcloud } from "../assets/images/soundcloud.svg";
import { ReactComponent as Spotify } from "../assets/images/spotify.svg";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";

import linktree from "../assets/lists/linktree.json";

const Icons = () => (
	<Row>
		<Icon
			SocialMedia={<Facebook className="socialIcon" />}
			link="https://www.facebook.com/plantbassddjs"
		/>
		<Icon
			SocialMedia={<Instagram className="socialIcon" />}
			link="https://www.instagram.com/plantbassddjs/"
		/>
		<Icon
			SocialMedia={<Gmail className="socialIcon" />}
			link="mailto: plantbassddjs@gmail.com"
		/>
		<Icon
			SocialMedia={<Spotify className="socialIcon" />}
			link="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf"
		/>
		<Icon
			SocialMedia={<Soundcloud className="socialIcon" />}
			link="https://soundcloud.com/plantbassddjs"
		/>
	</Row>
);

const Icon = ({ SocialMedia, link }) => (
	<Col className="d-flex justify-content-center">
		<a href={link}>{SocialMedia}</a>
	</Col>
);

export default function Links() {
	return (
		<div className="linkPage">
			<Container className="pushSides">
				<Row>
					<Col className="d-flex justify-content-center">
						<img
							src={logo}
							className="logo"
							alt="plant bass'd logo"
						/>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center">
						<h1>Plant Bass'd DJs</h1>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center">
						<p>
							DJ/ Party Collective and dance music blog based in
							Edinburgh and Dublin 🇮🇪 x 🏴󠁧󠁢󠁳󠁣󠁴󠁿.
						</p>
					</Col>
				</Row>

				<Icons />

				{linktree.map((item, index) => (
					<Row className="buttonStyle">
						<Button
							href={item.link}
							size="lg"
							variant="outline-dark"
						>
							{item.title}
						</Button>
					</Row>
				))}
			</Container>
		</div>
	);
}
