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
                    <li className="dropdown">
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            onClick={() => setIsMenuOpen(false)}
                            duration={500}
                            to="services">
                            Naše služby
                        </Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsMenuOpen(false)}
                                    offset={-60}
                                    duration={500}
                                    to="finance-transformation">
                                    Transformace financí
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsMenuOpen(false)}
                                    offset={-60}
                                    duration={500}
                                    to="business-process-management">
                                    Business process management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsMenuOpen(false)}
                                    offset={-60}
                                    duration={500}
                                    to="interim-management">
                                    Interim management
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            onClick={() => setIsMenuOpen(false)}
                            duration={500}
                            to="about">
                            O nás
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
                            Kontakt
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            onClick={() => setIsMenuOpen(false)}
                            duration={500}
                            to="kontakt">
                            EN
                        </Link>
                    </li> */}
                </ul>
                <Hamburger isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
            <style jsx>{`
                .dropdown {
                    position: relative;
                }
                
                @media (min-width: 1024px) {
                    .dropdown-menu {
                        position: absolute;
                        top: 25px;
                        display: none;
                        padding: none;
                        background: rgba(0,0,0,0.75);
                    }

                    .dropdown-menu li {
                        text-align: left;
                        margin: 15px 0; 
                    }

                    :global(.dropdown-menu li a) {
                        text-align: left;
                        margin-left: 0 !important;  
                        white-space: nowrap;
                    }

                    .dropdown:hover .dropdown-menu {
                        display: block;
                        
                    }
                }
            `}</style>
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