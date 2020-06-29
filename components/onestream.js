import useTranslation from "next-translate/useTranslation";
import ReactHtmlParser from "react-html-parser";

const OneStream = () => {
	const { t } = useTranslation();
	return (
		<div>
			<div className="card">
				<div className="container" id="onestream">
					<div className="center">
						<img src="/onestream.png" className="onestream" alt="OneStream" />
					</div>
					<p>{t("onestream:content")}</p>
					<p>{t("onestream:content2")}</p>
				</div>
			</div>
			<div></div>
			<style jsx>{`
				p {
					text-align: justify;
				}
				.onestream {
					width: 250px;
				}
				.card {
					margin: 0 0 75px 0;
					padding: 50px 0;
				}
			`}</style>
		</div>
	);
};

export default OneStream;
