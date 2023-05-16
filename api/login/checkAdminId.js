export async function checkAdminId(adminId) {
	try {
		const response = await axios.get(
			`https://users.roblox.com/v1/users/authenticated`
		);
		const userId = adminId.replace("adminuser@", "");

		return response.data.id === userId;
	} catch (error) {
		console.error(`[ERROR]: ${error}`);
		return false;
	}
}
