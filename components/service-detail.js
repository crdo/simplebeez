import { withTranslation } from "../i18n";

const ServiceDetail = ({
	title,
	problems,
	logo,
	claim,
	background,
	solutions,
	id,
	t,
}) => {
	return (
		<div id={id} className="spacing-wrapper">
			<div className="card">
				<div className="container">
					<div className="service-detail">
						<h1>{title}</h1>
						<div className="flex">
							<div className="service-detail-problem">
								<h2>{t("commonChallenges")}</h2>
								<div
									dangerouslySetInnerHTML={{
										__html: problems,
									}}
								/>
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
								<h2>{t("howWeCanHelp")}</h2>
								<ul
									dangerouslySetInnerHTML={{
										__html: solutions,
									}}
								/>
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

ServiceDetail.getInitialProps = async () => {
	return {
		namespacesRequired: ["services"],
	};
};

export default withTranslation("services")(ServiceDetail);
