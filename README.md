### Wordle Clone

A simple Wordle-like game built using React. The game allows the user to guess a 5-letter word within 6 attempts, providing color-coded feedback for each guess. The game is fully responsive, with a clean UI/UX, and includes a "New Game" button, game status messages, and more.

### Features

### Core Features:

    6 attempts to guess a 5-letter word.
    Color-coded feedback after each guess:
        Green: Correct letter in the correct position.
        Yellow: Correct letter in the wrong position.
        Gray: Incorrect letter.  
    Valid word check: Prevents invalid words from being submitted.
    Grid display to show previous guesses and feedback.
    Win or Lose message after 6 attempts.
    New Game button to restart the game.
    
### Optional Enhancements:

    Animations for letter feedback.
    Dark mode toggle for user preference.
    
### Tech Stack

    React: For building the user interface and managing state.
    CSS: For responsive and clean styling.
    
### Installation

    Step 1: Clone the repository
       >> git clone https://github.com/your-username/wordle-clone.git
       
    Step 2: Install dependencies
       Navigate into the project directory:
       >> cd wordle-clone
       Then, install the required dependencies:
       >> npm install
       
    Step 3: Run the development server
       >> npm start
    Your app will be available at http://localhost:3000.

### How to Play

    Guess the 5-letter word within 6 attempts.
    
    After each guess, check the color-coded feedback:
        Green: The letter is correct and in the right place.
        Yellow: The letter is correct but in the wrong place.
        Gray: The letter is incorrect.
        
    If you guess the word correctly, you win! If you run out of attempts, you lose.
    Click "New Game" to start a new game at any time.
    
### Project Structure

    src/: Contains all the source files.
    components/: Contains reusable components (e.g., GuessGrid, GameBoard).
    App.js: The main component managing game logic and state.
    index.js: The entry point of the app.
    
### Game Logic

    Hardcoded Word List: The game uses a predefined list of 5-letter words.
    Feedback Mechanism: After each guess, the app compares the guessed word with the target word and provides color-coded feedback (Green, Yellow, or Gray).
    Valid Word Check: Only valid words (from the predefined list) can be submitted.
    
### Deployment

    Vercel
  
    Login to Vercel and link your GitHub repository containing the project.
    Deploy the project by following Vercel’s guided steps.
  
    Netlify

    Login to Netlify and drag your build/ folder to deploy or link your GitHub repository.
    Ensure any necessary environment variables are configured.

### Code Quality and Structure

    The code is structured with clean, modular components.
    
    State management is handled efficiently using React's useState and useEffect hooks.
    
    The app is designed to be fully responsive and works well on both desktop and mobile devices.



