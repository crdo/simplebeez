import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel() {
    return (
        <Carousel interval={5000} infiniteLoop={true} autoPlay={true} transitionTime={1000} showArrows={false} showStatus={false} showThumbs={false}>
            <div>
                <h2>
                    Unaveni zdlouhavým
                    budgetováním?<br />Zajímá vás jak
                    to dělat jinak?
                            </h2>
                <Link
                    className="link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="finance-transformation">
                    Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div>
                <h2>
                    Přemýšlíte o transformaci
                    vašeho finančního oddělení?
                            </h2>
                <Link
                    className="link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="finance-transformation">
                    Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div>
                <h2>
                    Toužíte po skutečném
                    finančním byznys partneringu?
                    A pořád tam nejste?
                            </h2>
                <Link
                    className="link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="finance-transformation">
                    Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div>
                <h2>
                    Ambice na větší projekt, ale
                    nemáte na to ty správné lidi?</h2>
                <Link
                    className="link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="interim-management">
                    Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div>
                <h2>
                    Chybí vám zkušený seniorní
                    člověk, který vám pomůže v
                    náročném období?
                    </h2>
                <Link
                    className="link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="interim-management">
                    Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div>
                <h2>
                    Chcete optimalizovat interní
                    procesy, které Vás zpomalují a
                    otravují?
                    </h2>
                <Link
                    className="link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="business-process-management">
                    Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div>
                <h2>
                    Čeká Vás implementace
                    nového ERP řešení a už teď
                    máte obavy?
                    </h2>
                <Link
                    className="link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="finance-transformation">
                    Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div>
                <h2>
                    Chcete dostat procesně i
                    systémově pod kontrolu vaše
                    řízení výdajů firmy?
                    </h2>
                <Link
                    className="link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="business-process-management">
                    Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
        </Carousel>
    );
};


export default function Hero() {
    return (
        <div className="hero container">
            <div className="claim"><h1><span>Váš&nbsp;<span className="triangle">partner</span><br />pro&nbsp;transformaci<br />financí</span></h1>
                <p>Jednodušší, chytřejší, smysluplná řešení.<br />Spojujeme lidi, procesy a technologie.</p>
            </div>
            <div className="stripe"></div>
            <div className="rectangle">
                <div className="skewed">
                    <DemoCarousel />
                </div>
            </div>
            <style jsx>{`
            .hero {
                color: white;
                height: 100vh;
                display: flex;
                flex-direction: column;
                padding-top: 97px;
                height: 100vh;
            }

            .claim {
                flex: 1 0 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                text-align: center;
            }

            h1 {
                font-size: 25px; 
                line-height: 1.3;           
            }

            h2 {
                font-size: 14px;
                font-weight: normal;
                margin-top: 0;
            }

            p {
                font-size: 14px;
            }

            .stripe {
                display: none;
                flex: 0 0 125px;
                background: rgba(244, 174, 156, .75);
                transform: skew(-21deg);  
                z-index: -1;
            }

            .rectangle { 
                flex: 1 0 0;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                margin-bottom: 20px;
            }

            .triangle:after {
                right: -25px;
                top: 15px;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 13px solid #f4ae9c;
            }

            @media only screen and (min-width: 321px) {
                h1 {
                    font-size: 30px; 
                }
                p, h2 {
                    font-size: 16px;
                }
            }

            @media only screen and (min-width: 768px) {
                h1 {
                    font-size: 40px; 
                }
                p, h2 {
                    font-size: 20px;
                }
                .triangle:after {
                    right: -30px;
                    top: 20px;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 17px solid #f4ae9c;
                }
            }

            @media only screen and (min-width: 1025px) {
                h1 {
                    font-size: 40px; 
                    margin-top: 15%;
                }
                p, h2 {
                    font-size: 20px;
                }

                .hero {
                    flex-direction: row;
                }

                .claim {
                    text-align: left;
                }
                .stripe {
                    display: block;
                }
                .rectangle {
                    width: 20%;
                    margin-bottom: 30px;
                }
                .triangle:after {
                    right: -30px;
                    top: 23px;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 17px solid #f4ae9c;
                }
            }

            @media only screen and (min-width: 1300px) {
                h1 {
                    font-size: 65px; 
                    margin-top: 15%;
                    margin-bottom: 10px;
                }
                p, h2 {
                    font-size: 22px;
                }
                .triangle:after {
                    right: -55px;
                    top: 35px;
                    border-left: 20px solid transparent;
                    border-right: 20px solid transparent;
                    border-top: 32px solid #f4ae9c;
                }
            }

            .skewed {
                background: rgba(0, 0, 0, .5);
                padding: 20px;
                position: relative;
            }



            :global(.link svg) {
                width: 7px;
            }
            
            :global(.link) {
                color: #f4ae9c;
                cursor: pointer;
            }
            `}</style>
        </div>
    )
}