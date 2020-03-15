export default function Hero({ heading, content }) {
    return (
        <div className="hero container">
            <div><h1>{heading}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}