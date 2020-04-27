import ServiceDetail from "./service-detail";
import ServiceList from "./service-list";
import { withTranslation } from "../i18n";

const Services = (props) => {
	return (
		<div className="services">
			<ServiceList />
			<div className="services-details">
				<ServiceDetail
					id={props.t("financeTransformations.id")}
					title={props.t("financeTransformations.title")}
					problems={props.t("financeTransformations.problems")}
					logo="finance-transformations.svg"
					claim={props.t("financeTransformations.claim")}
					background="finance-transformations.jpeg"
					solutions={props.t("financeTransformations.solutions")}
				/>
				<ServiceDetail
					id={props.t("businessProcessManagement.id")}
					title={props.t("businessProcessManagement.title")}
					problems={props.t("businessProcessManagement.problems")}
					logo="business-process-management.svg"
					claim={props.t("businessProcessManagement.claim")}
					background="business-process-management.jpeg"
					solutions={props.t("businessProcessManagement.solutions")}
				/>
				<ServiceDetail
					id={props.t("interimManagement.id")}
					title={props.t("interimManagement.title")}
					problems={props.t("interimManagement.problems")}
					logo="interim-management.svg"
					claim={props.t("interimManagement.claim")}
					background="interim-management.jpeg"
					solutions={props.t("interimManagement.solutions")}
				/>
			</div>
		</div>
	);
};

Services.getInitialProps = async () => {
	return {
		namespacesRequired: ["services"],
	};
};

export default withTranslation("services")(Services);
