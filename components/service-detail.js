import { FormattedMessage } from "react-intl"

const ServiceDetail = ({
	title,
	problems,
	logo,
	claim,
	background,
	solutions,
	id,
}) => {
	return (
		<div id={id} className="spacing-wrapper">
			<div className="card">
				<div className="container">
					<div className="service-detail">
						<h1>{title}</h1>
						<div className="flex">
							<div className="service-detail-problem">
								<h2>
									<FormattedMessage
										defaultMessage="Common challenges"
										id="services:commonChellenges"
									/>
								</h2>
								<div>{problems}</div>
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
								<h2>
									<FormattedMessage
										defaultMessage="How we can help"
										id="services:howWeCanHelp"
									/>
								</h2>
								<ul>{solutions}</ul>
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
	)
}

export default ServiceDetail
