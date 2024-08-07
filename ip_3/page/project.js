let myPosts = [];
let otherPosts = [
	{ user: "Алексей", text: "Привет, мир!" },
	{ user: "Екатерина", text: "Какой чудесный день!" },
	{ user: "Иван", text: "JavaScript - это здорово!" }
];
let subscribedUsers = new Set();

const postInput = document.getElementById('postInput');
const addPostBtn = document.getElementById('addPostBtn');
const myPostsList = document.getElementById('myPosts');
const otherPostsList = document.getElementById('otherPosts');
const subscribeInput = document.getElementById('subscribeInput');
const subscribeBtn = document.getElementById('subscribeBtn');
const subscribedUsersDiv = document.getElementById('subscribedUsers');

// Функция для обновления списков постов
function updatePosts() {
	myPostsList.innerHTML = '';
	otherPostsList.innerHTML = '';

	myPosts.forEach(post => {
		const li = document.createElement('li');
		li.textContent = post;
		myPostsList.appendChild(li);
	});

	otherPosts.forEach(post => {
		const li = document.createElement('li');
		li.textContent = `${post.user}: ${post.text}`;
		otherPostsList.appendChild(li);
	});
}

// Обработчик события добавления поста
addPostBtn.addEventListener('click', () => {
	if (postInput.value) {
		myPosts.push(postInput.value);
		postInput.value = '';
		updatePosts();
	}
});

// Обработчик события подписки
subscribeBtn.addEventListener('click', () => {
	const username = subscribeInput.value.trim();
	if (username && !subscribedUsers.has(username)) {
		subscribedUsers.add(username);
		const userDiv = document.createElement('div');
		userDiv.textContent = username;
		subscribedUsersDiv.appendChild(userDiv);
		subscribeInput.value = '';
	}
});

// Начальная загрузка постов
updatePosts();