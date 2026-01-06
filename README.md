React Product Selection Demo

A simple React application demonstrating a master–detail layout:
selecting an item from a list and displaying its full details.

This project focuses on core React concepts such as:

Component composition

Props and state

Unidirectional data flow

Separation of concerns

Features

Displays a list of products (preview view)

Allows selecting a product from the list

Shows full product details on selection

Clean component structure (data / components / pages)

No external state management or backend

Project Structure
src/
├── data/
│   └── products.js          # Static product data
├── components/
│   ├── ProductPreviewCard   # Left-side product preview
│   └── ProductDetails       # Right-side product details
├── pages/
│   └── Home.jsx             # Main container / page
├── App.js
└── index.js

Core Concept

The application uses a single source of truth:

The selected product is stored as state in the Home component

Child components communicate selection via callbacks

Product details are rendered based on the current state

This follows standard React best practices.

Getting Started
Install dependencies
npm install

Run the application
npm start


Open your browser at:

http://localhost:3000

Technologies Used

React (Create React App)

JavaScript (ES6+)

CSS (Flexbox layout)

Purpose

This project is intended for:

Learning React fundamentals

Practicing component responsibility separation

Demonstrating clean state management patterns

Possible Extensions

Highlight selected product

Add routing (/products/:id)

Fetch products from an API

Improve responsiveness for mobile

Add animations and transitions

License

This project is for educational purposes.