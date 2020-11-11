import React from "react"
import Slider from "react-slick"
import { FormattedMessage } from "react-intl"
import Image from "next/image"

const ClientCarousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <ChevronRight />,
		prevArrow: <ChevronLeft />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<div className="card" id="references">
			<div className="container">
				<h1>
					<FormattedMessage
						defaultMessage="References and clients"
						id="common:ourClients"
					/>
				</h1>
				<div className="slider">
					<Slider {...settings}>
						<div>
							<Image
								alt="Zásilkovna"
								src="/clients/zasilkovna.png"
								height="150px"
							/>
						</div>
						<div>
							<Image alt="Rádio Čas" src="/clients/radio-cas" height="150px" />
						</div>
						<div>
							<Image
								alt="Solar Turbines"
								src="/clients/solar-turbines"
								height="150px"
							/>
						</div>
						<div>
							<Image
								alt="Campbells"
								src="/clients/campbells.png"
								height="150px"
							/>
						</div>
						<div>
							<Image
								alt="Rádio Relax"
								src="/clients/radio-relax"
								height="150px"
							/>
						</div>
						<div>
							<Image alt="CME" src="/clients/cme.jpg" height="150px" />
						</div>
						<div>
							<Image
								alt="Bolthouse Farms"
								src="/clients/bolthouse-farms"
								height="150px"
							/>
						</div>
						<div>
							<Image
								alt="Rádio Rebel"
								src="/clients/radio-rebel"
								height="150px"
							/>
						</div>
					</Slider>
				</div>
			</div>
			<style jsx>{`
				.container {
					position: relative;
				}
				img {
					height: 150px;
					filter: grayscale(100%);
				}
				img:hover {
					filter: none;
				}
				.card {
					background: white;
					padding: 20px 0 20px 0;
					margin-bottom: 75px;
				}
				.slider {
					margin: 75px 0;
				}
			`}</style>
		</div>
	)
}

function ChevronRight(props) {
	return (
		<svg
			width="3em"
			height="3em"
			viewBox="0 0 16 16"
			className="prefix__bi prefix__bi-chevron-right"
			fill="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
			/>
			<style jsx>{`
				svg {
					position: absolute;
					right: 0;
					top: 50px;
					z-index: 10;
				}
				svg:hover {
					fill: var(--primary);
					cursor: pointer;
				}
			`}</style>
		</svg>
	)
}

function ChevronLeft(props) {
	return (
		<svg
			width="3em"
			height="3em"
			viewBox="0 0 16 16"
			className="prefix__bi prefix__bi-chevron-left"
			fill="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
			/>
			<style jsx>{`
				svg {
					position: absolute;
					left: 0;
					top: 50px;
					z-index: 10;
				}
				svg:hover {
					fill: var(--primary);
					cursor: pointer;
				}
			`}</style>
		</svg>
	)
}

// function Dot(props) {
// 	return (
// 		<svg
// 			width="1em"
// 			height="1em"
// 			viewBox="0 0 16 16"
// 			className="prefix__bi prefix__bi-dot"
// 			fill="currentColor"
// 			{...props}
// 		>
// 			<path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
// 		</svg>
// 	)
// }

export default ClientCarousel
