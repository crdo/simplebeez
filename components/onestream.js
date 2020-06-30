import useTranslation from "next-translate/useTranslation";
import ReactHtmlParser from "react-html-parser";

const OneStreamCard = ({ title, description }) => {
	return (
		<div className="onestream-card">
			<div className="title">{title}</div>
			<div className="description">{description}</div>
			<style jsx>{`
				.onestream-card {
					background: white;
					border: 1px solid #393939;
					text-align: center;
					padding: 25px;
					margin-bottom: 30px;
				}
				.title {
					font-weight: bold;
					margin-bottom: 20px;
				}
				.description {
					text-align: justify;
				}
				@media only screen and (min-width: 768px) {
					.onestream-card {
					}
					.onestream-card {
						flex-basis: 48%;
					}
				}
				@media only screen and (min-width: 1024px) {
					.onestream-card {
						flex-basis: 32%;
					}
				}
			`}</style>
		</div>
	);
};

const OneStream = () => {
	const { t } = useTranslation();
	return (
		<div>
			<div className="card">
				<div className="container" id="onestream">
					<div className="center">
						<img src="/onestream.png" className="onestream" alt="OneStream" />
					</div>
					<p>{t("onestream:content")}</p>
					<p>{t("onestream:content2")}</p>
				</div>

				<div className="container">
					<div className="onestream-cards">
						<OneStreamCard
							title={t("onestream:financialCloseAndConsolidation.title")}
							description={t(
								"onestream:financialCloseAndConsolidation.description"
							)}
						/>
						<OneStreamCard
							title={t("onestream:planningBudgetingAndConsolidation.title")}
							description={t(
								"onestream:planningBudgetingAndConsolidation.description"
							)}
						/>
						<OneStreamCard
							title={t("onestream:reportingAndAnalysis.title")}
							description={t("onestream:reportingAndAnalysis.description")}
						/>
						<OneStreamCard
							title={t("onestream:financialDataQualityManagement.title")}
							description={t(
								"onestream:financialDataQualityManagement.description"
							)}
						/>
						<OneStreamCard
							title={t("onestream:cloudOrOnPremise.title")}
							description={t("onestream:cloudOrOnPremise.description")}
						/>
						<OneStreamCard
							title={t("onestream:modernAndScalable.title")}
							description={t("onestream:modernAndScalable.description")}
						/>
					</div>
					<p className="center">
						{ReactHtmlParser(t("onestream:learnMore"))}{" "}
						<a href="https://www.onestreamsoftware.com">OneStream Software</a>.
					</p>
				</div>
			</div>
			<style jsx>{`
				p {
					text-align: justify;
				}
				.onestream {
					width: 250px;
				}
				.onestream-cards {
					margin-top: 75px;
				}
				.card {
					margin: 0 0 75px 0;
					padding: 75px 0;
				}
				a {
					color: var(--primary);
				}
				@media only screen and (min-width: 768px) {
					.onestream-cards {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
					}
				}
			`}</style>
		</div>
	);
};

export default OneStream;
