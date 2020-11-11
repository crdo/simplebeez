import { IntlProvider } from "react-intl"
import { useRouter } from "next/router"
import cs from "../locales/cs.json"

import "../public/site.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "slick-carousel/slick/slick.css"

function MyApp({ Component, pageProps }) {
	const { locale, defaultLocale } = useRouter()
	const dict = locale === "cs" ? cs : {}
	return (
		<IntlProvider messages={dict} locale={locale} defaultLocale={defaultLocale}>
			<Component {...pageProps} />
		</IntlProvider>
	)
}

export default MyApp
