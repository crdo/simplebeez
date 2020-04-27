import { withTranslation } from "../i18n";

import Service from "./service";

const ServiceList = (props) => {
	return (
		<div className="spacing-wrapper" id="services">
			<div className="card">
				<div className="container">
					<h1 className="underlined center">{props.t("title")}</h1>
					<br />
					<p>{props.t("description")}</p>
					<div className="service-list">
						<Service
							title={props.t("financeTransformations.title")}
							href="finance-transformation"
							img="finance-transformations.svg"
							description={props.t("financeTransformations.description")}
						/>
						<Service
							title={props.t("businessProcessManagement.title")}
							href="business-process-management"
							img="business-process-management.svg"
							description={props.t("businessProcessManagement.description")}
						/>
						<Service
							title={props.t("interimManagement.title")}
							href="interim-management"
							img="interim-management.svg"
							description={props.t("interimManagement.descripiton")}
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
	);
};

ServiceList.getInitialProps = async () => {
	return {
		namespacesRequired: ["services"],
	};
};

export default withTranslation("services")(ServiceList);
