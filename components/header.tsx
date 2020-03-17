import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    useEffect(() => {
        window.addEventListener("scroll", resizeHeaderOnScroll);
    }, [])

    function resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            headerEl = document.getElementById("header");

        if (distanceY > shrinkOn) {
            headerEl.classList.add("smaller");
        } else {
            headerEl.classList.remove("smaller");
        }
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header id="header">
            <div className="container flex">
                <div className="logo"><a href="/"><img src="logo.svg" alt="SimpleBEEZ" /></a></div>
                <ul className={"navigation " + (isMenuOpen && "is-open")}>
                    <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            onClick={() => setIsMenuOpen(false)}
                            offset={-70}
                            duration={500}
                            to="service-0">
                            Finance Transformation
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            onClick={() => setIsMenuOpen(false)}
                            offset={-70}
                            duration={500}
                            to="service-1">
                            Business Process Management
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            onClick={() => setIsMenuOpen(false)}
                            offset={-70}
                            duration={500}
                            to="service-2">
                            Interim Management
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            onClick={() => setIsMenuOpen(false)}
                            duration={500}
                            to="kontakt">
                            Contact
                        </Link>
                    </li>
                </ul>
                <Hamburger isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
        </header>
    )
}

function Hamburger({ isOpen, setIsMenuOpen }) {
    return (
        <button className={"hamburger hamburger--collapse " + (isOpen && "is-active")} onClick={() => setIsMenuOpen(!isOpen)} type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}