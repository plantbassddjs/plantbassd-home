import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ArtistModal from "./Modal.js";

import "../css/cards.scss";

import takeovers from "../assets/lists/takeovers.json";
const numTakeovers = takeovers.length;
const takeoverArtists = takeovers
	.slice(numTakeovers - 3, numTakeovers)
	.reverse();

export default function Takeover() {
	const [artistInfo, setArtist] = useState({
		name: "",
		description: "",
		show: false,
	});

	const handleClose = () => setArtist({ show: false });
	const handleShow = (artist) => {
		setArtist({
			name: artist.name,
			description: artist.description,
			show: true,
		});
	};

	return (
		<>
			<h1 className="offWhite-1 toHeader-3">
				Plant Bass&apos;d Takeovers
			</h1>
			<Container>
				<Row xs={1} md={1}>
					{takeoverArtists.map((artist, index) => (
						<Col key={index} lg={true} className="py-2">
							<Card
								className="cardStyle-4 mx-auto"
								onClick={() => handleShow(artist)}
							>
								<Card.Img
									variant="top"
									src={"/takeovers/" + artist.image + ".jpg"}
									alt={artist.name}
								/>
							</Card>
						</Col>
					))}
				</Row>

				<Row>
					<Col>
						<div className="d-flex flex-column align-items-center bottomBtn-3">
							<Link to="/takeovers">
								<Button size="lg" variant="outline-light">
									Read More 🛸
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>

			<ArtistModal
				artist={artistInfo}
				onClick={handleClose}
				onHide={handleClose}
			/>
		</>
	);
}
