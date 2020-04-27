import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { i18n, withTranslation } from "../i18n";
import Hamburger from "./hamburger";

const Header = (props) => {
	useEffect(() => {
		window.addEventListener("scroll", resizeHeaderOnScroll);
	}, []);

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
				<div className="logo">
					<a href="/">
						<img src="logo.svg" alt="SimpleBEEZ" />
					</a>
				</div>
				<ul className={"navigation " + (isMenuOpen && "is-open")}>
					<li className="dropdown">
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-60}
							onClick={() => setIsMenuOpen(false)}
							duration={500}
							to="services"
						>
							{props.t("services")}
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
									to="finance-transformation"
								>
									{props.t("financeTransformation")}
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
									to="business-process-management"
								>
									{props.t("businessProcessManagement")}
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
									to="interim-management"
								>
									{props.t("interimManagement")}
								</Link>
							</li>
						</ul>
					</li>
					<li className="button">
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							onClick={() => setIsMenuOpen(false)}
							duration={500}
							to="downloads"
						>
							{props.t("usefulResources")}
						</Link>
					</li>
					<li>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							onClick={() => setIsMenuOpen(false)}
							duration={500}
							to="about"
						>
							{props.t("about")}
						</Link>
					</li>
					<li>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							onClick={() => setIsMenuOpen(false)}
							duration={500}
							to="kontakt"
						>
							{props.t("contact")}
						</Link>
					</li>
					<li>
						<a
							onClick={() =>
								i18n.changeLanguage(i18n.language === "en" ? "cs" : "en")
							}
						>
							{props.t("switchLanguage")}
						</a>
					</li>
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
						left: 10px;
						display: none;
						padding: none;
						padding-left: 20px;
						background: rgba(0, 0, 0, 0.85);
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
					:global(header .button a) {
						background: var(--primary);
						padding: 7px 15px !important;
						color: black;
					}
					:global(header .button a:hover) {
						color: black;
					}
				}
			`}</style>
		</header>
	);
};

Header.getInitialProps = async () => {
	return {
		namespacesRequired: ["header"],
	};
};

export default withTranslation("header")(Header);
