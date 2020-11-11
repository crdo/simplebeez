import { FormattedMessage } from "react-intl"
import { useIntl } from "react-intl"

import Service from "./service"

const ServiceList = () => {
	const intl = useIntl()
	return (
		<div className="spacing-wrapper" id="services">
			<div className="card">
				<div className="container">
					<h1 className="underlined center">
						<FormattedMessage
							defaultMessage="Our services"
							id="services:title"
						/>
					</h1>
					<br />
					<p>
						<FormattedMessage
							defaultMessage="Our vision and desire are to help companies fulfill their visions, build their growth and sustainability on solid technological process foundations and above all to build an environment where trust, cooperation and effective communication between people and teams form the basis for creating added value."
							id="services:description"
						/>
					</p>
					<div className="service-list">
						<Service
							title={
								<FormattedMessage
									defaultMessage="Finance transformations"
									id="services:financeTransformations.title"
								/>
							}
							href="finance-transformation"
							img="finance-transformations.svg"
							description={
								<FormattedMessage
									defaultMessage="We stand by your side during the journey of finance transformation and associated implementations of IT solutions and process work-flows. We contribute to a definition of a transformation concept and strategy, we help to design and choose the right solutions, not limited to IT, and oversee the implementation to ensure success."
									id="services:financeTransformations.description"
								/>
							}
						/>
						<Service
							title={
								<FormattedMessage
									defaultMessage="Business process management"
									id="services:businessProcessManagement.title"
								/>
							}
							href="business-process-management"
							img="business-process-management.svg"
							description={
								<FormattedMessage
									defaultMessage="We implement effective Business Process Management (BPM) and re-design your processes for upcoming transformations and automations (“order to cash”, “procure to pay” and “record to report”)."
									id="services:businessProcessManagement.description"
								/>
							}
						/>
						<Service
							title={
								<FormattedMessage
									defaultMessage="Interim management"
									id="services:interimManagement.title"
								/>
							}
							href="interim-management"
							img="interim-management.svg"
							description={
								<FormattedMessage
									defaultMessage="We work with experienced professionals, who will support your team and take the lead in challenging times in core business areas such as finance, IT, sales, marketing, HR and production."
									id="services:interimManagement.description"
								/>
							}
						/>
					</div>
				</div>
			</div>
			<style jsx>{`
				.service-list {
					margin-top: 50px;
					display: flex;
					flex-grow: 0;
				}

				@media (max-width: 1024px) {
					.service-list {
						flex-wrap: wrap;
					}
				}

				p {
					text-align: center;
					margin: 0 auto;
				}

				@media (min-width: 1025px) {
					p {
						max-width: 80%;
					}
				}
			`}</style>
		</div>
	)
}

export default ServiceList
