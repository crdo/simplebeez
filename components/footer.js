import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { useIntl, FormattedMessage } from "react-intl"

import FileDownloadModal from "./modal"
import MailForm from "./mail-form"

const Footer = () => {
	const intl = useIntl()
	return (
		<footer id="kontakt">
			<div className="container flex">
				<div className="address">
					<address>
						<h2>SIMPLEBEEZ s.r.o.</h2>
						Zaječická 836/9, Čimice, 184 00 Praha 8 <br />
						Tel: +420 602 496 585 <br />
						Tel: +420 602 166 975 <br />
						<FormattedMessage defaultMessage="ID" id="footer:id" />: 08885516
						<br />
						E-mail: <a href="mailto:info@simplebeez.com">info@simplebeez.com</a>
					</address>
					<div className="social">
						<a target="_blank" href="https://www.facebook.com/SimpleBeez/">
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a
							target="_blank"
							href="https://www.instagram.com/simplebeez_consulting/"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							target="_blank"
							href="https://www.youtube.com/channel/UCOdxnSueAReg3Zm2x5IfqSA"
						>
							<FontAwesomeIcon icon={faYoutube} />
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/company/simplebeez-s-r-o/"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a target="_blank" href="https://twitter.com/simplebeez">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</div>
				</div>
				<div>
					<h2>
						<FormattedMessage
							defaultMessage="Downloads"
							id="footer:downloads"
						/>
					</h2>
					<div className="downloads">
						<FileDownloadModal
							fileName="Simplebeez_CF_v8.0.xlsx"
							filePath="/Simplebeez_CF_v8.0.xlsx"
						>
							<FontAwesomeIcon icon={faFileExcel} />
							<FormattedMessage
								defaultMessage="Tool for operating cash flow planning"
								id="footer:cashflowTool"
							/>
						</FileDownloadModal>
						<div>
							<a
								href={intl.formatMessage({
									id: "header:privacyPolicySource",
									defaultMessage: "/Privacy_Policy_ENG.pdf",
								})}
							>
								<FontAwesomeIcon icon={faFilePdf} /> Privacy Policy
							</a>
						</div>
						<div>
							<a href="/OneStream overview.pdf" target="_blank">
								<FontAwesomeIcon icon={faFilePdf} /> OneStream Overview
							</a>
						</div>
						<div>
							<a href="/OneStream-Brochure.pdf" target="_blank">
								<FontAwesomeIcon icon={faFilePdf} /> OneStream Brochure
							</a>
						</div>
						<div>
							<a
								href={intl.formatMessage({
									id: "onestream:it4fin.slidesSource",
									defaultMessage: "/IT4FIN_slides_selection_english.ppsx",
								})}
								target="_blank"
							>
								<FontAwesomeIcon icon={faFilePdf} />{" "}
								<FormattedMessage
									defaultMessage="Slides"
									id="onestream:it4fin.slides"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="contact-form">
					<h2>
						<FormattedMessage
							defaultMessage="Excited or have questions?"
							id="footer:excited"
						/>
					</h2>
					<MailForm />
				</div>
			</div>
			<style global jsx>{`
				.social {
					font-size: 25px;
				}
			`}</style>
		</footer>
	)
}

export default Footer
