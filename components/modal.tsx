import { useState } from 'react'
import Modal from 'react-modal';
import DownloadForm from './download-form';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default function FileDownloadModal({ fileName, children, filePath }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <a onClick={openModal}>{children} {fileName}</a>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >

                <div className="header">
                    <h2>Soubory ke stažení</h2>
                    <div className="close" onClick={closeModal}>✕</div>
                </div>
                <DownloadForm fileName={fileName} filePath={filePath} />
            </Modal>
            <style jsx>{`
                .flex {
                    justify-content: space-between;
                }
                .flex input {
                    width: 300px;
                    max-width: 49%;
                }
                input:not([type="checkbox"]) {
                    width: 100%;
                    color: #393939;
                }
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
                button {
                    display: block;
                    width: 100%;
                    cursor: pointer;
                }
                .gdpr {
                    margin-bottom: 30px;
                }
            `}</style>
        </div>
    )
}