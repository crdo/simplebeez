import FileDownloadModal from "./modal";
import useTranslation from "next-translate/useTranslation";

const Download = (props) => {
	const { t } = useTranslation();
	return (
		<div className="download" id="downloads">
			<div className="container">
				<h1>{t("download:title")}</h1>
				<div className="button">
					<FileDownloadModal
						fileName="Simplebeez_CF_Soubor_v1.0_08-04-2020.xlsx"
						filePath="/Simplebeez_CF_Soubor_v1.0_08-04-2020.xlsx"
					>
						{t("download:download")}
					</FileDownloadModal>
				</div>
				<p>{t("download:description")}</p>
				<div className="version">{t("download:version")} 1.0</div>
				<div className="date">8. 4. 2020</div>
			</div>
			<style global jsx>{`
				.download {
					background: #393939;
					padding: 50px 0;
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

export default Download;
