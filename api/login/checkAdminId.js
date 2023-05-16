const axios = require("axios");

module.exports = function checkAdminId(adminId) {
	const response = axios
		.get(`https://users.roblox.com/v1/users/authenticated`)
		.catch((error) => {
			console.error(`[ERROR]: ${error}`);
		});
	const userId = adminId.replace("adminuser@", "");

	if (response) {
		if (response.id === userId) {
			return true;
		} else {
			return false;
		}
	}
};
