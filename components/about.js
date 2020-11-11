import { useState, useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { FormattedMessage } from "react-intl"

import Download from "./download"
import { TabContext } from "../context/tabContext"

const About = () => {
	const [activeTab, setActiveTab] = useContext(TabContext)
	const [expand, setExpand] = useState({ martin: false, david: false })
	return (
		<div className="spacing-wrapper" id="about">
			<div className="card">
				<div className="container">
					<div className="about">
						<h1>
							<FormattedMessage defaultMessage="About us" id="about:title" />
						</h1>
						<nav>
							<ul>
								<li
									className={activeTab == 1 && "active"}
									onClick={() => setActiveTab(1)}
								>
									<span>
										<FormattedMessage
											defaultMessage="Our Vision"
											id="about:vision.heading"
										/>
									</span>
								</li>
								<li
									className={activeTab == 2 && "active"}
									onClick={() => setActiveTab(2)}
								>
									<span>
										<FormattedMessage
											defaultMessage="Our Mission"
											id="about:mission.heading"
										/>
									</span>
								</li>
								<li
									className={activeTab == 3 && "active"}
									onClick={() => setActiveTab(3)}
								>
									<span>
										<FormattedMessage
											defaultMessage="Our Team"
											id="about:team.heading"
										/>
									</span>
								</li>
								<li
									className={activeTab == 4 && "active"}
									onClick={() => setActiveTab(4)}
								>
									<span>
										<FormattedMessage
											defaultMessage="Why to contact us"
											id="about:whyUs.heading"
										/>
									</span>
								</li>
								<li
									className={activeTab == 6 && "active"}
									onClick={() => setActiveTab(6)}
								>
									<span>
										<FormattedMessage
											defaultMessage="News"
											id="about:news.heading"
										/>
									</span>
								</li>
								<li
									className={activeTab == 7 && "active"}
									onClick={() => setActiveTab(7)}
								>
									<span>
										<FormattedMessage
											defaultMessage="Useful Resources"
											id="about:downloads.heading"
										/>
									</span>
								</li>
							</ul>
						</nav>
						{activeTab == 1 && (
							<div className="tab">
								<h2>
									<FormattedMessage
										defaultMessage="Who we are"
										id="about:vision.whoWeAre"
									/>
								</h2>
								<p>
									<FormattedMessage
										defaultMessage="Leveraging our different interests, education and professional experience, we are a team that helps companies, and especially their people, to make work more simple, smarter and meaningful. It is a unique combination of our vision, thinking and experience that we believe will enable individuals and teams to be better at what they do."
										id="about:vision.whoWeAreDescription"
									/>
								</p>
								<h2>
									<FormattedMessage
										defaultMessage="Optimistic realists"
										id="about:vision.optimiticRealists"
									/>
								</h2>
								<p>
									<FormattedMessage
										defaultMessage="We are life optimists and we believe that even well established work procedures can be done better. Simple questions like “why do you do it this way” and “does it still make sense” can work wonders. Improvement is often not just about technology. Quite the opposite. We must constantly seek the right combination and balance between people, process and technology."
										id="about:vision.optimiticRealistsDescription"
									/>
								</p>
								<h2>
									<FormattedMessage
										defaultMessage="Consistency wins over intensity"
										id="about:vision.consistency"
									/>
								</h2>
								<p>
									<FormattedMessage
										defaultMessage="We are sportsmen, so we know that even a small pebble in a shoe will feel intolerable over time, grow into a bigger problem, and prevent performing at your best. Until you stop to shake the small stone out, you won't improve speed and maybe you won’t even finish your run. Only long-term and systematic development under professional guidance can guarantee the desired effect. Energy and determination are important prerequisites, but they are usually killed by inconsistency and randomness."
										id="about:vision.consistencyDescription"
									/>
								</p>
								<h2>
									<FormattedMessage
										defaultMessage="Work must make sense"
										id="about:vision.meaning"
									/>
								</h2>
								<p>
									<FormattedMessage
										defaultMessage="We are fathers with families and do not believe in the cliché of the work-life balance. We live only one life and in the long-term it is not possible to compensate one frustration with another satisfaction. Our work must also make sense, and especially if it does not right now, we must work actively and systematically to improve it. The same is applicable to our private life."
										id="about:vision.meaningDescription"
									/>
								</p>
							</div>
						)}
						{activeTab == 2 && (
							<div className="tab">
								<h2>
									<FormattedMessage
										defaultMessage="Reality is not always rosy"
										id="about:mission.reality"
									/>
								</h2>
								<p>
									<FormattedMessage
										defaultMessage="According to research by Gartner, Inc. of 2019 (Hallmarks of winning finance transformations), <b>only 35% of internal departments</b> are <b>satisfied with the support and benefits</b> provided by the company’s finance department. At SIMPLEBEEZ we see an opportunity to improve cooperation and re-focus finance in all customer-oriented activities. Finance departments have a major challenge ahead, as they must maintain current quality in compliance with rules and regulations, while significantly improving their knowledge and support of other key areas of the company."
										id="about:mission.realityDescription"
										values={{
											b: (...chunks) => <b>{chunks}</b>,
										}}
									/>
								</p>
								<p>
									<FormattedMessage
										defaultMessage="At the same time, Gartner further states that <b>7 out of 10 finance transformation projects are unsuccessful</b>. From our point of view, this stems from inefficient use of company resources, lost opportunities, frustration of employees and solution providers, as well as unfulfilled expectations of management and business owners. Our own experiences seem to confirm this trend, which we see as a big opportunity for all of us in the future."
										id="about:mission.realityDescription2"
										values={{
											b: (...chunks) => <b>{chunks}</b>,
										}}
									/>
								</p>
								<h2>
									<FormattedMessage
										defaultMessage="More simple, smarter and meaningful"
										id="about:mission.better"
									/>
								</h2>
								<p>
									<FormattedMessage
										defaultMessage="This trend is one of the main reasons for establishing SIMPLEBEEZ. We see our role not only in eliminating similar failures by focusing on all aspects of such transformations, but also in helping to create new opportunities, improving efficiency and financial performance, and introducing new innovative solutions. In short, we aim to help you do things more simple, smarter and meaningful."
										id="about:mission.betterDescription"
									/>
								</p>
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
											<FormattedMessage
												defaultMessage="Martin Prášek, partner and co-founder"
												id="about:martin.title"
											/>
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
										<p>
											<FormattedMessage
												defaultMessage="Martin is in charge of services provided to support innovative solutions, centralization of back-office functions and to streamline financial and core business processes. His personal specializations are implementation of ERP and CPM solutions, process optimization, strong expertise in P2P process and world-class or custom-built P2P solutions, document management systems, or RPA applications. He will also help you to build shared services operating model or functionally design tools to automate not only finance."
												id="about:martin.description"
												values={{
													b: (...chunks) => <b>{chunks}</b>,
												}}
											/>
										</p>
										<p>
											<FormattedMessage
												defaultMessage="Martin has been working more than 15 years for large international corporations. He is convinced that expected projects or innovative solutions are measured by whether they meet the expectations of affected stakeholders and whether people cooperate and create new values. He has led international teams in dozens of transformation projects linked to finance. He also actively participated in the inception, and later operation, of a global shared service center with customers around the world."
												id="about:martin.description2"
												values={{
													b: (...chunks) => <b>{chunks}</b>,
												}}
											/>{" "}
											{!expand.martin && (
												<a
													onClick={() =>
														setExpand((prevState) => ({
															...prevState,
															martin: !expand.martin,
														}))
													}
												>
													{expand.martin ? (
														<FormattedMessage
															defaultMessage="Less"
															id="about:less"
														/>
													) : (
														<FormattedMessage
															defaultMessage="More"
															id="about:more"
														/>
													)}
												</a>
											)}
										</p>
										<div className={expand.martin ? "show" : "hide"}>
											<p>
												<FormattedMessage
													defaultMessage="Martin has co-founded SIMPLEBEEZ with the vision of a close partnership with clients and a direct role in their transformation initiatives. He wishes to provide companies with comprehensive services ranging from opportunity identification, definition of a transformation concept, provision of expert assistance, and design of concrete solutions all the way to their implementation."
													id="about:martin.descriptionExtended"
													values={{
														b: (...chunks) => <b>{chunks}</b>,
													}}
												/>
											</p>
											<p>
												<FormattedMessage
													defaultMessage="„Everyone has their own professional and life story, emotions and feelings, and expectations of what is and what is not important to us today and in the future. Therefore, to build something innovative, unimaginable, on one hand complex but on the other hand satisfactory and admirable, is not just about the specific tools or technological solutions that contribute to it. It is about connecting different people and their real potential and energy to reach a meaningful goal which is clear and understood by all so they can pull together and achieve it.”"
													id="about:martin.descriptionExtended2"
													values={{
														b: (...chunks) => <b>{chunks}</b>,
													}}
												/>
											</p>
											<p>
												<FormattedMessage
													defaultMessage="Martin likes to spend hours on one of his three bicycles, and is re-energized from visiting new places. He is keen to accept new challenges and push borders. He likes to spend his time with his three children and his partner. If he has any spare time, he relaxes by composing electronic music in his home studio, or spending time taking photos."
													id="about:martin.descriptionExtended3"
													values={{
														b: (...chunks) => <b>{chunks}</b>,
													}}
												/>{" "}
												{expand.martin && (
													<a
														onClick={() =>
															setExpand((prevState) => ({
																...prevState,
																martin: !expand.martin,
															}))
														}
													>
														{expand.martin ? (
															<FormattedMessage
																defaultMessage="Less"
																id="about:less"
															/>
														) : (
															<FormattedMessage
																defaultMessage="More"
																id="about:more"
															/>
														)}
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
											<FormattedMessage
												defaultMessage="David Štěpán, partner and co-founder"
												id="about:david.title"
											/>
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
										<p>
											<FormattedMessage
												defaultMessage="David helps companies transform their finance function and lead people. Over the last 15 years, David has worked not only in the Czech Republic but also in Australia, Romania, and Bulgaria in various positions for various large international corporations.  Most recently, he left his CFO role for a private foreign TV and media company to embark on business in SIMPLEBEEZ. From auditing and accounting, David naturally progressed on to operations, managing critical projects, restructuring firms, and devising and implementing new group practices and systems."
												id="about:david.description"
											/>
										</p>
										<p>
											<FormattedMessage
												defaultMessage="As a born optimist, David finds inspiration everywhere around him. „Every good idea is worth thinking about and starting to change things for the better, even if it requires short-term uncertainty and stepping outside our comfort zone.“ Such conviction and energy David brings to SIMPLEBEEZ. „I will be glad to work with and along those who want to progress and give us a chance to be with them at this transformation.”"
												id="about:david.description2"
											/>{" "}
											{!expand.david && (
												<a
													onClick={() =>
														setExpand((prevState) => ({
															...prevState,
															david: !expand.david,
														}))
													}
												>
													{expand.david ? (
														<FormattedMessage
															defaultMessage="Less"
															id="about:less"
														/>
													) : (
														<FormattedMessage
															defaultMessage="More"
															id="about:more"
														/>
													)}
												</a>
											)}
										</p>
										<div className={expand.david ? "show" : "hide"}>
											<p>
												<FormattedMessage
													defaultMessage="“For me, effective communication and trust among people has always been crucial. Excel may be a great analytics tool, but don’t hide behind it. To be better, we all need to be clear where we are going and why want it. Only then we can start planning and managing it also from a financial point of view.”"
													id="about:david.descriptionExtended"
												/>
											</p>
											<p>
												<FormattedMessage
													defaultMessage="David is convinced that the traditional budgeting process today is severely hitting its limits, as is the traditional „command-control“ management approach. Therefore, he devotes himself to the Beyond Budgeting principles, which he does not hesitate to talk about at any meeting."
													id="about:david.descriptionExtended2"
												/>
											</p>
											<p>
												<FormattedMessage
													defaultMessage="David likes riding two-wheelers, so you can meet him either on a bike in the city and mountains or on a motorbike abroad with a tent, sleeping bag and camera to enjoy the local nature. “Playing sports has taught and shown me a great example of inspiration, passion, commitment, challenges, joy, individual responsibility and teamwork. Yet my wife and two daughters are the best thing that has ever happened to me in this world.”"
													id="about:david.descriptionExtended3"
												/>{" "}
												{expand.david && (
													<a
														onClick={() =>
															setExpand((prevState) => ({
																...prevState,
																david: !expand.david,
															}))
														}
													>
														{expand.david ? (
															<FormattedMessage
																defaultMessage="Less"
																id="about:less"
															/>
														) : (
															<FormattedMessage
																defaultMessage="More"
																id="about:more"
															/>
														)}
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
								<h2>
									<FormattedMessage
										defaultMessage="Why to contact us"
										id="about:whyUs.title"
									/>
								</h2>
								<ul>
									<FormattedMessage
										defaultMessage="<li>We can identify opportunities and objectives of finance transformations.</li><li>We design and deploy bespoke solutions (not only technological) that support new services and innovative practices.</li><li>We manage or support your teams during any necessary period of the transformation project.</li><li>We work with and can provide result-oriented experts with a holistic approach and focus on the benefits for the company as a whole.</li><li>We create an environment for building a bridge between finance, business and IT.</li>"
										id="about:whyUs.reasons"
										values={{
											li: (...chunks) => <li className="triangle">{chunks}</li>,
										}}
									/>
								</ul>
							</div>
						)}
						{activeTab == 6 && (
							<div className="tab">
								<h2>
									<FormattedMessage
										defaultMessage="News"
										id="about:news.title"
									/>
								</h2>
								<p>
									<FormattedMessage
										defaultMessage="SIMPLEBEEZ announced a strategic partnership with OneStream Software. The full version of the press release can be <a>downloaded here</a>."
										id="about:news.content"
										values={{
											a: (...chunks) => (
												<a
													class="underline"
													href="/SIMPLEBEEZ_OneStream_PressRelease_July2020_ENG.pdf"
												>
													{chunks}
												</a>
											),
										}}
									/>
								</p>
								<div>
									<FormattedMessage
										defaultMessage="July 2, 2020"
										id="about:news.date"
									/>
								</div>
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
