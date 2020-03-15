export default function Hero({ heading, content }) {
    return (
        <div className="container">
            <div className="hero">
                <div><h1>{heading}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}