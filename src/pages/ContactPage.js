import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import bgPic from "../assets/images/blueboys.jpg";

export default function ContactPage() {
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

			<h1 className="paddingX-1 contactPage-7">Get In Touch!</h1>
		</>
	);
}
