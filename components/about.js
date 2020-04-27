import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { withTranslation } from "../i18n";
import ReactHtmlParser from "react-html-parser";

const About = (props) => {
	const [activeTab, setActiveTab] = useState(1);
	const [expand, setExpand] = useState({ martin: false, david: false });
	return (
		<div className="spacing-wrapper" id="about">
			<div className="card">
				<div className="container">
					<div className="about">
						<h1>{props.t("title")}</h1>
						<nav>
							<ul>
								<li
									className={activeTab == 1 && "active"}
									onClick={() => setActiveTab(1)}
								>
									{props.t("vision.heading")}
								</li>
								<li
									className={activeTab == 2 && "active"}
									onClick={() => setActiveTab(2)}
								>
									{props.t("mission.heading")}
								</li>
								<li
									className={activeTab == 3 && "active"}
									onClick={() => setActiveTab(3)}
								>
									{props.t("whyUs.heading")}
								</li>
							</ul>
						</nav>
						{activeTab == 1 && (
							<div className="tab">
								<h2>{props.t("vision.whoWeAre")}</h2>
								<p>{props.t("vision.whoWeAreDescription")}</p>
								<h2>{props.t("vision.optimiticRealists")}</h2>
								<p>{props.t("vision.optimiticRealistsDescription")}</p>
								<h2>{props.t("vision.consistency")}</h2>
								<p>{props.t("vision.consistencyDescription")}</p>
								<h2>{props.t("vision.meaning")}</h2>
								<p>{props.t("vision.meaningDescription")}</p>
							</div>
						)}
						{activeTab == 2 && (
							<div className="tab">
								<h2>{props.t("mission.reality")}</h2>
								<p>{ReactHtmlParser(props.t("mission.realityDescription"))}</p>
								<p>{ReactHtmlParser(props.t("mission.realityDescription2"))}</p>
								<h2>{props.t("mission.better")}</h2>
								<p>{props.t("mission.betterDescription")}</p>
							</div>
						)}
						{activeTab == 3 && (
							<div className="tab">
								<h2>{props.t("whyUs.title")}</h2>
								<ul>{ReactHtmlParser(props.t("whyUs.reasons"))}</ul>
							</div>
						)}
					</div>
					<div className="profile-list">
						<div className="profile">
							<div className="profile-img">
								<img src="/martin.jpg" alt="Martin Prášek" />
							</div>
							<div className="profile-text">
								<h3>
									{ReactHtmlParser(props.t("martin.title"))}
									<a
										target="_blank"
										href="https://www.linkedin.com/in/martin-prášek-cma-8109ba18/"
									>
										<FontAwesomeIcon className="linkedin" icon={faLinkedinIn} />
									</a>
								</h3>
								<p>{ReactHtmlParser(props.t("martin.description"))}</p>
								<p>
									{ReactHtmlParser(props.t("martin.description2"))}{" "}
									{!expand.martin && (
										<a
											onClick={() =>
												setExpand((prevState) => ({
													...prevState,
													martin: !expand.martin,
												}))
											}
										>
											{expand.martin ? props.t("less") : props.t("more")}
										</a>
									)}
								</p>
								{expand.martin && (
									<>
										<p>
											{ReactHtmlParser(props.t("martin.descriptionExtended"))}
										</p>
										<p>
											{ReactHtmlParser(props.t("martin.descriptionExtended2"))}
										</p>
										<p>
											{ReactHtmlParser(props.t("martin.descriptionExtended3"))}{" "}
											{expand.martin && (
												<a
													onClick={() =>
														setExpand((prevState) => ({
															...prevState,
															martin: !expand.martin,
														}))
													}
												>
													{expand.martin ? props.t("less") : props.t("more")}
												</a>
											)}
										</p>
									</>
								)}
							</div>
						</div>
						<div className="profile">
							<div className="profile-img">
								<img src="/david.jpg" alt="David Štěpán" />
							</div>
							<div className="profile-text">
								<h3>
									{ReactHtmlParser(props.t("david.title"))}
									<a
										target="_blank"
										href="https://www.linkedin.com/in/david-stepan-fcca-2708661/"
									>
										<FontAwesomeIcon className="linkedin" icon={faLinkedinIn} />
									</a>
								</h3>
								<p>{ReactHtmlParser(props.t("david.description"))}</p>
								<p>
									{ReactHtmlParser(props.t("david.description2"))}{" "}
									{!expand.david && (
										<a
											onClick={() =>
												setExpand((prevState) => ({
													...prevState,
													david: !expand.david,
												}))
											}
										>
											{expand.david ? props.t("less") : props.t("more")}
										</a>
									)}
								</p>
								{expand.david && (
									<>
										<p>
											{ReactHtmlParser(props.t("david.descriptionExtended"))}
										</p>
										<p>
											{ReactHtmlParser(props.t("david.descriptionExtended2"))}
										</p>
										<p>
											{ReactHtmlParser(props.t("david.descriptionExtended3"))}{" "}
											{expand.david && (
												<a
													onClick={() =>
														setExpand((prevState) => ({
															...prevState,
															david: !expand.david,
														}))
													}
												>
													{expand.david ? props.t("less") : props.t("more")}
												</a>
											)}
										</p>
									</>
								)}
							</div>
						</div>
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
					color: #f4ae9c;
					cursor: pointer;
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
					flex: 0 0 65%;
					background: #393939;
					color: white;
					padding: 40px;
				}
				.profile-text p {
					text-align: justify;
				}
				img {
					min-height: 100%;
					min-width: 100%;
					max-width: 100%;
					-o-object-fit: cover;
					object-fit: cover;
				}
				nav ul {
					display: flex;
					background: black;
					color: white;
					margin-bottom: 30px;
				}
				nav li {
					margin: 20px 15px;
					font-size: 17px;
					cursor: pointer;
				}

				@media (min-width: 1024px) {
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
				.active {
					position: relative;
				}

				.active:after,
				nav li:hover:after {
					content: "";
					display: block;
					position: absolute;
					bottom: -2px;
					height: 2px;
					width: 100%;
					background: #f4ae9c;
				}

				.tab {
					padding: 40px;
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
	);
};

About.getInitialProps = async () => {
	return {
		namespacesRequired: ["about"],
	};
};

export default withTranslation("about")(About);
