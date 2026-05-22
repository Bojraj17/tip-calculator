# ANSWERS

## 1. How to run

### Requirements

- Node.js
- npm
- Git

### Steps to run locally

Clone the repository:

git clone https://github.com/Bojraj17/tip-calculator.git

Open the project folder:

cd tip-calculator

Install dependencies:

npm install

Start the development server:

npm run dev

Open in browser:

http://localhost:5173/

### Live Demo

https://tip-calculator-sigma-beryl.vercel.app/

---

## 2. Stack & design choices

### Why I chose this stack

I used React with Vite because React makes handling live updates and state changes simple and efficient. Vite provides a fast development environment with quick refresh during development. I used Tailwind CSS because it helped me create a responsive UI quickly without writing large amounts of custom CSS.

### Design decision 1

I used a centered card-based layout instead of spreading the inputs across the full page. This keeps the interface focused and reduces visual clutter, especially on smaller mobile screens.

### Design decision 2

The selected tip percentage button is highlighted with a dark background and white text so users can immediately identify the active preset. This improves interaction feedback and makes changing tip values easier.

---

## 3. Responsive & accessibility

### Responsive behavior

On a 360px mobile screen, all inputs and buttons stack vertically with proper spacing so they remain touch friendly and easy to use.

On a 1440px laptop screen, the calculator remains centered with a maximum width to prevent the layout from stretching too much across the screen.

### Accessibility handled

I added clear labels for all input fields and ensured keyboard navigation works properly using the default tab order. Interactive elements also have visible focus states.

### Accessibility skipped

I did not implement advanced screen-reader announcements for dynamically changing results. With more time, I would improve accessibility further using ARIA live regions.

---

## 4. AI usage

I used AI tools like Claude and GitHub Copilot during development for:

- Initial React component structure
- Validation logic suggestions
- Responsive layout ideas
- README and ANSWERS formatting assistance

One thing I changed from the AI-generated code was the validation behavior. Initially, calculations continued updating even when invalid input values were entered. I modified the logic so calculations stop and show safe default values when validation errors exist. This created a cleaner and less confusing user experience.

I also adjusted spacing and layout manually to improve readability and usability on smaller screens.

---

## 5. Honest gap

One area that still needs improvement is accessibility polish and smoother UI transitions.

With another day, I would:

- Add better screen-reader support
- Improve animation transitions for validation messages
- Add automated tests for edge cases
- Improve handling for malformed pasted input
- Add more polished UI interactions and animations