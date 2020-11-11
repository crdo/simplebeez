import { FormattedMessage } from "react-intl"
import HeroCarousel from "./carousel"

const Hero = () => {
	return (
		<div className="container">
			<div className="hero">
				<div className="claim">
					<h1>
						<span>
							{
								<FormattedMessage
									defaultMessage="<a>Your partner</a> for finance transformation"
									id="hero:claim"
									values={{
										a: (...chunks) => (
											<div>
												<span className="triangle">{chunks}</span>
											</div>
										),
									}}
								/>
							}
						</span>
					</h1>
					<p>
						<FormattedMessage
							defaultMessage="Simpler, smarter, meaningful solutions."
							id="hero:motto"
						/>
						<br />
						<FormattedMessage
							defaultMessage="Connecting people, process and technology."
							id="hero:motto2"
						/>
					</p>
				</div>
				<div className="stripe"></div>
				<div className="rectangle">
					<div className="skewed">
						<HeroCarousel />
					</div>
				</div>
			</div>
			<style jsx>{`
				.hero {
					color: white;
					height: 100vh;
					display: flex;
					flex-direction: column;
					padding-top: 97px;
					height: 100vh;
					overflow: hidden;
				}

				.claim {
					flex: 1 0 0;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					text-align: center;
				}

				h1 {
					font-size: 30px;
					line-height: 1.3;
					margin-top: 10%;
					text-align: center;
				}

				h2 {
					font-size: 14px;
					font-weight: normal;
					margin-top: 0;
				}

				p {
					font-size: 14px;
					text-align: center;
				}

				.stripe {
					display: none;
					flex: 0 0 125px;
					background: rgba(244, 174, 156, 0.75);
					transform: skew(-21deg);
					z-index: -1;
				}

				.rectangle {
					flex: 1 0 0;
					display: flex;
					justify-content: flex-end;
					flex-direction: column;
					width: 500px;
					max-width: 100%;
					margin: 0 auto;
					margin-bottom: 20px;
				}

				@media only screen and (min-width: 321px) {
					h1 {
						font-size: 30px;
					}
					p,
					h2 {
						font-size: 16px;
					}
				}

				@media only screen and (min-width: 768px) {
					h1 {
						font-size: 40px;
					}
					p,
					h2 {
						font-size: 20px;
					}
				}

				@media only screen and (min-width: 1025px) {
					h1 {
						font-size: 40px;
						margin-top: 15%;
						margin-left: 5%;
					}

					h1,
					p {
						margin-left: 5%;
						text-align: left;
					}

					p,
					h2 {
						font-size: 20px;
					}

					.hero {
						flex-direction: row;
					}

					.claim {
						text-align: left;
					}
					.stripe {
						display: block;
					}
					.rectangle {
						width: 15%;
						margin-bottom: 30px;
					}
					:global(.carousel-root) {
						transform: skew(21deg);
					}
					.skewed {
						transform: skew(-21deg);
						padding-right: 100px !important;
						margin-right: -100px;
					}
				}

				@media only screen and (min-width: 1300px) {
					h1 {
						font-size: 65px;
						margin-top: 15%;
						margin-bottom: 10px;
					}
					p,
					h2 {
						font-size: 22px;
					}
				}

				.skewed {
					background: rgba(0, 0, 0, 0.5);
					padding: 20px;
					position: relative;
				}

				:global(.link svg) {
					width: 7px;
				}

				:global(.link) {
					color: #f4ae9c;
					cursor: pointer;
				}
			`}</style>
		</div>
	)
}

export default Hero
