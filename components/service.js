import { Link } from "react-scroll";
import ReactHtmlParser from "react-html-parser";

export default function Service({ title, img, description, href }) {
	return (
		<Link
			activeClass="active"
			spy={true}
			smooth={true}
			offset={-70}
			duration={500}
			className="service"
			to={href}
		>
			<div className="service-img">
				<img src={img} alt={title} />
			</div>
			<div className="service-title">
				<h2>{title}</h2>
			</div>
			<div className="service-description">
				<p>{ReactHtmlParser(description)}</p>
			</div>

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
			`}</style>
		</Link>
	);
}
