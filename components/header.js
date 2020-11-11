import { useEffect, useState, useContext } from "react"
import { Link } from "react-scroll"
import { FormattedMessage } from "react-intl"
import Hamburger from "./hamburger"
import { TabContext } from "../context/tabContext"
import LanguageSwitcher from "./LanguageSwitcher"

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
							<FormattedMessage
								defaultMessage="OneStream"
								id="header:oneStream"
							/>
						</Link>
					</li>
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
							<FormattedMessage
								defaultMessage="Our services"
								id="header:services"
							/>
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
									<FormattedMessage
										defaultMessage="Finance transformation"
										id="header:financeTransformation"
									/>
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
									<FormattedMessage
										defaultMessage="Business process management"
										id="header:businessProcessManagement"
									/>
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
									<FormattedMessage
										defaultMessage="Interim management"
										id="header:interimManagement"
									/>
								</Link>
							</li>
						</ul>
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
							<FormattedMessage defaultMessage="About us" id="header:about" />
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
									<FormattedMessage
										defaultMessage="Vision"
										id="header:vision"
									/>
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
									<FormattedMessage
										defaultMessage="Mission"
										id="header:mission"
									/>
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
									<FormattedMessage
										defaultMessage="Our Team"
										id="header:team"
									/>
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
									<FormattedMessage defaultMessage="Why Us" id="header:whyUs" />
								</Link>
							</li>
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
									<FormattedMessage defaultMessage="News" id="header:news" />
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
									<FormattedMessage
										defaultMessage="Useful Resources"
										id="header:downloads"
									/>
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
							to="references"
						>
							<FormattedMessage
								defaultMessage="References and clients"
								id="header:references"
							/>
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
							<FormattedMessage defaultMessage="Contact" id="header:contact" />
						</Link>
					</li>
					<li>
						<LanguageSwitcher />
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
