import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import ArtistModal from "../components/Modal.js";

import "../css/radio.scss";

import radios from "../assets/lists/radios.json";

export default function RadioPage() {
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
		<div className="radioColor-6">
			<Container>
				<div className="radioFrame-6 d-flex justify-content-center align-items-center">
					<iframe
						title="Plant Bass'd DJs Soundcloud Playlist"
						width="80%"
						height="360"
						scrolling="no"
						frameborder="no"
						allow="autoplay"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1332230617&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
					></iframe>
				</div>

				<h1 className="offWhite-1 radioHeader-6">Plant Bass'd Radio</h1>

				<p className="offWhite-1 radioText-6 radioGrid-6">
					Check out some guest mixes selected for the Plant Bass'd
					Radio.
				</p>

				<Row className="g-3 radioGrid-6">
					{radios.map((artist, index) => (
						<Col key={index} xl={6} lg={6} md={6} xs={12}>
							<Card
								className="cardPage-5 mx-auto"
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
			</Container>

			<ArtistModal
				artist={artistInfo}
				onClick={handleClose}
				onHide={handleClose}
			/>
		</div>
	);
}
