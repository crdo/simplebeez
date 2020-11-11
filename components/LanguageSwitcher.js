import React from "react"
import Link from "next/link"
import { useIntl } from "react-intl"

export default function LanguageSwitcher() {
	const intl = useIntl()
	return (
		<Link locale={intl.locale == "cs" ? "en" : "cs"} href="/">
			{intl.formatMessage({
				id: "header:switchLanguage",
				defaultMessage: "Česky",
			})}
		</Link>
	)
}
