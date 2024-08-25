document.addEventListener('DOMContentLoaded', () => {
    const postsSection = document.getElementById('posts-section');
    const searchBar = document.getElementById('search-bar');

    // Fetch posts from the server
    async function fetchPosts() {
        const response = await fetch('/posts');
        const posts = await response.json();
        return posts;
    }

    // Display posts
    function displayPosts(posts) {
        postsSection.innerHTML = ''; // Clear current posts
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'forum-post';
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <div class="date-time">${post.date}</div>
                <div class="comments-icon"></div>
            `;
            postsSection.appendChild(postDiv);
        });
    }

    // Filter posts based on search query
    function filterPosts(posts, query) {
        return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()) ||
                                      post.content.toLowerCase().includes(query.toLowerCase()));
    }

    // Initialize
    fetchPosts().then(posts => {
        displayPosts(posts);

        searchBar.addEventListener('input', (e) => {
            const query = e.target.value;
            const filteredPosts = filterPosts(posts, query);
            displayPosts(filteredPosts);
        });
    });
});
