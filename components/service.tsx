import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Service({ title, img, description, href }) {
    return (
        <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="service"
            to={href}>
            {img &&
                <div className="service-img">
                    <img src={img} alt={title} />
                </div>
            }
            {title &&
                <div className="service-title">
                    <h2>{title}</h2>
                </div>
            }
            {description &&
                <div className="service-description">
                    <p>{description}</p>
                </div>
            }

            {/* <a className="link">Zjistit více <FontAwesomeIcon icon={faChevronRight} /></a> */}

            <style global jsx>{`
                .service {
                    flex-direction: column;
                    text-align: center;
                    cursor: pointer;
                    flex-basis: 100%;
                    padding: 30px;
                    display: flex;
                }

                .link {
                    margin-top: auto;
                }

                .service:hover {
                    background-color: #dedede;
                }

                @media (max-width: 1024px) {
                    .service {
                        padding: 20px;
                    }
                }
                a 
            `}</style>
        </Link>
    )
}