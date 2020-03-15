export default function ContactForm() {
    return (
        <form action="https://formspree.io/xvoqgwoz" method="POST">
            <input type="text" placeholder="Full Name" name="name" id="name" required />
            <input type="email" placeholder="E-mail" name="_replyto" id="email" required />
            <textarea placeholder="Message" name="message" id="message" required />
            <input type="submit" value="Send" />
        </form>
    )
}