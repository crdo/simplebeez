import ServiceDetail from "./service-detail";
import ServiceList from "./service-list";
import useTranslation from "next-translate/useTranslation";

const Services = (props) => {
	const { t } = useTranslation();
	return (
		<div className="services">
			<ServiceList />
			<div className="services-details">
				<ServiceDetail
					id={t("services:financeTransformations.id")}
					title={t("services:financeTransformations.title")}
					problems={t("services:financeTransformations.problems")}
					logo="finance-transformations.svg"
					claim={t("services:financeTransformations.claim")}
					background="finance-transformations.jpeg"
					solutions={t("services:financeTransformations.solutions")}
				/>
				<ServiceDetail
					id={t("services:businessProcessManagement.id")}
					title={t("services:businessProcessManagement.title")}
					problems={t("services:businessProcessManagement.problems")}
					logo="business-process-management.svg"
					claim={t("services:businessProcessManagement.claim")}
					background="business-process-management.jpeg"
					solutions={t("services:businessProcessManagement.solutions")}
				/>
				<ServiceDetail
					id={t("services:interimManagement.id")}
					title={t("services:interimManagement.title")}
					problems={t("services:interimManagement.problems")}
					logo="interim-management.svg"
					claim={t("services:interimManagement.claim")}
					background="interim-management.jpeg"
					solutions={t("services:interimManagement.solutions")}
				/>
			</div>
		</div>
	);
};

export default Services;
