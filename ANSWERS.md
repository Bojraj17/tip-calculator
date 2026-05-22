# ANSWERS

## 1. How to run

### Requirements

- Node.js installed
- npm installed
- Git installed

### Run locally

Clone the repository:

git clone https://github.com/Bojraj17/tip-calculator.git

Go to project directory:

cd tip-calculator

Install dependencies:

npm install

Start development server:

npm run dev

Open:

 http://localhost:5173/

### Deployed URL

## Live Demo

https://your-vercel-url.vercel.app

---

## 2. Stack & design choices

### Stack Choice

I chose React with Vite and Tailwind CSS because React provides simple state management for live calculations and Vite offers a fast development environment with instant reloads. Tailwind CSS helped me build a responsive interface quickly without writing large custom CSS files.

### Design Decision 1

I used a single centered card layout with grouped sections for bill input, tip selection, people count, and results. This reduces visual clutter and keeps the interaction flow simple, especially on mobile devices.

### Design Decision 2

The active tip percentage button is visually highlighted using a dark background and white text. This gives immediate feedback about the selected preset and improves usability while switching between different tip percentages.

---

## 3. Responsive & accessibility

### Responsive Behavior

On a 360px mobile screen, the layout stacks vertically with enough spacing between inputs and buttons to remain touch friendly. Inputs and buttons take full width to improve usability on smaller screens.

On a 1440px laptop screen, the calculator remains centered with a fixed maximum width to avoid excessive stretching and maintain readability.

### Accessibility Consideration Implemented

I added clear labels for all input fields and ensured keyboard navigation works naturally using the default tab order. Focus states are also visible for interactive elements.

### Accessibility Consideration Skipped

I did not add full screen-reader optimization using ARIA live regions for dynamically updating calculations. With more time, I would improve screen-reader announcements for live result updates.

---

## 4. AI usage

I used ChatGPT to:

- Generate the initial React component structure
- Improve validation handling
- Suggest responsive layout ideas
- Refine README and ANSWERS documentation

One specific change I made to the AI-generated output was improving the validation behavior. The original implementation showed calculation updates even during invalid input states. I modified the logic so invalid fields stop calculations and show zeroed results instead, creating a smoother and less confusing user experience.

I also adjusted the layout spacing and button styling manually to improve readability on smaller mobile screens.

---

## 5. Honest gap

One area that still needs improvement is advanced accessibility support and more polished animations for state changes and validation feedback.

With another day, I would:

- Add ARIA live regions for screen readers
- Improve animation transitions for errors and updates
- Add automated tests for edge cases
- Improve handling for pasted malformed numeric input
- Deploy the application and add CI checks