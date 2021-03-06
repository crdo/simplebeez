import useSendGrid from "../hooks/useSendGrid"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { event } from "../data/gtag"
import { useEffect } from "react"
import { useIntl } from "react-intl"

const DownloadForm = ({ fileName, filePath }) => {
	const { handleOnSubmit, handleOnChange, status, inputs } = useSendGrid()
	const intl = useIntl()
	useEffect(() => {
		if (!status.info.error && status.info.msg) {
			event({
				action: "File download",
				category: "Web",
				label: "",
				value: { fileName },
			})
		}
	}, [status])
	return (
		<form onSubmit={handleOnSubmit}>
			{!status.info.msg && (
				<>
					<div className="flex">
						<input
							placeholder={intl.formatMessage({
								id: "common:name",
								defaultMessage: "Name",
							})}
							id="name"
							onChange={handleOnChange}
							value={inputs?.name ?? ""}
							type="text"
							required
						/>
						<input
							placeholder={intl.formatMessage({
								id: "common:surname",
								defaultMessage: "Surname",
							})}
							id="surname"
							onChange={handleOnChange}
							value={inputs?.surname ?? ""}
							type="text"
							required
						/>
					</div>
					<input
						placeholder="E-mail"
						id="email"
						onChange={handleOnChange}
						value={inputs?.email ?? ""}
						type="email"
						required
					/>
					<input
						placeholder={intl.formatMessage({
							id: "common:companyName",
							defaultMessage: "Company Name",
						})}
						onChange={handleOnChange}
						id="company_name"
						value={inputs?.company_name ?? ""}
						type="text"
						required
					/>
					<div className="gdpr">
						<label htmlFor="gdpr">
							<input
								type="checkbox"
								onChange={handleOnChange}
								id="gdpr"
								value={inputs?.company_gdpr}
								required
								name="gdpr"
							/>{" "}
							{intl.formatMessage({
								id: "common:agree",
								defaultMessage: "Agree with",
							})}{" "}
							<a
								target="_blank"
								href={intl.formatMessage({
									id: "common:privacyPolicySource",
									defaultMessage: "Name",
								})}
							>
								Privacy policy.
							</a>
						</label>
					</div>
					<button type="submit">
						{intl.formatMessage({
							id: "common:download",
							defaultMessage: "Download",
						})}
					</button>
				</>
			)}
			{status.info.error && (
				<div className="error">Error: {status.info.msg}</div>
			)}
			{!status.info.error && status.info.msg && (
				<div>
					<a className="download-btn" href={filePath}>
						<FontAwesomeIcon height="20" icon={faDownload} />
						&nbsp;&nbsp;{fileName}
					</a>
				</div>
			)}
			<style jsx>{`
				.flex {
					justify-content: space-between;
				}
				.flex input {
					width: 300px;
					max-width: 49%;
				}
				input:not([type="checkbox"]) {
					width: 100%;
					color: #393939;
				}
				a {
					color: #f4ae9c;
					cursor: pointer;
				}

				.download-btn {
					display: flex;
					align-items: center;
				}

				button {
					display: block;
					width: 100%;
					cursor: pointer;
				}
				.gdpr {
					margin-bottom: 30px;
				}
			`}</style>
		</form>
	)
}

export default DownloadForm
