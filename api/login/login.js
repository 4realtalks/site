import { checkAdminId } from "./checkAdminId.js";

const adminIdInput = document.getElementById("floatingPassword");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", async (event) => {
	event.preventDefault();

	const adminId = adminIdInput.value.trim();
	const loggedIn = await checkAdminId(adminId);

	if (loggedIn) {
		console.log("Logged In!");
		window.location.href = "../web/admin/panels.html"
	} else {
		console.log("Invalid AdminId!");
		// Display error message or take appropriate action for failed login
	}
});
