require("dotenv").config()

module.exports = {
	env: {
		SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
		DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,
		OTHER_LANGUAGE: process.env.OTHER_LANGUAGE,
	},
	i18n: {
		locales: ["en", "cs"],
		defaultLocale: "cs",
		domains: [
			{
				domain: "simplebeez.com",
				defaultLocale: "en",
			},
			{
				domain: "simplebeez.cz",
				defaultLocale: "cs",
			},
		],
	},
}
