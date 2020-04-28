import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import useTranslation from "next-translate/useTranslation";

const HeroCarousel = (props) => {
	const { t } = useTranslation();
	const LearnMore = () => (
		<span>
			{t("carousel:more")} <FontAwesomeIcon icon={faChevronRight} />
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
				<h2>{t("carousel:tired")}</h2>
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
				<h2>{t("carousel:thinking")}</h2>
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
				<h2>{t("carousel:desire")}</h2>
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
				<h2>{t("carousel:ambitions")}</h2>
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
				<h2>{t("carousel:missing")}</h2>
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
				<h2>{t("carousel:wishing")}</h2>
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
				<h2>{t("carousel:planning")}</h2>
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
				<h2>{t("carousel:need")}</h2>
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

export default HeroCarousel;
