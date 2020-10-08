import { useEffect, useState, useContext } from "react"
import { Link } from "react-scroll"
import useTranslation from "next-translate/useTranslation"
import Hamburger from "./hamburger"
import { TabContext } from "../context/tabContext"

const Header = (props) => {
	useEffect(() => {
		window.addEventListener("scroll", resizeHeaderOnScroll)
	}, [])

	function resizeHeaderOnScroll() {
		const distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 50,
			headerEl = document.getElementById("header")

		if (distanceY > shrinkOn) {
			headerEl.classList.add("smaller")
		} else {
			headerEl.classList.remove("smaller")
		}
	}
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { t, lang } = useTranslation()
	const [activeTab, setActiveTab] = useContext(TabContext)
	const handleTabLinkClick = (activeTab) => {
		setIsMenuOpen(false)
		setActiveTab(activeTab)
	}
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
					<li>
						<Link
							activeClass="active"
							spy={true}
							smooth={true}
							offset={-70}
							onClick={() => setIsMenuOpen(false)}
							duration={500}
							to="onestream"
						>
							{t("header:oneStream")}
						</Link>
					</li>
					<li className="dropdown">
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
						<ul className="dropdown-menu">
							<li>
								<Link
									activeClass="active"
									spy={false}
									smooth={true}
									offset={-70}
									onClick={() => handleTabLinkClick(1)}
									duration={500}
									to="about"
								>
									{t("header:vision")}
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									spy={false}
									smooth={true}
									offset={-70}
									onClick={() => handleTabLinkClick(2)}
									duration={500}
									to="about"
								>
									{t("header:mission")}
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									spy={false}
									smooth={true}
									offset={-70}
									onClick={() => handleTabLinkClick(3)}
									duration={500}
									to="about"
								>
									{t("header:team")}
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									spy={false}
									smooth={true}
									offset={-70}
									onClick={() => handleTabLinkClick(4)}
									duration={500}
									to="about"
								>
									{t("header:whyUs")}
								</Link>
							</li>
							{/* <li>
								<Link
									activeClass="active"
									spy={false}
									smooth={true}
									offset={-70}
									onClick={() => handleTabLinkClick(5)}
									duration={500}
									to="about"
								>
									{t("header:references")}
								</Link>
							</li> */}
							<li>
								<Link
									activeClass="active"
									spy={false}
									smooth={true}
									offset={-70}
									onClick={() => handleTabLinkClick(6)}
									duration={500}
									to="about"
								>
									{t("header:news")}
								</Link>
							</li>
							<li>
								<Link
									activeClass="active"
									spy={false}
									smooth={true}
									offset={-70}
									onClick={() => handleTabLinkClick(7)}
									duration={500}
									to="about"
								>
									{t("header:downloads")}
								</Link>
							</li>
						</ul>
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
	)
}

export default Header
