import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import ArtistModal from "./Modal.js";
import { Link } from "react-router-dom";
import "../css/mixes.scss";

import radios from "../assets/lists/radios.json";
// const numRadios = radios.length;
const radioArtists = radios.slice(0, 2).reverse();

export default function RadioCard() {
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
			<h1 className="offGrey-1 mixHeader-2">Guest Mixes</h1>
			<Container>
				<Row xs={1} md={1}>
					{radioArtists.map((artist, index) => (
						<Col key={index} lg={true} className="py-2">
							<Card
								className="cardStyle-4 mx-auto"
								onClick={() => handleShow(artist)}
							>
								<Card.Img
									variant="top"
									src={"/radio/" + artist.image + ".png"}
									alt={artist.name}
								/>
							</Card>
						</Col>
					))}
				</Row>

				<Row>
					<Col>
						<div className="d-flex flex-column align-items-center bottomBtn-2">
							<Link to="/radio">
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
