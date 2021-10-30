import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import ArtistModal from "../components/Modal.js";

import "../css/takeover.scss";

import takeovers from "../assets/lists/takeovers.json";

export default function TakeoverPage() {
	const [artistInfo, setArtist] = useState({
		name: "",
		page: "",
		post: "",
		description: "",
		show: false,
	});

	const handleClose = () => setArtist({ show: false });
	const handleShow = (artist) => {
		setArtist({
			name: artist.name,
			page: artist.page,
			post: artist.post,
			description: artist.description,
			show: true,
		});
	};

	return (
		<div className="toDiv-5">
			<Container>
				<div className="toFrame-5 d-flex justify-content-center align-items-center">
					<iframe
						title="Plant Bass'd DJs Spotify Playlist"
						src="https://open.spotify.com/embed/playlist/5skAgzUfGmZLwrOPNLnGVf"
						width="80%"
						height="360"
						frameBorder="0"
						allowtransparency="true"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				</div>

				<h1 className="offWhite-1 toHeader-5">
					Plant Bass&apos;d Takeovers
				</h1>

				<p className="offWhite-1 toText-5">
					In 2020, we started to invite upcoming artists, friends, and
					exciting talents onto the page to share their top 10 tunes
					that they wanted to play once they returned to the clubs.
				</p>

				<Row className="g-3 toGrid-5">
					{takeovers.map((artist, index) => (
						<Col key={index} xl={4} lg={6} md={6} xs={12}>
							<Card
								className="cardPage-5 mx-auto"
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
			</Container>

			<ArtistModal
				artist={artistInfo}
				onClick={handleClose}
				onHide={handleClose}
			/>
		</div>
	);
}
