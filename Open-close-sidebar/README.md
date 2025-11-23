# Open & Close Sidebar

A collapsible football-themed sidebar inspired by a club dashboard.  
The sidebar smoothly expands/collapses, highlights the active link, and supports simple notification badges.


## Features

**Collapsible sidebar**
  - Click the round button in the bottom-right of the sidebar to toggle between:
    - **Expanded**: full labels, headers, and layout.
    - **Collapsed**: compact sidebar with icons only.
  - Smooth transitions for width, padding, text, and layout using CSS variables and custom easing.

**Section structure**
  - **Team** – links like Squad List, Tactics, Contracts, Stats  
  - **Recruitment** – Ongoing Transfers (with badge), Scouting, Finances  
  - **Youth Teams** – U21, U18

**Notification badge**
  - “Ongoing Transfers” shows a red badge (e.g. `3` notifications).
  - When that link is clicked:
    - The badge is removed.
    - An alert appears: `"Notifications removed"`.

**Active link state**
  - Clicking any sidebar link:
    - Prevents the default navigation.
    - Removes `.active` from all links.
    - Adds `.active` to the clicked link, giving it a “pressed” / selected style.

**Accessibility-friendly titles when collapsed**
  - When the sidebar is collapsed, each link gets a `title` attribute in the format:
    - `"Section - Label"` (e.g. `Team - Squad List`)
  - When expanded, these titles are removed again.
  - This makes tooltips and screen-reader context more helpful.

**Nice motion & styling**
  - Uses CSS “tokens” for:
    - Shadows (`--shadow-sm`, `--shadow-md`, `--shadow-lg`)
    - Transition timings (`--t-fast`, `--t-med`, `--t-slow`)
    - Easing (`--ease-smooth`)
  - Subtle animations on:
    - Sidebar width and padding
    - Logo size
    - Text size
    - Section headers
    - Link padding and hover states
    - Collapse button icon rotation

---

## Tech Stack

- **HTML** – semantic structure for the sidebar and sections.
- **CSS** – custom layout, transitions, collapsed styles, badge, and button.
- **JavaScript** – behaviour for:
  - Toggling the `collapsed` class on the sidebar.
  - Adding/removing `title` attributes when collapsed/expanded.
  - Managing active link state.
  - Handling notification badge removal.

---

## Running the project

1. Navigate into the project folder:

   ```bash
   cd testimonials-creator-with-form

2. Open `index.html` in your browser


