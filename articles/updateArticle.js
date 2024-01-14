const updateArticleForm = document.getElementById('updateArticleForm');
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

// Mengambil nilai dari elemen input pada HTML
const updateArticle = () => {
  const title = titleInput.value;
  const category = categoryInput.value;
  const tags = tagsInput.value;
  const image = imageInput.value;
  const content = contentInput.value;
  const article = {
    title,
    category,
    tags,
    image,
    content,
  };
  // Kirim data artikel ke API
  fetch(apiUrl, {
    method: 'PUT',
    body: JSON.stringify(article),
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === true) {
        // Redirect user to article list upon successful updating
        window.location.href = './article-table.html';
      } else {
        errorMessage.textContent = 'Error: '; // pesan kesalahan
      }
    });
};
// Jalankan fungsi validation() setiap kali nilai pada form berubah
updateArticleForm.addEventListener('change', validation);
// Jalankan fungsi updateArticle() setiap kali tombol diklik
updateArticleForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateArticle();
});