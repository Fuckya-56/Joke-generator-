const jokeDisplay = document.getElementById('joke-text');
const generateBtn = document.getElementById('generate-btn');
const shareBtn = document.getElementById('share-btn');

// API endpoint: JokeAPI provides free jokes
const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';

// Function to fetch a random joke
async function fetchJoke() {
    try {
        // Disable buttons during loading
        generateBtn.disabled = true;
        shareBtn.disabled = true;
        generateBtn.textContent = '⏳ Loading...';

        // Fetch joke from API
        const response = await fetch(JOKE_API_URL);

        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }

        const data = await response.json();

        // Format the joke
        const joke = `${data.setup}\n\n${data.punchline}`;
        jokeDisplay.textContent = joke;

        // Store current joke for sharing
        window.currentJoke = joke;

    } catch (error) {
        jokeDisplay.textContent = '❌ Oops! Failed to load a joke. Please try again.';
        console.error('Error fetching joke:', error);
    } finally {
        // Re-enable buttons
        generateBtn.disabled = false;
        shareBtn.disabled = false;
        generateBtn.textContent = 'Get a Joke';
    }
}

// Function to share the joke
function shareJoke() {
    if (!window.currentJoke) {
        alert('Get a joke first!');
        return;
    }

    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: '😂 Check out this joke!',
            text: window.currentJoke,
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.currentJoke).then(() => {
            alert('Joke copied to clipboard!');
        }).catch(() => {
            alert('Joke: ' + window.currentJoke);
        });
    }
}

// Event listeners
generatBtn.addEventListener('click', fetchJoke);
shareBtn.addEventListener('click', shareJoke);

// Load a joke on page load
document.addEventListener('DOMContentLoaded', fetchJoke);