import { Link, animateScroll as scroll } from "react-scroll";

export default function Service({ title, img, description, href }) {
    return (
        <div className="service">
            <Link
                activeClass="active"
                spy={true}
                smooth={true}
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
        </div>
    )
}