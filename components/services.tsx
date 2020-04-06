import Service from "./service";
import ServiceDetail from "./service-detail";

const data = require("../data/services.json");

export default function Services() {
    return (
        <div className="services">
            <ServiceList />
            <div className="services-details">
                {data.services.map(s => (
                    <ServiceDetail service={s} />
                ))}
            </div>
        </div>
    )
}

function ServiceList() {
    return (
        <div className="spacing-wrapper" id="services">
            <div className="card">
                <div className="container">
                    <h1 className="underlined center">
                        Services
                </h1>
                    <br />
                    <p>Naší vizí a přáním je pomáhat firmám naplňovat jejich vize, stavět jejich růst a udržitelnost na pevných technologicko-procesních základech. A hlavně budovat prostředí, kde důvěra, spolupráce a efektivní komunikace mezi lidmi a týmy tvoří základ pro vytváření přidané hodnoty.</p>
                    <div className="service-list">
                        <Service title="Transformace Financí" href="finance-transformation" img="finance-transformations.svg" description="Stojíme na straně Vaší společnosti v procesu transformace a implementace nových IT řešení a procesních work-flow. Přispíváme v procesu specifikace konceptu transformace, pomáháme navrhnout a vybrat vhodná, nejen IT řešení, a dohlížíme na úspěšnou implementaci." />
                        <Service title="Business Process Management" href="business-process-management" img="business-process-management.svg" description="Spolupracujeme se zkušenými profesionály, kteří podpoří Váš tým v klíčových oblastech, jako jsou finance, IT, prodej, marketing, HR a výroba." />
                        <Service title="Interim Management" href="interim-management" img="interim-management.svg" description="Implementujeme efektivní Business Proces Management (BPM) a připravujeme Vaše procesy pro zamýšlené automatizace a transformace (“order to cash”, “procure to pay” a “record to report”)" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .service-list {
                    margin-top: 100px;
                    display: flex;
                    flex-grow: 0;
                }
                
                @media (max-width: 1024px) {
                    .service-list {
                        flex-wrap: wrap;
                    }
                }

                p {
                    max-width: 80%;
                    text-align: center;
                    margin: 0 auto;
                }
            `}</style>
        </div>
    )
}