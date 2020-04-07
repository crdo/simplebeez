import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function Hero({ content, children }) {
    return (
        <div className="hero container">
            <div className="claim"><h1>{children}</h1>
                <p>{content}</p>
            </div>
            <div className="stripe"></div>
            <div className="rectangle">
                <div>
                    <h2 className="lead">
                        Unaveni zdlouhavým
                    budgetováním?<br />Zajímá vás jak
                    to dělat jinak?
                            </h2>
                    <Link
                        className="link"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                        to="finance-transformation">
                        Zjistit více <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div>
            </div>
            <style jsx>{`
            .hero {
                color: white;
                height: 100vh;
                display: flex;
                padding-top: 97px;
                height: 100vh;
                overflow: hidden;
            }

            :global(.link) {
                color: #f4ae9c;
                cursor: pointer;
            }

            .claim {
                flex-basis: 50%;
                padding-top: 50px;
            }

            :global(.link svg) {
                width: 7px;
            }

            .claim p {
                width: 75%;
            }

            h1 {
                font-size: 70px;   
                line-height: 1.3;            
            }

            @media (min-width: 1024px) {
                h1 {
                    font-size: 34px;
                }
            }

            @media (min-width: 1200px) {
                h1 {
                font-size: 80px;   
                margin-top: 100px;
                line-height: 1.3;             
                }
            }

            p {
                font-size: 22px;
            }

            h2 {
                font-size: 25px;
                font-weight: normal;
                margin-top: 0;
            }

            .stripe {
                    flex-basis: 10%;
                    background: rgba(244, 174, 156, .75);
                    transform: skew(-21deg);  
                    z-index: -1;
            }
            .rectangle { 
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                flex-basis: 40%;
                padding-bottom: 100px;
                margin-left: 50px;
            }
            `}</style>
        </div>
    )
}