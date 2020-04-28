import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import useTranslation from "next-translate/useTranslation";
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
	const { t, lang } = useTranslation();
	console.log(lang);
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
							{t("header:services")}
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
									{t("header:financeTransformation")}
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
									{t("header:businessProcessManagement")}
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
									{t("header:interimManagement")}
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
							{t("header:usefulResources")}
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
							{t("header:about")}
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
							{t("header:contact")}
						</Link>
					</li>
					<li>
						<a href={lang == "cs" ? "en" : "/"}>{t("header:switchLanguage")}</a>
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

export default Header;
