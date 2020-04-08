import { NowRequest, NowResponse } from "@now/node";
const sgMail = require("@sendgrid/mail");

export default async function (req: NowRequest, res: NowResponse) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	const { email } = req.body;

	const content = {
		to: ["crha@havit.cz", "martin@simplebeez.com", "david@simplebeez.com"],
		from: email,
		subject: `SIMPLEBEEZ.COM New Message From - ${email}`,
		text: JSON.stringify(req.body),
		html: `<p>${JSON.stringify(req.body)}</p>`,
	};

	try {
		await sgMail.send(content);
		res.status(200).send("Message sent successfully.");
	} catch (error) {
		console.log("ERROR", error);
		res.status(400).send("Message not sent.");
	}
}
