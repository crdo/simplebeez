import Service from "./service";
import ServiceDetail from "./service-detail";

const data = require("../data/services.json");

export default function Services() {
    return (
        <div className="services">
            <div className="spacing-wrapper">
                <div className="card">
                    <div className="container">
                        <h1 className="underlined center">
                            Services
                </h1>
                        <br />
                        <p className="center">Our vision and desire are to help companies fulfill their visions, build their growth and sustainability on solid technological process foundations and above all to build an environment where trust, cooperation and effective communication between people and teams form the basis for creating added value.</p>
                        <div className="services-list">
                            <Service title="Finance Transformation" href="service-0" img="finance-transformations.svg" description="We stand by your side during the journey of finance transformation and associated implementations of IT solutions and process work-flows. We contribute to a definition of a transformation concept and strategy, we help to design and choose the right solutions, not limited to IT, and oversee the implementation to ensure success." />
                            <Service title="Business Process Management" href="service-1" img="business-process-management.svg" description="We implement effective Business Process Management (BPM) and re-design your processes for upcoming transformations and automations (“order to cash”, “procure to pay” and “record to report”)." />
                            <Service title="Interim Management" href="service-2" img="interim-management.svg" description="We work with experienced professionals, who will support your team and take the lead in challenging times in core business areas such as finance, IT, sales, marketing, HR and production." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-details">
                {data.services.map(s => (
                    <ServiceDetail service={s} />
                ))}
            </div>
        </div>
    )
}   