document.addEventListener('DOMContentLoaded', function () {
    const postArticleForm = document.getElementById('postarticleForm');

    postArticleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const category = document.getElementById('category').value;

        const articleData = {
            title: title,
            author: author,
            category: category,
        };

        // Send data to Google Cloud Function
        fetch(API.CreateArticle, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Add any further actions after successful submission
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error saat mengirim artikel. Silakan coba lagi.');
        });
    });
});
