export default function ServiceDetail({ service }) {
    const { title, problems, logo, claim, background, solutions, id } = service;
    return (
        <div id={'service-' + id} className="spacing-wrapper">
            <div className="card">
                <div className="container">
                    <div className="service-detail">
                        <h1>{title}</h1>
                        <div className="flex">
                            <div className="service-detail-problem">
                                <h2>Common Challenges</h2>
                                {problems.map(p => (
                                    <p>{p}</p>
                                ))}
                            </div>
                            <div className="service-detail-img">
                                <img src={logo} alt={title} />
                            </div>
                        </div>
                        <div className="service-detail-claim">
                            {claim}
                        </div>
                        <div className="flex">
                            <div className="service-detail-background">
                                <img src={background} alt={title} />
                            </div>
                            <div className="service-detail-solutions">
                                <h2>How we can help</h2>
                                <ul>
                                    {solutions.map((s, index) => (
                                        <li key={index} className="triangle"><p>{s}</p></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}