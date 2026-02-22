# 🌿 Eco Learning School Website

A modern, responsive website built for **Eco Learning School – North Macedonia**, focused on sustainability, environmental awareness, and educational impact.

This project presents the school’s mission, vision, blog articles, events, and community impact in a clean and accessible way.

---

## 🌍 About the Project

The goal of this website is to:

- Promote environmental education and sustainable development
- Share blog posts about ecology, science, and environmental impact
- Present school activities and events
- Showcase impact numbers and future vision
- Provide a modern digital presence for the school

The platform is designed to be fast, responsive, and easy to expand with new content.

---

## 🛠 Tech Stack

- ⚡ **Vite**
- ⚛️ **React**
- 🎨 **Tailwind CSS**
- 📦 JSON-based local data management
- 📱 Fully Responsive Design

---

## ✨ Features

- Clean landing page
- Vision for the Future section
- Impact & Numbers section with animated counters
- FAQ section with interactive toggle
- Blog system (dynamic rendering from JSON)
- Events structure ready for expansion
- Reusable components
- Mobile-first responsive layout

---

## 📂 Project Structure

src/
├── components/
├── pages/
├── data/
│ ├── blogPosts.json
│ ├── blogs.json
│ └── events.json
├── assets/
└── App.jsx

---

## 📚 Blog System

Blog content is stored in structured JSON files and rendered dynamically using:

- `dangerouslySetInnerHTML` for formatted content
- HTML-based content blocks
- Tailwind styling inside content

This allows easy content updates without modifying components.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/LiMi0000/eco.git
cd eco
```

Install dependencies:

npm install

Run the development server:

npm run dev

Author

Developed with care and sustainability in mind.

Eco Learning School – North Macedonia
