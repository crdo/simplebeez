import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import FileDownloadModal from './modal'
import MailForm from './mail-form'

export default function Footer() {
    return (
        <footer id="kontakt">
            <div className="container flex">
                <div className="address">
                    <address>
                        <h2>SIMPLEBEEZ s.r.o.</h2>
                            Zaječická 836/9, Čimice, 184 00 Praha 8 <br />
                            Tel: +420 602 496 585 <br />
                            Tel: +420 602 166 975 <br />
                            IČO: 08885516 <br />
                            E-mail: <a href="mailto:info@simplebeez.com">info@simplebeez.com</a>
                    </address>
                    <div className="social">
                        <a target="_blank" href="https://www.facebook.com/SimpleBeez/"> <FontAwesomeIcon icon={faFacebook} /></a>
                        <a target="_blank" href="https://www.instagram.com/simplebeez_consulting/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCOdxnSueAReg3Zm2x5IfqSA"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a target="_blank" href="https://www.linkedin.com/company/simplebeez-s-r-o/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
                <div>
                    <h2>Ke stažení</h2>
                    <div className="downloads">
                        <FileDownloadModal fileName="Cash flow planning soubor" filePath="/Privacy_Policy_ENG.pdf" >
                            <FontAwesomeIcon icon={faFilePdf} />
                        </FileDownloadModal>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Excited or have a question? Get in touch.</h2>
                    {/* <ContactForm /> */}
                    <MailForm />
                </div>
            </div>
        </footer>
    )
}