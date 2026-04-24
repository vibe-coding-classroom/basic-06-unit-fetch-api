/**
 * basic-06-unit-fetch-api
 * Asynchronous Programming: Fetch API Mastery
 */

// --- Configuration ---
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Using JSONPlaceholder for simulation
const TIMEOUT_MS = 5000;

// --- DOM Elements ---
const refreshBtn = document.getElementById('refresh-btn');
const dataContainer = document.getElementById('data-container');
const postForm = document.getElementById('post-form');
const toast = document.getElementById('toast');

// --- Task 1: Dynamic Dashboard (GET) ---
/**
 * TODO: Implement fetchDashboardData
 * 1. Show loading state
 * 2. Fetch data from ${API_BASE_URL}/posts?_limit=6
 * 3. Handle successful response and render data
 * 4. Handle errors (Network error, HTTP error)
 * 5. Hide loading state
 */
async function fetchDashboardData() {
    toggleLoading(refreshBtn, true);
    clearStatus('dashboard-status');

    try {
        // --- STUDENT IMPLEMENTATION START ---
        // Step 1: Use fetch() to get data
        // Step 2: Check if response is ok (res.ok)
        // Step 3: Parse JSON (await res.json())
        // Step 4: Call renderCards(data)
        
        // Placeholder simulation (Remove this and implement fetch)
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        throw new Error("Task 1: Fetch logic not implemented yet!");
        
        // --- STUDENT IMPLEMENTATION END ---

    } catch (error) {
        console.error('Fetch Error:', error);
        showStatus('dashboard-status', error.message, 'error');
        showToast('Failed to load dashboard data');
    } finally {
        toggleLoading(refreshBtn, false);
    }
}

// --- Task 2: Bulletin Board (POST) ---
/**
 * TODO: Implement submitMessage
 * 1. Prevent default form submission
 * 2. Get form data
 * 3. Fetch POST to ${API_BASE_URL}/posts
 * 4. Set headers: "Content-Type": "application/json"
 * 5. Stringify body
 * 6. Handle success/error
 */
async function submitMessage(event) {
    event.preventDefault();
    const submitBtn = document.getElementById('submit-btn');
    const formData = new FormData(postForm);
    const data = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId: 1
    };

    toggleLoading(submitBtn, true);
    clearStatus('post-status');

    try {
        // --- STUDENT IMPLEMENTATION START ---
        // Step 1: Use fetch() with method: "POST"
        // Step 2: Include headers and body (JSON.stringify)
        // Step 3: Check res.ok
        // Step 4: Show success message and clear form
        
        // Placeholder simulation (Remove this and implement fetch)
        await new Promise(resolve => setTimeout(resolve, 1000));
        throw new Error("Task 2: POST logic not implemented yet!");

        // --- STUDENT IMPLEMENTATION END ---

    } catch (error) {
        showStatus('post-status', error.message, 'error');
        showToast('Submission failed');
    } finally {
        toggleLoading(submitBtn, false);
    }
}

// --- Task 3: Robust Fetch (Timeout/Abort) ---
/**
 * TODO: Implement a robust fetch wrapper
 * Use AbortController to handle timeouts.
 */
async function robustFetch(url, options = {}, timeout = TIMEOUT_MS) {
    // --- STUDENT IMPLEMENTATION START ---
    // Hint: const controller = new AbortController();
    // Hint: const signal = controller.signal;
    // Hint: setTimeout(() => controller.abort(), timeout);
    
    return fetch(url, options); // Replace with robust implementation
    
    // --- STUDENT IMPLEMENTATION END ---
}


// --- UI Utility Functions ---

function renderCards(posts) {
    dataContainer.innerHTML = '';
    if (posts.length === 0) {
        dataContainer.innerHTML = '<div class="placeholder-msg">No data available.</div>';
        return;
    }

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'data-card';
        card.innerHTML = `
            <h3>${post.title.substring(0, 20)}...</h3>
            <p>${post.body.substring(0, 100)}...</p>
        `;
        dataContainer.appendChild(card);
    });
}

function toggleLoading(btn, isLoading) {
    const text = btn.querySelector('.btn-text');
    const loader = btn.querySelector('.btn-loader');
    if (isLoading) {
        text.classList.add('hidden');
        loader.classList.remove('hidden');
        btn.disabled = true;
    } else {
        text.classList.remove('hidden');
        loader.classList.add('hidden');
        btn.disabled = false;
    }
}

function showStatus(id, message, type) {
    const el = document.getElementById(id);
    el.textContent = message;
    el.className = `status-msg ${type}`;
    el.classList.remove('hidden');
}

function clearStatus(id) {
    const el = document.getElementById(id);
    el.classList.add('hidden');
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

// --- Event Listeners ---
refreshBtn.addEventListener('click', fetchDashboardData);
postForm.addEventListener('submit', submitMessage);

console.log('🚀 Fetch API Mastery app initialized.');
