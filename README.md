# ALX Listing App

## Project Description
This is an Airbnb clone listing page built with Next.js, TypeScript, and Tailwind CSS. The application showcases property listings with a modern, responsive design and provides users with an intuitive interface to browse and view property details.

## Goals
- Create a responsive property listing interface
- Implement reusable components for scalability
- Practice modern React development with TypeScript
- Build a foundation for a full-stack Airbnb clone

## Project Structure
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx        # Reusable card component for property listings
│       └── Button.tsx      # Reusable button component
├── constants/
│   └── index.ts           # App constants and configuration
├── interfaces/
│   └── index.ts           # TypeScript interface definitions
├── pages/
│   ├── _app.tsx           # App wrapper component
│   └── index.tsx          # Home page
├── public/
│   └── assets/            # Static assets (images, SVGs)
├── styles/
│   └── globals.css        # Global styles and Tailwind imports
└── README.md

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd alx-listing-app

Install dependencies:
bashnpm install

Run the development server:
bashnpm run dev

Open your browser and navigate to:
http://localhost:3000


Development

Components: Reusable UI components are stored in /components/common/
Interfaces: TypeScript type definitions in /interfaces/
Constants: App-wide constants in /constants/
Assets: Images and static files in /public/assets/

Technologies Used

Next.js 15
TypeScript
Tailwind CSS
ESLint


## Step 5: Run and Verify

Now let's test everything:

```bash
npm run dev
Then open http://localhost:3000 in your browser.
You should see the Next.js welcome page without any errors. Let me know if you encounter any issues during setup!