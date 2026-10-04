const fetchBtn = document.querySelector('#btn-load-data');
const postList = document.querySelector('#post-list');
const errorBox = document.querySelector('#error-box');
const loadingBox = document.querySelector('#loading-box');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function loadPosts() {
    postList.innerHTML = '';
    errorBox.classList.add('hidden');
    errorBox.textContent = '';
    loadingBox.classList.remove('hidden');
    fetchBtn.disabled = true;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const posts = await response.json();

        if (!posts || posts.length === 0) {
            showError('No posts found from the server.');
            return;
        }

        const initialFivePosts = posts.slice(0, 5);
        renderPosts(initialFivePosts);

    } catch (error) {
        showError(`Failed to load posts: ${error.message}. Click "Load Posts" to try again.`);
    } finally {
        loadingBox.classList.add('hidden');
        fetchBtn.disabled = false;
    }
}

function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.remove('hidden');
}

function renderPosts(items) {
    for (const item of items) {
        const card = document.createElement('article');
        card.className = 'post-card';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const body = document.createElement('p');
        body.textContent = item.body;

        card.appendChild(title);
        card.appendChild(body);
        postList.appendChild(card);
    }
}

fetchBtn.addEventListener('click', loadPosts);