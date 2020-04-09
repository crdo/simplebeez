require("dotenv").config();

module.exports = {
	// exportPathMap: async function(
	// 	defaultPathMap,
	// 	{ dev, dir, outDir, distDir, buildId }
	// ) {
	// 	return {
	// 		"/": { page: "/" }
	// 	};
	// },
	env: {
		SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
	}
};
