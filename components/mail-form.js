import React from "react"
import useSendGrid from "../hooks/useSendGrid"
import { useIntl } from "react-intl"

export default function MailForm() {
	const { handleOnSubmit, handleOnChange, status, inputs } = useSendGrid()
	const intl = useIntl()
	return (
		<main>
			<form onSubmit={handleOnSubmit}>
				<input
					id="email"
					name="email"
					type="email"
					onChange={handleOnChange}
					required
					value={inputs?.email ?? ""}
					placeholder="E-mail"
				/>
				<input
					id="name"
					name="name"
					type="text"
					onChange={handleOnChange}
					required
					value={inputs?.name ?? ""}
					placeholder={intl.formatMessage({
						id: "common:fullName",
						defaultMessage: "Full name",
					})}
				/>
				<textarea
					id="message"
					name="message"
					onChange={handleOnChange}
					required
					value={inputs?.message ?? ""}
					placeholder={intl.formatMessage({
						id: "common:message",
						defaultMessage: "Message",
					})}
				/>
				<button type="submit" disabled={status.submitting}>
					{!status.submitting
						? !status.submitted
							? intl.formatMessage({
									id: "common:send",
									defaultMessage: "Send",
							  })
							: intl.formatMessage({
									id: "common:sent",
									defaultMessage: "Sent",
							  })
						: intl.formatMessage({
								id: "common:sending",
								defaultMessage: "Sending",
						  })}
				</button>
			</form>
			{status.info.error && (
				<div className="error">Error: {status.info.msg}</div>
			)}
			{!status.info.error && status.info.msg && (
				<div className="success">{status.info.msg}</div>
			)}
		</main>
	)
}
