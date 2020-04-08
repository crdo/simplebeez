import FileDownloadModal from "./modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

export default function Download() {
    return (
        <div className="download" id="downloads">
            <div className="container">
                <h2>Nástroj na plánování operativního cash flow </h2>
                <div className="button">
                    <FileDownloadModal fileName="Cash flow planning" filePath="/Privacy_Policy_ENG.pdf" >
                        Stáhnout
                    </FileDownloadModal>
                </div>
                <p>Připravili jsme pro Vás srozumitelný model plánování spotřeby a příjmu peněz pro podnikatele ale i samostatně výdělečné osoby. To vše v nejoblíbenějším a nejrozšířenějším analytickém nástroji dnešní doby, v MS Excel.</p>
                <div className="version">verze 1.0</div>
                <div className="date">8. 4. 2020</div>
            </div>
            <style global jsx>{`
            .download {
                background: #393939;
                padding: 60px 0;
                color: white;
            }
            .version {
                color: var(--primary);
            }
            .button a {
                background: var(--primary);
                color: black;
                padding: 10px 30px;
                border-radius: 10px;
                float: right;
                font-size: 20px;
                width: 100%;
                text-align: center;
                margin-bottom: 20px;
            }
            @media only screen and (min-width: 768px) {
                .button a {
                    width: auto;
                    margin-left: 30px;
            }
        `}</style>
        </div>
    )
}