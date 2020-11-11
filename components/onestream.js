import { useIntl, FormattedMessage } from "react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

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
				.onestream-card:hover {
					background: #393939;
					color: white;
				}
				.onestream-card:hover .title {
					color: var(--primary);
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
	)
}

const OneStream = () => {
	const intl = useIntl()
	return (
		<div id="onestream">
			<div className="card">
				<div className="container">
					<div className="center">
						<img src="/onestream.png" className="onestream" alt="OneStream" />
					</div>
					<p>
						<FormattedMessage
							defaultMessage="<b>We are the first Czech implementation partner of OneStream Software</b>, focused primarily on the needs of the CEE region. We bring an unique combination of extensive hands-on experience in managing and transforming finance from the real client’s side (finance and business), experience from implementation teams side incl. roles of functional architects, and partnership with currently best-rated CPM 2.0 solution, <b>OneStream XF SmartCPM<sup>TM</sup> platform</b>."
							id="onestream:content"
							values={{
								b: (...chunks) => <b>{chunks}</b>,
								sup: (...chunks) => <sup>{chunks}</sup>,
							}}
						/>
					</p>
					<p>
						<FormattedMessage
							defaultMessage="Our mission is to establish a trusted partnership with our clients and provide a full-service approach to comprehensive successful financial transformations. We achieve this with a systematic and practical emphasis on <b>all 3 aspects</b> of such transformation: Aligning the expectations, needs and attitudes of key people, Optimizing and simplifying business and financial processes, and finally Providing the implementation expertise of OneStream XF technology platform. We build optimized and automated critical pillars for effective financial management of the company and evaluation of its performance. At the same time, we open the door to enable significantly better planning, modelling and predicting capabilities of the company's performance. <b>Ultimately we strive to enable companies to make fundamental operational and strategic decisions faster and in a quality manner, and at the same time to achieve management agility in the environment of growing complexity not only of their own operations, but also of the market environment.</b>"
							id="onestream:content1"
							values={{
								b: (...chunks) => <b>{chunks}</b>,
							}}
						/>
					</p>
					<br />
					<h2>
						<FormattedMessage
							defaultMessage="About OneStream XF SmartCPM<sup>TM</sup> platform"
							id="onestream:about"
							values={{
								sup: (...chunks) => <sup>{chunks}</sup>,
							}}
						/>
					</h2>
					<p>
						<FormattedMessage
							defaultMessage="OneStream Software provides a market-leading CPM solution that unifies and simplifies financial consolidation, planning, reporting, analytics and financial data quality for sophisticated organizations. Deployed via the cloud or on-premise, OneStream’s unified platform enables organizations to modernize Finance, replace multiple legacy applications and reduce the total cost of ownership of financial systems. OneStream unleashes Finance teams to spend less time on data integration and system maintenance – and more time focusing on driving business performance."
							id="onestream:content2"
							values={{
								b: (...chunks) => <b>{chunks}</b>,
							}}
						/>
					</p>
					<p>
						<FormattedMessage
							defaultMessage="The OneStream XF MarketPlace features over 50 downloadable solutions that allow customers to easily extend the value of their CPM platform to quickly meet the changing needs of finance and operations. Solutions include Account Reconciliations, People Planning, Capital Planning, and more."
							id="onestream:content3"
							values={{
								b: (...chunks) => <b>{chunks}</b>,
							}}
						/>
					</p>
					<p className="center">
						<FormattedMessage
							defaultMessage="Learn more about"
							id="onestream:learnMore"
						/>
						<b>
							<a href="https://www.onestreamsoftware.com" target="_blank">
								{" "}
								OneStream Software
							</a>
						</b>
						.
					</p>
				</div>

				<div className="container">
					<div className="onestream-cards">
						<OneStreamCard
							title={
								<FormattedMessage
									defaultMessage="Financial Close and Consolidation"
									id="onestream:financialCloseAndConsolidation.title"
								/>
							}
							description={
								<FormattedMessage
									defaultMessage="Streamline financial close and consolidation while addressing complex global accounting and reporting requirements. Provide rapid insights into financial and operating results. Automate and accelerate the financial close process."
									id="onestream:financialCloseAndConsolidation.description"
								/>
							}
						/>
						<OneStreamCard
							title={
								<FormattedMessage
									defaultMessage="Planning, Budgeting and Forecasting"
									id="onestream:planningBudgetingAndConsolidation.title"
								/>
							}
							description={
								<FormattedMessage
									defaultMessage="Gain agility in planning with support for strategic, financial and operational planning needs in a single, unified solution. Align corporate plans and forecasts to detailed operating plans. Increase agility through rolling forecasts and driver-based planning."
									id="onestream:planningBudgetingAndConsolidation.description"
								/>
							}
						/>
						<OneStreamCard
							title={
								<FormattedMessage
									defaultMessage="Reporting and Analysis"
									id="onestream:reportingAndAnalysis.title"
								/>
							}
							description={
								<FormattedMessage
									defaultMessage="Deliver the right information, in the right format, at the right time with a single platform for financial, statutory and management reporting and analysis. Gain a single lens view into financial and operating results with in-system reporting, analysis, Microsoft Excel and Office integration."
									id="onestream:reportingAndAnalysis.description"
								/>
							}
						/>
						<OneStreamCard
							title={
								<FormattedMessage
									defaultMessage="Financial Data Quality Management"
									id="onestream:financialDataQualityManagement.title"
								/>
							}
							description={
								<FormattedMessage
									defaultMessage="Increase confidence in financial and operating results with powerful data integration, validations, certifications and audit trails. Eliminate 'black box' data integration processes."
									id="onestream:financialDataQualityManagement.description"
								/>
							}
						/>
						<OneStreamCard
							title={
								<FormattedMessage
									defaultMessage="Cloud or On-Premise Flexible Deployment Options"
									id="onestream:cloudOrOnPremise.title"
								/>
							}
							description={
								<FormattedMessage
									defaultMessage="Have it your way when it comes to deployment models - move to the cloud now, or when your organization is ready. Architected from day one to take full advantage of cloud and virtualization (powered by Microsoft Azure), OneStream XF offers flexibility when it comes to deployment options, either on-premise, hosted or in the cloud."
									id="onestream:cloudOrOnPremise.description"
								/>
							}
						/>
						<OneStreamCard
							title={
								<FormattedMessage
									defaultMessage="Modern, Scalable Technology Architecture"
									id="onestream:modernAndScalable.title"
								/>
							}
							description={
								<FormattedMessage
									defaultMessage="Break free from the limitations of legacy systems that don't scale, and don't address today's demanding planning and reporting requirements. Achieve the security, availability, scalability and performance you need with a modern, extensible platform."
									id="onestream:modernAndScalable.description"
								/>
							}
						/>
					</div>
				</div>
				<div id="it4finance" className="container">
					<h1 className="underlined center">
						<FormattedMessage
							defaultMessage="IT 4 FIN"
							id="onestream:it4fin.title"
						/>
					</h1>
					<br />
					<p className="center">
						<FormattedMessage
							defaultMessage="Presentations and videos which were used during the IT 4 Finance virtual conference which took place on 12 November 2020 where SIMPLEBEEZ talked about advantages, unique opportunities in managing your business from one unified platform Onestream."
							id="onestream:it4fin.description"
							values={{
								b: (...chunks) => <b>{chunks}</b>,
							}}
						/>
					</p>
					<br />
					<div className="downloads">
						<a href="/OneStream overview.pdf" traget="_blank">
							<FontAwesomeIcon icon={faFilePdf} /> Onestream Overview
						</a>
						<a href="/OneStream-Brochure.pdf" traget="_blank">
							<FontAwesomeIcon icon={faFilePdf} /> Onestream Brochure
						</a>
						<a
							href={intl.formatMessage({
								id: "onestream:it4fin.slidesSource",
								defaultMessage: "/IT4FIN_slides_selection_english.ppsx",
							})}
							traget="_blank"
						>
							<FontAwesomeIcon icon={faFilePdf} />{" "}
							<FormattedMessage
								defaultMessage="Slides"
								id="onestream:it4fin.slides"
							/>
						</a>
					</div>
					<div className="video">
						<div>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/VpXP0tVG7Uw"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
						<div>
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/krQuHVlOGPs"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.downloads {
					background: black;
					padding: 15px 30px;
				}
				.downloads a {
					color: white;
					margin-right: 30px;
					display: inline-block;
				}
				:global(.downloads a svg) {
					color: #f4ae9c;
				}
				#it4finance {
					padding-top: 80px;
				}
				.video {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
					margin: 50px 0;
				}
				.cenetr {
					text-align: center;
				}
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
	)
}

export default OneStream
