# Colour Picker

A small JavaScript mini-project that generates a random hex colour and applies it to the page.  
Click the button to update the background colour and the displayed hex value in real time.

---

## Features

**Random hex colour generator**  
- On each button click, the app:
  - Builds a 6-character hex colour string using digits `0–9` and letters `A–F`.
  - Prefixes it with `#` to form a valid hex code.

**Live UI updates**  
- The generated colour is:
  - Shown inside the `Background Colour:` label.
  - Used as the `document.body` background colour.

**Simple, focused UI**  
- A centered layout with:
  - A black banner showing the current colour code.
  - A single “Click Me” button to generate a new colour.
- Small press animation on the button (`:active` state) for nice feedback.

---

## Tech Stack

- **HTML** – basic structure (`container`, label, button).
- **CSS** – centering, typography, button styling, small interaction animation.
- **JavaScript** – random hex generation and DOM updates

## Running the project

1. Navigate into the project folder:

   ```bash
   cd testimonials-creator-with-form

2. Open `index.html` in your browser
