import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Carousel } from "react-responsive-carousel"
import { FormattedMessage } from "react-intl"

const HeroCarousel = (props) => {
	const LearnMore = () => (
		<span>
			<FormattedMessage defaultMessage="Learn more" id="carousel:more" />{" "}
			<FontAwesomeIcon icon={faChevronRight} />
		</span>
	)
	return (
		<div>
			<Carousel
				interval={6500}
				infiniteLoop={true}
				autoPlay={true}
				transitionTime={1000}
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				showIndicators={false}
			>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="Tired of lengthy budgeting process? Curious how to make it differently?"
							id="carousel:tired"
						/>
					</h2>
					<Link
						className="link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						to="finance-transformation"
					>
						<LearnMore />
					</Link>
				</div>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="Thinking of transforming your finance department?"
							id="carousel:thinking"
						/>
					</h2>
					<Link
						className="link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						to="finance-transformation"
					>
						<LearnMore />
					</Link>
				</div>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="Hoping for true finance business partnering? Still not there yet?"
							id="carousel:desire"
						/>
					</h2>
					<Link
						className="link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						to="finance-transformation"
					>
						<LearnMore />
					</Link>
				</div>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="Ambition for a big project but not having the right people?"
							id="carousel:ambitions"
						/>
					</h2>
					<Link
						className="link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						to="interim-management"
					>
						<LearnMore />
					</Link>
				</div>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="Lacking an experienced senior person to help you during difficult times?"
							id="carousel:missing"
						/>
					</h2>
					<Link
						className="link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						to="interim-management"
					>
						<LearnMore />
					</Link>
				</div>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="Wishing to streamline internal processes which annoys and slows you down?"
							id="carousel:wishing"
						/>
					</h2>
					<Link
						className="link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						to="business-process-management"
					>
						<LearnMore />
					</Link>
				</div>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="Planning for a new ERP solution implementation and worried already?"
							id="carousel:planning"
						/>
					</h2>
					<Link
						className="link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						to="finance-transformation"
					>
						<LearnMore />
					</Link>
				</div>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="In a need for a better control over your overall spend management?"
							id="carousel:need"
						/>
					</h2>
					<Link
						className="link"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						to="business-process-management"
					>
						<LearnMore />
					</Link>
				</div>
			</Carousel>
			<style global jsx>{`
				.service {
					flex-direction: column;
					text-align: center;
					cursor: pointer;
					flex-basis: 100%;
					padding: 30px;
					display: flex;
				}

				.link {
					margin-top: auto;
				}

				.service:hover {
					background-color: #dedede;
				}

				@media (max-width: 1024px) {
					.service {
						padding: 20px;
					}
				}
			`}</style>
		</div>
	)
}

export default HeroCarousel
