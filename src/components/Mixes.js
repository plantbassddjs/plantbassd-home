import { Button, Col, Container, Image, Row } from "react-bootstrap";

import itsnotradio from "../assets/images/itsnotradio.jpg";
import setradio from "../assets/images/setradio.jpg";
import "../css/home.scss";
import "../css/mixes.scss";

export default function ArtistCard() {
	return (
		<>
			<h1 className="offGrey-1 mixHeader-2">Plant Bass'd Mixes</h1>

			<Container>
				<Row className="align-items-center">
					<Col
						sm={12}
						md={6}
						lg={8}
						className="d-flex justify-content-start"
					>
						<a
							href="https://www.instagram.com/itsnotradio/"
							className="radioImage-2"
						>
							<Image
								src={itsnotradio}
								alt="itsnotradio logo"
								fluid
							/>
						</a>
					</Col>

					<Col sm={12} md={6} lg={4}>
						<div className="d-flex flex-column align-items-start">
							<h1>Club-Ready</h1>
							<h3>Heavy mixes for the club.</h3>
							<p>
								We've broadcasted Techno, Electro, Jungle on
								ITSNOTRADIO, Aurora, and Common Grounds.
							</p>
						</div>

						<div className="phoneMargin-2 d-flex justify-content-start">
							<svg
								width="60"
								height="40"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								></path>
							</svg>

							<Button
								href="https://soundcloud.com/plantbassddjs/sets/club-mixes"
								variant="outline-dark"
							>
								<em className="fab fa-soundcloud"></em>Listen
								Now
							</Button>
						</div>
					</Col>
				</Row>

				<Row className="align-items-center">
					<Col
						xs={{ span: 12, order: 2 }}
						sm={{ span: 12, order: 2 }}
						md={{ span: 6, order: 1 }}
						lg={{ span: 4, order: 1 }}
					>
						<div className="d-flex flex-column align-items-end text-end">
							<h1>Chill-out</h1>
							<h3>Easy listening selections.</h3>
							<p>
								We've broadcasted Disco, Dance, Electronic music
								for late risers on SET Radio.
							</p>
						</div>

						<div className="phoneMargin-2 d-flex justify-content-end">
							<Button
								href="https://soundcloud.com/plantbassddjs/sets/dance-mixes"
								variant="outline-dark"
							>
								<em className="fab fa-soundcloud"></em> Listen
								Now
							</Button>

							<svg
								width="60"
								height="40"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M7 16l-4-4m0 0l4-4m-4 4h18"
								></path>
							</svg>
						</div>
					</Col>

					<Col
						xs={{ span: 12, order: 1 }}
						sm={{ span: 12, order: 1 }}
						md={{ span: 6, order: 2 }}
						lg={{ span: 8, order: 2 }}
						className="d-flex justify-content-end"
					>
						<a
							href="https://www.instagram.com/setsetsetsetsetset/"
							className="radioImage-2"
						>
							<Image src={setradio} alt="set radio logo" fluid />
						</a>
					</Col>
				</Row>

				<Row>
					<Col>
						<div className="d-flex flex-column align-items-center bottomBtn-2">
							<h4>Check out our Soundcloud for more. 🛸</h4>

							<Button
								size="lg"
								href="https://soundcloud.com/plantbassddjs"
								variant="outline-dark"
							>
								<em className="fab fa-soundcloud"></em> Listen
								Now
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}
