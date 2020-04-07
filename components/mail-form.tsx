import React from 'react'
import useSendGrid from '../hooks/useSendGrid'

export default function MailForm() {
    const { handleOnSubmit, handleOnChange, status, inputs } = useSendGrid();

    return (
        <main>
            <form onSubmit={handleOnSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                    required
                    value={inputs?.email ?? ''}
                    placeholder="E-mail"
                />
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleOnChange}
                    required
                    value={inputs?.name ?? ''}
                    placeholder="Celé jméno"
                />
                <textarea
                    id="message"
                    name="message"
                    onChange={handleOnChange}
                    required
                    value={inputs?.message ?? ''}
                    placeholder="Zpráva"
                />
                <button type="submit" disabled={status.submitting}>
                    {!status.submitting
                        ? !status.submitted
                            ? 'Send'
                            : 'Sent'
                        : 'Sending...'}
                </button>
            </form>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
                <div className="success">{status.info.msg}</div>
            )}
        </main>
    )
}