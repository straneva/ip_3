async function authorizeUser(username, password) {
	const url = 'https://example.com/api/auth'; // адрес вашего API для авторизации

	const payload = {
		username: username,
		password: password
	};

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			throw new Error('Ошибка авторизации');
		}

		const data = await response.json();

		// Здесь вы можете сохранить токен или данные пользователя
		localStorage.setItem('token', data.token);
		console.log('Авторизация успешна', data);
	} catch (error) {
		console.error('Ошибка:', error.message);
	}
}