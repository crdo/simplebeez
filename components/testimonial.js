export default function Testimonial({ person, role, company, text }) {
	return (
		<div className="testimonial">
			<div>
				<div className="person">{person}</div>
				<div className="role">{role}</div>
				<div className="company">{company}</div>
			</div>
			<div>
				<p>{text}</p>
			</div>
			<style jsx>{`
				.testimonial {
					margin-bottom: 50px;
				}

				.testimonial > div {
					margin-bottom: 30px;
				}
				.person,
				.company {
					font-weight: bold;
				}
				p {
					text-align: justify;
					margin-top: 0;
				}
				@media only screen and (min-width: 768px) {
				}
				@media only screen and (min-width: 1024px) {
					.testimonial {
						display: flex;
					}
					 {
						flex-basis: 50%;
					}
				}
			`}</style>
		</div>
	);
}
