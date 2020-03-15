import FontAwesome from 'react-fontawesome'
import ContactForm from './contact-form'

export default function Footer() {
    return (
        <footer id="kontakt">
            <div className="container flex">
                <div className="address">
                    <address>
                        <h2>SIMPLEBEEZ s.r.o.</h2>
                            Zaječická 836/9, Čimice, 184 00 Praha 8 <br />
                            Tel: 606 123 456 <br />
                            ICO: 08885516 <br />
                            E-mail: <a href="mailto:info@simplebeez.com">info@simplebeez.com</a>
                    </address>
                    <div className="social">
                        <a target="_blank" href="https://www.facebook.com/SimpleBeez/"><FontAwesome name="facebook" /></a>
                        <a target="_blank" href="https://www.instagram.com/simplebeez_consulting/"><FontAwesome name="instagram" /></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCOdxnSueAReg3Zm2x5IfqSA"><FontAwesome name="youtube" /></a>
                        <a target="_blank" href="https://www.linkedin.com/company/simplebeez-s-r-o/"><FontAwesome name="linkedin" /></a>
                    </div>
                </div>
                <div className="contact-form">
                    <ContactForm />
                </div>
            </div>
        </footer>
    )
}