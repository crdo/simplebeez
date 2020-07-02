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
					padding: 35px 25px;
					margin-bottom: 30px;
				}
				.onestream-card:hover .title {
					text-decoration: underline;
					text-decoration-color: var(--primary);
				}
				.title {
					font-weight: bold;
					font-size: 20px;
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
		<div id="onestream">
			<div className="card">
				<div className="container">
					<div className="center">
						<img src="/onestream.png" className="onestream" alt="OneStream" />
					</div>
					<p>{ReactHtmlParser(t("onestream:content"))}</p>
					<p>{ReactHtmlParser(t("onestream:content1"))}</p>
					<br />
					<h2>{ReactHtmlParser(t("onestream:about"))}</h2>
					<p>{ReactHtmlParser(t("onestream:content2"))}</p>
					<p>{ReactHtmlParser(t("onestream:content3"))}</p>
					<p className="center">
						{ReactHtmlParser(t("onestream:learnMore"))}{" "}
						<b>
							<a href="https://www.onestreamsoftware.com" target="_blank">
								OneStream Software
							</a>
						</b>
						.
					</p>
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
				</div>
			</div>
			<style jsx>{`
				p {
					text-align: justify;
				}
				.onestream {
					width: 250px;
					margin-bottom: 20px;
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
				h2 {
					font-size: 20px;
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
