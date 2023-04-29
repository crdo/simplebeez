import Head from "next/head"
import { useIntl, FormattedMessage } from "react-intl"

import { GA_TRACKING_ID } from "../data/gtag"
import Header from "../components/header"
import Hero from "../components/hero"
import Services from "../components/services"
import Footer from "../components/footer"
import About from "../components/about"
import { TabProvider } from "../context/tabContext"
import OneStream from "../components/onestream"
import ClientCarousel from "../components/client-carousel"
import EntryModal from "../components/entryModal"

const Home = () => {
	const intl = useIntl()
	return (
		<>
			<Head>
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}');
                        `,
					}}
				/>
				<title>
					SIMPLEBEEZ -{" "}
					{intl.formatMessage({
						id: "common:title",
						defaultMessage: "Your partner for finance transformation",
					})}
				</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
					key="viewport"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<EntryModal/>
			<TabProvider>
				<Header />
				<Hero />
				<OneStream />
				<Services />
				<About />
				<ClientCarousel />
				<Footer />
			</TabProvider>
			<style global jsx>{`
				:root {
					--primary: #f4ae9c;
				}
				.triangle {
					position: relative;
				}
				li.triangle:not(:last-child) {
					margin-bottom: 20px;
				}
				*:focus {
					outline: none;
				}
				.carousel .control-dots {
					padding: 0;
					bottom: -5px;
				}
				.carousel .slide {
					padding-left: 20px;
					padding-right: 20px;
					background: transparent;
				}

				.carousel .slide h2 {
					font-size: 20px;
					font-weight: 400;
				}
				@keyframes shadow-pulse {
					0% {
						box-shadow: 0 0 0 0px rgba(244, 174, 156, 0.25);
					}
					100% {
						box-shadow: 0 0 0 35px rgba(244, 174, 156, 0);
					}
				}
				header .button a {
					animation: shadow-pulse 1s infinite;
				}

				h1 .triangle:after {
					content: "";
					position: absolute;
					display: block;
					right: -25px;
					top: 15px;
					border-left: 8px solid transparent;
					border-right: 8px solid transparent;
					border-top: 13px solid #f4ae9c;
				}

				@media only screen and (min-width: 768px) {
					h1 .triangle:after {
						right: -30px;
						top: 20px;
						border-left: 10px solid transparent;
						border-right: 10px solid transparent;
						border-top: 17px solid #f4ae9c;
					}
				}
				@media only screen and (min-width: 1025px) {
					h1 .triangle:after {
						right: -30px;
						top: 23px;
						border-left: 10px solid transparent;
						border-right: 10px solid transparent;
						border-top: 17px solid #f4ae9c;
					}
				}
				@media only screen and (min-width: 1300px) {
					h1 .triangle:after {
						right: -55px;
						top: 35px;
						border-left: 20px solid transparent;
						border-right: 20px solid transparent;
						border-top: 32px solid #f4ae9c;
					}
				}
				.slick-slide img {
					margin: auto;
				}

				.ReactModal__Content {
					max-width: 75vw;
				}
				.ReactModal__Overlay {
					z-index: 1000;
				}
			`}</style>
		</>
	)
}

export default Home
