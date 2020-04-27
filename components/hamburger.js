export default function Hamburger({ isOpen, setIsMenuOpen }) {
	return (
		<button
			className={"hamburger hamburger--collapse " + (isOpen && "is-active")}
			onClick={() => setIsMenuOpen(!isOpen)}
			type="button"
		>
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
		</button>
	);
}
