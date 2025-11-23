# Testimonials / Reviews Creator

A small reviews carousel with a simple “CMS-style” form.  
Users can cycle through existing testimonials, show a random review, and add new reviews via a form which immediately appear in the UI.

---

## Features

**Review carousel**

- Predefined `reviews` array with:
  - Name
  - Job title
  - Review text
  - Image URL (placeholder headshot)
- Navigation buttons:
  - **Left (`<`)**: show previous review, wraps to the last item when at the start.
  - **Right (`>`)**: show next review, wraps back to the first item when at the end.
- **Random** button:
  - Picks a random index and displays that review.

**Dynamic review rendering**

- `showReview(index)` function:
  - Updates the DOM with the selected review’s:
    - `.name`
    - `.job`
    - `.review-text`
    - `.head-shot` background image (via `background-image`).

**Add new review via form**

- Form fields:
  - **Name**
  - **Job**
  - **Review text**
- On submit:
  - Prevents default form submission.
  - Creates a new review object with the same placeholder image.
  - Uses `reviews.unshift(newReviewObject)` so the new review is added to the **front** of the list.
  - Resets `currentReview` to the newly added review (`0`) and calls `showReview(0)` so it shows immediately.
  - Clears the form with `form.reset()`.

**Simple, clean UI**

- Centered review card with:
  - Circular avatar with coloured background halo.
  - Floating quote mark icon overlay.
  - Name, job title, and review text.
- Small press animations on arrow and random buttons.
- Separate “Add New Review” form styled like a mini CMS panel.

---

## Tech Stack

- **HTML**
  - Structured container for the carousel and the form and semantic elements

- **CSS**
  - Card-style layout with drop shadow.
  - Circular avatar and quote badge styling.
  - Simple button hover/active states.
  - Clean form styling with focus states.

- **JavaScript**
  - Array-based review storage (`reviews`).
  - Carousel logic (`currentReview` index, wrap-around navigation).
  - Random review selection using `Math.random()`.
  - Form handling:
    - `submit` event listener.
    - Creating and unshifting new review objects.
    - Re-rendering the current review.

---

## Running the project

1. Navigate into the project folder:

   ```bash
   cd testimonials-creator-with-form

2. Open “index.html” in your browser
