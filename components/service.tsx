import { Link, animateScroll as scroll } from "react-scroll";

export default function Service({ title, img, description, href }) {
    return (
        <div className="service">
            <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
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
            </Link>
            <style jsx>{`
                .service {
                    flex-direction: column;
                    text-align: center;
                    cursor: pointer;
                    flex-basis: 100%;
                    padding: 30px;
                    display: flex;
                }

                .service:hover {
                    background-color: #dedede;
                }

                @media (max-width: 1024px) {
                    .service {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    )
}