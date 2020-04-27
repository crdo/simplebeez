require("dotenv").config();

module.exports = {
	env: {
		SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
		DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,
		OTHER_LANGUAGE: process.env.OTHER_LANGUAGE,
	},
};
