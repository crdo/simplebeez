const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
	defaultLanguage: process.env.DEFAULT_LANGUAGE || "cs",
	otherLanguages: [process.env.OTHER_LANGUAGE] || ["en"],
});
