import useTranslation from "next-translate/useTranslation";
import ReactHtmlParser from "react-html-parser";

const ServiceDetail = ({
	title,
	problems,
	logo,
	claim,
	background,
	solutions,
	id,
}) => {
	const { t } = useTranslation();
	return (
		<div id={id} className="spacing-wrapper">
			<div className="card">
				<div className="container">
					<div className="service-detail">
						<h1>{title}</h1>
						<div className="flex">
							<div className="service-detail-problem">
								<h2>{t("services:commonChallenges")}</h2>
								<div>{ReactHtmlParser(problems)}</div>
							</div>
							<div className="service-detail-img">
								<img src={logo} alt={title} />
							</div>
						</div>
						<div className="service-detail-claim">{claim}</div>
						<div className="flex">
							<div className="service-detail-background">
								<img src={background} alt={title} />
							</div>
							<div className="service-detail-solutions">
								<h2>{t("services:howWeCanHelp")}</h2>
								<ul>{ReactHtmlParser(solutions)}</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.spacing-wrapper > .card {
					padding-bottom: 20px;
				}
			`}</style>
		</div>
	);
};

export default ServiceDetail;
