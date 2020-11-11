import { FormattedMessage } from "react-intl"

import ServiceDetail from "./service-detail"
import ServiceList from "./service-list"

const Services = () => {
	return (
		<div className="services">
			<ServiceList />
			<div className="services-details">
				<ServiceDetail
					id="finance-transformation"
					title={
						<FormattedMessage
							defaultMessage="Finance transformations"
							id="services:financeTransformations.title"
						/>
					}
					problems={
						<FormattedMessage
							defaultMessage="<p>How is your Finance department seen and perceived by their colleagues? Are they seen as people who always bother others with formalities, templates, tables, reports, or controls, and even threaten you with compliance requirements or audits?</p><p>Do others try to avoid them or come to them only when concerned about timely payroll payments? How efficiently does your CFO collaborate with the Head of Sales or HR? How many people in your firm get annoyed and frustrated when hearing the word “budget”?</p><p>Or, would you like your Finance team to be a strong partner for business operations, reaching out to them with trust for advice, insights and guidance so they pull together as a true team working towards the company vision?</p><p>How far are you with that? Are you looking for a change?</p>"
							id="services:financeTransformations.problems"
							values={{
								p: (...chunks) => <p>{chunks}</p>,
							}}
						/>
					}
					logo="/finance-transformations.svg"
					claim={
						<FormattedMessage
							defaultMessage="We connect the world of business, finance and IT."
							id="services:financeTransformations.claim"
						/>
					}
					background="/finance-transformations.jpeg"
					solutions={
						<FormattedMessage
							defaultMessage="<li>We strive for and support a transformation of the finance process from “bookkeeping and reporting” towards true <b>“business partnering”</b>.</li><li>We stand by your side during the journey of finance transformation and associated implementations of IT solutions and process work-flows. We contribute to a definition of a <b>transformation concept and strategy</b>, we <b>help to design and choose the right solutions</b>, not limited to IT, and oversee the implementation to ensure success.</li><li>We cooperate with the Beyond Budgeting Round Table institute, which for more than two decades has been building and continuously improving their holistic approach to Finance and leadership, or the so called “Beyond Budgeting”. We help you to move and deploy the <b>agile method for financial management and planning</b>.</li><li>We leverage our broad experience with functional design and modelling of IT solutions with a link to Finance and <b>bridge the gap between business leadership, finance and IT</b>.</li>"
							id="services:financeTransformations.solutions"
							values={{
								li: (...chunks) => <li className="triangle mb-2">{chunks}</li>,
								b: (...chunks) => <b>{chunks}</b>,
							}}
						/>
					}
				/>
				<ServiceDetail
					id="business-process-management"
					title={
						<FormattedMessage
							defaultMessage="Finance transformations"
							id="services:businessProcessManagement.title"
						/>
					}
					problems={
						<FormattedMessage
							defaultMessage="<p>Do you know which part of your company processes drives the added value and which represents bottlenecks or waste?</p><p>Is it clear to your people who has the authority and accountability for supporting and approving the process changes, and is such ownership undisputed?</p><p>Are you convinced that the deployment of new IT software will solve the long-lasting problem of ineffective communication within the firm, poor collaboration between departments, a lack of trust among key people or weak loyalty toward your company?</p><p>Are your people complaining about boring and routine work but at the same time they do not come up with any initiative or ideas how it could be constructively solved?</p><p>Do you invest lots of money and time into new technologies such as ERP, RPA or data analytics but get frustrated by the gap between reality and expectations?</p>"
							id="services:businessProcessManagement.problems"
							values={{
								p: (...chunks) => <p>{chunks}</p>,
							}}
						/>
					}
					logo="/business-process-management.svg"
					claim={
						<FormattedMessage
							defaultMessage="We connect the world of business, finance and IT."
							id="services:businessProcessManagement.claim"
						/>
					}
					background="/business-process-management.jpeg"
					solutions={
						<FormattedMessage
							defaultMessage="<li>We conduct a <b>comprehensive analysis of your core activities and processes</b> and strive to make the most out of your internal limited resources and people where they bring the most value to your business. The goal is to do things faster, smarter and more transparently so that you as a team can make better decisions and respond to new opportunities.</li><li>We will help with the introduction of the concept of <b>continuous improvements by using Lean and 6 Sigma methodology</b>. We strongly believe that releasing your peoples hands (not only from the finance department) by removing inefficiencies or with smarter, not just technological improvements, is absolutely critical to improving their motivation for larger and strategic transformational activities. Less is often more.</li><li>We implement effective Business Process Management (BPM) and <b>re-design your processes for upcoming transformations and automations</b> (“order to cash”, “procure to pay” and “record to report”).</li><li>We help you to transition from a functionally-oriented towards a process-oriented organizational structure, with clearly defined ultimate process owners.</li><li>We are ready to step into ongoing projects that may not be moving forward as expected due to <b>various process constraints</b>.</li>"
							id="services:businessProcessManagement.solutions"
							values={{
								li: (...chunks) => <li className="triangle mb-2">{chunks}</li>,
								b: (...chunks) => <b>{chunks}</b>,
							}}
						/>
					}
				/>
				<ServiceDetail
					id="interim-management"
					title={
						<FormattedMessage
							defaultMessage="Interim management"
							id="services:interimManagement.title"
						/>
					}
					problems={
						<FormattedMessage
							defaultMessage="<p>Are you planning a critical or strategic project, but face a challenge of not having enough resources with the right skillset and experience? Have you unexpectedly lost a senior person and you need to urgently fill the gap in the team?</p><p>Are you missing an unbiased independent view or opinion, new energy, a vision, enthusiasm or experience from outside?</p><p>Or do you need someone to act on your behalf and communicate unpopular decisions, to remove skeletons from the closet and clean up, so you can focus on strategic directions and business growth?</p>"
							id="services:interimManagement.problems"
							values={{
								p: (...chunks) => <p>{chunks}</p>,
							}}
						/>
					}
					logo="/interim-management.svg"
					claim={
						<FormattedMessage
							defaultMessage="A good partnership is the key."
							id="services:interimManagement.claim"
						/>
					}
					background="/interim-management.jpeg"
					solutions={
						<FormattedMessage
							defaultMessage="<li><b>We work with experienced professionals</b>, who <b>will support your team and take the lead</b> in challenging times in core business areas such as finance, IT, sales, marketing, HR and production.</li><li>We are not only consultants. We are people who have been through our own professional challenges, <b>who led or have been core members</b> on transformations or other projects of various scale and nature, both at a domestic and international level.</li><li>We help you with both short-term and long-term projects, by providing either the <b>consultancy</b> or the senior <b>interim manager</b>.</li><li>We focus on <b>supporting the change management</b> related to transformational activities and projects and providing services to <b>ensure stability</b> during the interim period.</li>"
							id="services:interimManagement.solutions"
							values={{
								li: (...chunks) => <li className="triangle mb-2">{chunks}</li>,
								b: (...chunks) => <b>{chunks}</b>,
							}}
						/>
					}
				/>
			</div>
		</div>
	)
}

export default Services
