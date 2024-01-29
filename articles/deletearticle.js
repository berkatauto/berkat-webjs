const deleteButton = document.getElementById('deleteArticle');

deleteButton.addEventListener('click', () => {
    // Mengambil nilai dari elemen input pada HTML
    const title = titleInput.value;
    // Kirim Perintah Delete ke API
    fetch(apiUrl, {
        method: 'DELETE',
        body: JSON.stringify({ title }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === true) {
                // Redirect user to article list upon successful deleting
                window.location.href = './article-table.html';
            } else {
                errorMessage.textContent = 'Error: '; // pesan kesalahan
            }
        });
}
);