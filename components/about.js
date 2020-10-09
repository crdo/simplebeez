import { useState, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import useTranslation from "next-translate/useTranslation"
import ReactHtmlParser from "react-html-parser"
import Download from "./download"
import { TabContext } from "../context/tabContext"
import Testimonial from "./testimonial"

const About = (props) => {
	const [activeTab, setActiveTab] = useContext(TabContext)
	const [expand, setExpand] = useState({ martin: false, david: false })
	const { t } = useTranslation()
	return (
		<div className="spacing-wrapper" id="about">
			<div className="card">
				<div className="container">
					<div className="about">
						<h1>{t("about:title")}</h1>
						<nav>
							<ul>
								<li
									className={activeTab == 1 && "active"}
									onClick={() => setActiveTab(1)}
								>
									<span>{t("about:vision.heading")}</span>
								</li>
								<li
									className={activeTab == 2 && "active"}
									onClick={() => setActiveTab(2)}
								>
									<span>{t("about:mission.heading")}</span>
								</li>
								<li
									className={activeTab == 3 && "active"}
									onClick={() => setActiveTab(3)}
								>
									<span>{t("about:team.heading")}</span>
								</li>
								<li
									className={activeTab == 4 && "active"}
									onClick={() => setActiveTab(4)}
								>
									<span>{t("about:whyUs.heading")}</span>
								</li>
								{/* <li
									className={activeTab == 5 && "active"}
									onClick={() => setActiveTab(5)}
								>
									<span>{t("about:references.heading")}</span>
								</li> */}
								<li
									className={activeTab == 6 && "active"}
									onClick={() => setActiveTab(6)}
								>
									<span>{t("about:news.heading")}</span>
								</li>
								<li
									className={activeTab == 7 && "active"}
									onClick={() => setActiveTab(7)}
								>
									<span>{t("about:downloads.heading")}</span>
								</li>
							</ul>
						</nav>
						{activeTab == 1 && (
							<div className="tab">
								<h2>{t("about:vision.whoWeAre")}</h2>
								<p>{t("about:vision.whoWeAreDescription")}</p>
								<h2>{t("about:vision.optimiticRealists")}</h2>
								<p>{t("about:vision.optimiticRealistsDescription")}</p>
								<h2>{t("about:vision.consistency")}</h2>
								<p>{t("about:vision.consistencyDescription")}</p>
								<h2>{t("about:vision.meaning")}</h2>
								<p>{t("about:vision.meaningDescription")}</p>
							</div>
						)}
						{activeTab == 2 && (
							<div className="tab">
								<h2>{t("about:mission.reality")}</h2>
								<p>{ReactHtmlParser(t("about:mission.realityDescription"))}</p>
								<p>{ReactHtmlParser(t("about:mission.realityDescription2"))}</p>
								<h2>{t("about:mission.better")}</h2>
								<p>{t("about:mission.betterDescription")}</p>
							</div>
						)}
						{activeTab == 3 && (
							<div className="profile-list">
								<div className="profile">
									<div className="profile-img">
										<img src="/martin.jpg" alt="Martin Prášek" />
									</div>
									<div className="profile-text">
										<h3>
											{ReactHtmlParser(t("about:martin.title"))}
											<a
												target="_blank"
												href="https://www.linkedin.com/in/martin-prášek-cma-8109ba18/"
											>
												<FontAwesomeIcon
													className="linkedin"
													icon={faLinkedinIn}
												/>
											</a>
										</h3>
										<p>{ReactHtmlParser(t("about:martin.description"))}</p>
										<p>
											{ReactHtmlParser(t("about:martin.description2"))}{" "}
											{!expand.martin && (
												<a
													onClick={() =>
														setExpand((prevState) => ({
															...prevState,
															martin: !expand.martin,
														}))
													}
												>
													{expand.martin ? t("about:less") : t("about:more")}
												</a>
											)}
										</p>
										<div className={expand.martin ? "show" : "hide"}>
											<p>
												{ReactHtmlParser(t("about:martin.descriptionExtended"))}
											</p>
											<p>
												{ReactHtmlParser(
													t("about:martin.descriptionExtended2")
												)}
											</p>
											<p>
												{ReactHtmlParser(
													t("about:martin.descriptionExtended3")
												)}{" "}
												{expand.martin && (
													<a
														onClick={() =>
															setExpand((prevState) => ({
																...prevState,
																martin: !expand.martin,
															}))
														}
													>
														{expand.martin ? t("about:less") : t("about:more")}
													</a>
												)}
											</p>
										</div>
									</div>
								</div>
								<div className="profile">
									<div className="profile-img">
										<img src="/david.jpg" alt="David Štěpán" />
									</div>
									<div className="profile-text">
										<h3>
											{ReactHtmlParser(t("about:david.title"))}
											<a
												target="_blank"
												href="https://www.linkedin.com/in/david-stepan-fcca-2708661/"
											>
												<FontAwesomeIcon
													className="linkedin"
													icon={faLinkedinIn}
												/>
											</a>
										</h3>
										<p>{ReactHtmlParser(t("about:david.description"))}</p>
										<p>
											{ReactHtmlParser(t("about:david.description2"))}{" "}
											{!expand.david && (
												<a
													onClick={() =>
														setExpand((prevState) => ({
															...prevState,
															david: !expand.david,
														}))
													}
												>
													{expand.david ? t("about:less") : t("about:more")}
												</a>
											)}
										</p>
										<div className={expand.david ? "show" : "hide"}>
											<p>
												{ReactHtmlParser(t("about:david.descriptionExtended"))}
											</p>
											<p>
												{ReactHtmlParser(t("about:david.descriptionExtended2"))}
											</p>
											<p>
												{ReactHtmlParser(t("about:david.descriptionExtended3"))}{" "}
												{expand.david && (
													<a
														onClick={() =>
															setExpand((prevState) => ({
																...prevState,
																david: !expand.david,
															}))
														}
													>
														{expand.david ? t("about:less") : t("about:more")}
													</a>
												)}
											</p>
										</div>
									</div>
								</div>
							</div>
						)}
						{activeTab == 4 && (
							<div className="tab">
								<h2>{t("about:whyUs.title")}</h2>
								<ul>{ReactHtmlParser(t("about:whyUs.reasons"))}</ul>
							</div>
						)}
						{/* {activeTab == 5 && (
							<div className="tab">
								<h2>Martin Prášek, CMA</h2>
								<Testimonial
									company={t("testimonials:martin1.company")}
									person={t("testimonials:martin1.person")}
									role={t("testimonials:martin1.role")}
									text={t("testimonials:martin1.text")}
								/>
								<Testimonial
									company={t("testimonials:martin2.company")}
									person={t("testimonials:martin2.person")}
									role={t("testimonials:martin2.role")}
									text={t("testimonials:martin2.text")}
								/>
								<Testimonial
									company={t("testimonials:martin3.company")}
									person={t("testimonials:martin3.person")}
									role={t("testimonials:martin3.role")}
									text={t("testimonials:martin3.text")}
								/>
							</div>
						)} */}
						{activeTab == 6 && (
							<div className="tab">
								<h2>{t("about:news.title")}</h2>
								<p>{ReactHtmlParser(t("about:news.content"))}</p>
								<div>{t("about:news.date")}</div>
							</div>
						)}
						{activeTab == 7 && (
							<div className="tab">
								<Download />
							</div>
						)}
					</div>
				</div>
			</div>
			<style jsx>{`
				.about {
					padding: 20px 0;
				}
				h3 {
					font-size: 22px;
					margin-top: 0;
				}
				h3 a {
					vertical-align: middle;
				}
				a {
					color: var(--primary);
					cursor: pointer;
				}
				:global(.hide) {
					opacity: 0;
					transition: all 0.5s ease;
				}
				:global(.show) {
					opacity: 1;
					transition: all 0.5s ease;
				}
				.profile-text :global(.linkedin) {
					width: 22px;
					color: #f4ae9c;
					margin-left: 10px;
				}
				.profile {
					display: flex;
					flex-direction: column;
					padding-bottom: 30px;
				}
				.profile-list {
					padding-bottom: 20px;
				}
				.profile-img {
					flex: 0 0 35%;
					margin-bottom: 30px;
				}
				.profile-text {
					flex: 0 0 calc(65% - 20px);
					background: #393939;
					color: white;
					padding: 40px 30px;
				}
				.profile-text p {
					text-align: justify;
				}
				:global(.underline) {
					text-decoration: underline;
				}
				img {
					min-height: 100%;
					min-width: 100%;
					max-width: 100%;
					-o-object-fit: cover;
					object-fit: cover;
				}
				nav ul {
					background: black;
					color: white;
					margin-bottom: 30px;
					padding: 10px 20px;
				}
				nav li {
					margin: 20px 15px;
					font-size: 17px;
					cursor: pointer;
				}

				@media (min-width: 1024px) {
					nav ul {
						display: flex;
						padding: 0 20px;
					}
					nav li {
						margin: 20px;
					}
					.profile {
						flex-direction: row;
					}

					.profile-img {
						margin-bottom: 0;
					}
					.profile-text {
						margin-left: 20px;
					}
				}
				nav li span {
					position: relative;
				}

				.active span:after,
				nav li:hover span:after {
					content: "";
					display: block;
					position: absolute;
					bottom: -2px;
					height: 2px;
					width: 100%;
					background: #f4ae9c;
				}

				.tab {
					padding: 40px 30px;
					background-color: #dedede;
				}

				.tab h2 {
					margin-top: 0;
					margin-bottom: 10px;
					font-size: 20px;
				}

				.tab p {
					margin-top: 0;
					margin-bottom: 20px;
					text-align: justify;
				}

				.tab ul {
					line-height: 1.75;
				}
			`}</style>
		</div>
	)
}

export default About
