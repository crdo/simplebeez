import FileDownloadModal from "./modal";
import { withTranslation } from "../i18n";

const Download = (props) => {
	return (
		<div className="download" id="downloads">
			<div className="container">
				<h1>{props.t("title")}</h1>
				<div className="button">
					<FileDownloadModal
						fileName="Simplebeez_CF_Soubor_v1.0_08-04-20202.xlsx"
						filePath="/Simplebeez_CF_Soubor_v1.0_08-04-20202.xlsx"
					>
						{props.t("download")}
					</FileDownloadModal>
				</div>
				<p>{props.t("description")}</p>
				<div className="version">{props.t("version")} 1.0</div>
				<div className="date">8. 4. 2020</div>
			</div>
			<style global jsx>{`
				.download {
					background: #393939;
					padding: 60px 0;
					color: white;
				}
				.version {
					color: var(--primary);
				}
				.download .button a {
					background: var(--primary);
					color: black;
					padding: 10px 30px;
					float: right;
					font-size: 20px;
					width: 100%;
					text-align: center;
					margin-bottom: 20px;
				}

				p {
					margin-bottom: 30px;
				}

				h1,
				p {
					text-align: justify;
				}

				.version,
				.date {
					text-align: center;
				}
				@media only screen and (min-width: 768px) {
					.download .button a {
						width: auto;
						margin-left: 30px;
					}
					h1,
					p,
					.version,
					.date {
						text-align: left;
					}
				}
			`}</style>
		</div>
	);
};

Download.getInitialProps = async () => {
	return {
		namespacesRequired: ["download"],
	};
};

export default withTranslation("download")(Download);
