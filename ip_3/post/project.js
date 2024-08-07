const fileInput = document.getElementById('fileInput');
const uploadedImage = document.getElementById('uploadedImage');

fileInput.addEventListener('change', function (event) {
	const file = event.target.files[0];

	if (file) {
		const reader = new FileReader();

		reader.onload = function (e) {
			uploadedImage.src = e.target.result;
			uploadedImage.style.display = 'block';
		};

		reader.readAsDataURL(file);
	}
});

saveF = function () {
	var elements = document.querySelectorAll('input, textarea');
	for (i = 0; i < elements.length; i++) {
		(function (element) {
			var id = element.getAttribute('id');
			if (id == "click") return;
			localStorage.setItem(id, element.value);
		})(elements[i]);
	}
}
function load() {
	var elements = document.querySelectorAll('input, textarea');

	for (i = 0; i < elements.length; i++) {
		(function (element) {
			var id = element.getAttribute('id');
			if (id == "click") return;
			element.value = localStorage.getItem(id);
		})(elements[i]);
	}
}

load();