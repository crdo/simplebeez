import useTranslation from "next-translate/useTranslation";

import Service from "./service";

const ServiceList = (props) => {
	const { t } = useTranslation();
	return (
		<div className="spacing-wrapper" id="services">
			<div className="card">
				<div className="container">
					<h1 className="underlined center">{t("services:title")}</h1>
					<br />
					<p>{t("services:description")}</p>
					<div className="service-list">
						<Service
							title={t("services:financeTransformations.title")}
							href="finance-transformation"
							img="finance-transformations.svg"
							description={t("services:financeTransformations.description")}
						/>
						<Service
							title={t("services:businessProcessManagement.title")}
							href="business-process-management"
							img="business-process-management.svg"
							description={t("services:businessProcessManagement.description")}
						/>
						<Service
							title={t("services:interimManagement.title")}
							href="interim-management"
							img="interim-management.svg"
							description={t("services:interimManagement.descripiton")}
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

export default ServiceList;
