# Random Joke Generator 😂

A simple and fun web application that generates random jokes using the Official Joke API.

## Features

- 🎭 **Random Joke Generation** - Fetches jokes from an external API
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📤 **Share Functionality** - Share jokes with friends using Web Share API or copy to clipboard
- ⚡ **Fast & Lightweight** - No heavy dependencies, pure HTML/CSS/JavaScript

## How to Use

1. Open `index.html` in your web browser
2. Click "Get a Joke" to fetch a random joke
3. Click "Share Joke" to share it or copy to clipboard

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **Vanilla JavaScript** - Logic and API interactions
- **Official Joke API** - External API for jokes

## API Used

This project uses the [Official Joke API](https://official-joke-api.appspot.com):
- **Endpoint**: `https://official-joke-api.appspot.com/random_joke`
- **Response Format**: Returns a random joke with `setup` and `punchline` properties
- **No Authentication**: No API key required

### Example API Response:
```json
{
  "type": "general",
  "setup": "Why don't scientists trust atoms?",
  "punchline": "Because they make up everything!",
  "id": 1
}
```

## Project Structure

```
Joke-generator-/
├── index.html      # HTML structure
├── styles.css      # Styling
├── script.js       # JavaScript logic
└── README.md       # Documentation
```

## Features Explained

### Joke Generation
- Fetches jokes asynchronously from the Official Joke API
- Shows loading state while fetching
- Displays setup and punchline with proper formatting

### Error Handling
- Catches and displays errors gracefully
- Disables buttons during loading to prevent multiple requests
- User-friendly error messages

### Share Feature
- Uses Web Share API if available (modern browsers)
- Falls back to clipboard copy for older browsers
- Includes fallback alert if clipboard API is unavailable

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers with Web Share API support

## Future Enhancements

- Add category selection (e.g., programming jokes, knock-knock jokes)
- Implement favorites/history
- Add multiple API sources for variety
- Dark mode toggle
- Keyboard shortcuts (press 'Enter' to get a new joke)

## License

This project is open source and available under the MIT License.

## Credits

- Jokes provided by [Official Joke API](https://official-joke-api.appspot.com)
- Built with ❤️ using vanilla web technologies