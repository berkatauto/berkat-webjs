const getarticle = document.getElementById('getarticle');
const getTitle = document.getElementById('title');
const getCategory = document.getElementById('category');
const getContent = document.getElementById('content');
const getAuthor = document.getElementById('author');
const getDate = document.getElementById('date');

// Load get Article
getarticle.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = getTitle.value;
    const category = getCategory.value;
    const content = getContent.value;
    const author = getAuthor.value;
    const date = getDate.value;
    const article = {
        title,
        category,
        content,
        author,
        date,
    };
    // Kirim data artikel ke API
    fetch(apiUrl, {
        method: 'GET',
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
}
);