# School Management Dashboard 🏫

A professional, responsive, and modern school management dashboard built with **React** and **Vite**. This system helps administrators manage students, teachers, classrooms, schedules, and attendance in one centralized place.

![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)

## 📺 Project Demo

Watch the system in action:

[![School Management Dashboard Demo](https://img.youtube.com/vi/HUCtej-cbsM/0.jpg)](https://www.youtube.com/watch?v=HUCtej-cbsM)

*Click the image above to watch the demo on YouTube.*

## ✨ Key Features

- **Student Management:** Full CRUD operations (add, edit, details view).
- **Teacher Management:** Efficiently manage staff and profiles.
- **Academic Organization:** Classroom and class type organization.
- **Tracking:** Subject assignment and tracking system.
- **Dynamic Schedules:** Dashboard for school-wide and teacher-specific schedules.
- **Attendance System:** Integrated recording and monitoring dashboard.
- **Modern UI:** Built with Tailwind CSS and enhanced with **React Toastify** for real-time feedback.

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **State Management:** Redux Toolkit & React Redux
- **Routing:** React Router DOM
- **API Handling:** Axios
- **Styling:** Tailwind CSS
- **Notifications:** React Toastify

## 📁 Project Structure

```text
school-management-dashboard/
|-- public/
|-- src/
|   |-- assets/
|   |-- Components/   # Reusable UI components
|   |-- data/         # Mock data & constants
|   |-- error/        # Error handling components
|   |-- routes/       # Application routing logic
|   |-- services/     # API communication layer
|   |-- Slice/        # Redux Toolkit state logic
|   |-- Style/        # Tailwind & global CSS
|   |-- App.jsx
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
