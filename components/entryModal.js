import { useState } from "react"
import Modal from "react-modal"
import DownloadForm from "./download-form"
import { FormattedMessage } from "react-intl"

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
}

const EntryModal = ({ fileName, children, filePath }) => {
	const [modalIsOpen, setIsOpen] = useState(true)
	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}
	return (
		<div>
			<a onClick={openModal}>{children}</a>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<div className="header">
					<h2>
						<FormattedMessage
							defaultMessage="We are evolving"
							id="homepage:evolving"
						/>
					</h2>
					<div className="close" onClick={closeModal}>
						✕
					</div>
				</div>
                <div className="img">
                <img width={600} src="/mug.jpg" alt="Mug" />
                </div>
				<p>
                <FormattedMessage
					defaultMessage="Over last few years, companies around us aim to even accelerate business and finance transformation. They seek for process simplification, new people competencies and modern enabling technologies to be competitive and drive value."
					id="homepage:last"
				/>
                </p>
				<p><FormattedMessage
							defaultMessage="In response, we expand our methodologies and solutions to be your partner for transforming your finance function through people-process-technology driven change and innovations."
							id="homepage:response"
						/>
                </p>
				<p><FormattedMessage
							defaultMessage="With this evolution, we are currently preparing a new website. This will reflect our current DNA, commitment and service / solutions offering."
							id="homepage:evolution"
						/>
                </p>
			</Modal>
			<style jsx>{`
				a {
					color: #f4ae9c;
					cursor: pointer;
				}
				.close {
					cursor: pointer;
					font-size: 20px;
					margin-left: 30px;
				}
				.header {
					display: flex;
					justify-content: space-between;
					/* align-items: center; */
					margin-bottom: 30px;
				}
				h2 {
					margin: 0;
				}
                img {
                    max-width: 100%;
                }
                .img {
                    text-align: center;
                }
			`}</style>
		</div>
	)
}

export default EntryModal
