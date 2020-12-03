import FileDownloadModal from "./modal"
import { FormattedMessage } from "react-intl"

const Download = () => {
	return (
		<div className="download" id="download">
			<h3>
				<FormattedMessage
					defaultMessage="Tool for operating cash flow planning"
					id="download:title"
				/>
			</h3>
			<div className="button">
				<FileDownloadModal
					fileName="Simplebeez_CF_v8.0.xlsx"
					filePath="/Simplebeez_CF_v8.0.xlsx"
				>
					<FormattedMessage defaultMessage="Download" id="download:download" />
				</FileDownloadModal>
			</div>
			<p>
				<FormattedMessage
					defaultMessage="We have prepared for you a clear model of cash flow planning for businesses as well as self-employed persons.  All this in the most popular and widespread analytical tool, MS Excel."
					id="download:description"
				/>
			</p>
			<div className="version">
				<FormattedMessage defaultMessage="version" id="download:version" />
				1.0
			</div>
			<div className="date">8. 4. 2020</div>
			<style global jsx>{`
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
					/* margin-bottom: 30px; */
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
	)
}

export default Download
