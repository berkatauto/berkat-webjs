const deleteButton = document.getElementById('deleteArticle');

deleteButton.addEventListener('click', () => {
    // Mengambil nilai dari elemen input pada HTML
    const title = titleInput.value;
    // Kirim data artikel ke API
    fetch('https://asia-southeast2-gis-moni.cloudfunctions.net/berkatauto-deleteArticle', {
        method: 'DELETE',
        body:   formDataObject,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === true) {
            // Redirect user to article list upon successful deleting
            window.location.href = './article-table.html';
        } else {
            errorMessage.textContent = 'Error: '; // pesan kesalahan
        }
    })
}
);