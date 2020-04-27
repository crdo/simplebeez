import { appWithTranslation } from "../i18n";
import "../public/site.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
