# School Management Dashboard

A modern school management dashboard built with React and Vite.  
The project helps administrators manage students, teachers, classrooms, subjects, schedules, and attendance in one place.

## Key Features

- Student management (add, edit, details view)
- Teacher management (add, edit, details view)
- Classroom and class type organization
- Subject assignment and subject tracking
- Schedule dashboard and teacher schedule view
- Attendance dashboard and attendance recording
- Toast notifications for better user feedback

## Tech Stack

- React 19
- Vite 6
- Redux Toolkit + React Redux
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

## Project Structure

```text
school-management-dashboard/
|-- public/
|-- src/
|   |-- assets/
|   |-- Components/
|   |-- data/
|   |-- error/
|   |-- routes/
|   |-- services/
|   |-- Slice/
|   |-- Style/
|   |-- App.jsx
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks

## Notes

- Make sure your backend/API endpoints are available before testing all features.
- If your API base URL differs between environments, centralize it in the service layer for easier deployment.

## Author

Built as a graduation project focused on practical school operations workflows.
