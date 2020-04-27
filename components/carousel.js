import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import { withTranslation } from "../i18n";

const HeroCarousel = (props) => {
	const LearnMore = () => (
		<span>
			{props.t("more")} <FontAwesomeIcon icon={faChevronRight} />
		</span>
	);
	return (
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
				<h2>{props.t("tired")}</h2>
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
				<h2>{props.t("thinking")}</h2>
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
				<h2>{props.t("desire")}</h2>
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
				<h2>{props.t("ambitions")}</h2>
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
				<h2>{props.t("missing")}</h2>
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
				<h2>{props.t("wishing")}</h2>
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
				<h2>{props.t("planning")}</h2>
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
				<h2>{props.t("need")}</h2>
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
	);
};

HeroCarousel.getInitialProps = async () => {
	return {
		namespacesRequired: ["carousel"],
	};
};

export default withTranslation("carousel")(HeroCarousel);
