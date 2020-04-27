import { withTranslation } from "../i18n";
import HeroCarousel from "./carousel";

const Hero = (props) => (
	<div className="container">
		<div className="hero">
			<div className="claim">
				<h1>
					<span dangerouslySetInnerHTML={{ __html: props.t("claim") }} />
				</h1>
				<p>
					{props.t("motto")}
					<br />
					{props.t("motto2")}
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
				font-size: 25px;
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

			:global(.triangle:after) {
				right: -25px;
				top: 15px;
				border-left: 8px solid transparent;
				border-right: 8px solid transparent;
				border-top: 13px solid #f4ae9c;
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
				:global(.triangle:after) {
					right: -30px;
					top: 20px;
					border-left: 10px solid transparent;
					border-right: 10px solid transparent;
					border-top: 17px solid #f4ae9c;
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
				:global(.triangle:after) {
					right: -30px;
					top: 23px;
					border-left: 10px solid transparent;
					border-right: 10px solid transparent;
					border-top: 17px solid #f4ae9c;
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
				:global(.triangle:after) {
					right: -55px;
					top: 35px;
					border-left: 20px solid transparent;
					border-right: 20px solid transparent;
					border-top: 32px solid #f4ae9c;
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
);

Hero.getInitialProps = async () => {
	return {
		namespacesRequired: ["hero"],
	};
};

export default withTranslation("hero")(Hero);
