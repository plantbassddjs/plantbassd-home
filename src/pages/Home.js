import Mixes from "../components/Mixes.js";
import Radio from "../components/Radio.js";
import Takeovers from "../components/Takeovers.js";

import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import bgPic from "../assets/images/hoodie.jpg";
import "../css/home.scss";

export default function HomePage() {
	return (
		<>
			<ParallaxProvider>
				<ParallaxBanner
					layers={[
						{
							image: bgPic,
							amount: 0.4,
						},
					]}
					style={{ height: "100vh" }}
				></ParallaxBanner>
			</ParallaxProvider>

			<div className="MixesSection-1 paddingX-1">
				<Mixes />
			</div>

			<div className="backgroundGreen-1 paddingX-1">
				<Takeovers />
			</div>

			<div className="TakeoverSection-1 paddingX-1">
				<Radio />
			</div>
		</>
	);
}
