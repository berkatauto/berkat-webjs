// Isian form untuk posting artikel
document.getElementById('postArticleForm')
document.getElementById('title')
document.getElementById('category')
document.getElementById('tags')
document.getElementById('image_input')
document.getElementById('content')
document.getElementById('submit')
// Mengambil nilai dari elemen input pada HTML
const postArticleForm = document.getElementById('postArticleForm');
const titleInput = document.getElementById('title');
const categoryInput = document.getElementById('category');
const tagsInput = document.getElementById('tags');
const imageInput = document.getElementById('image_input');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');
const errorMessage = document.getElementById('error-message');
// Fungsi untuk mengecek apakah form telah diisi dengan benar
const validation = () => {
    const title = titleInput.value;
    const content = contentInput.value;
    if (title !== '' && content !== '') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};
// Kirim data artikel ke API

fetch('https://asia-southeast2-gis-moni.cloudfunctions.net/berkatauto-cf', {
    method: 'POST',
    body:   formDataObject,
})
.then(response => response.json())
.then(data => {
    if (data.status === true) {
        // Redirect user to user.html upon successful login
        window.location.href = '';
    } else {
        errorMessage.textContent = 'Error: '; // pesan kesalahan
    }
})