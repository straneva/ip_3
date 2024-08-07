document.getElementById("registrationForm").addEventListener("submit", function (event) {
	event.preventDefault();

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	document.getElementById("message").innerText = `Пользователь ${username} успешно зарегистрирован!`;

	document.getElementById("registrationForm").reset();
});