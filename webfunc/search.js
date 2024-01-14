const quickSearch = document.getElementById('quickSearch');
const searchButton = document.getElementById('searchButton');
const searchResult = document.getElementById('searchResult');

searchButton.addEventListener('searchButton', () => {
    // Mengambil nilai dari elemen input pada HTML
    const title = quickSearch.value;
    // Kirim Perintah POST ke API
    fetch(apiUrl, {
        method: 'POST',
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
    // Result Search
    const searchResult = document.getElementById('searchResult');
    const data = result;
}
);
