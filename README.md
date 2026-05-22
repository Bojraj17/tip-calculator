# Tip Calculator

A responsive tip calculator and bill splitter built using React, Vite, and Tailwind CSS.

## Features

- Live calculation updates
- Tip preset buttons
- Custom tip percentage input
- Inline validation messages
- Responsive design
- Reset calculator functionality
- Handles edge cases gracefully

## Tech Stack

- React
- Vite
- Tailwind CSS

## Run Locally

Clone the project:

git clone <your-repo-url>

Go to project folder:

cd tip-calculator

Install dependencies:

npm install

Start development server:

npm run dev

## Validation Rules

- Bill amount must be greater than 0
- Tip percentage must be between 0 and 100
- Number of people must be at least 1

## Rounding Policy

Per-person values are rounded up to 2 decimal places to avoid underpayment.

## Author

Yash Lale