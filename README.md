# NSDA Portal

NSDA  Portal is a final hackathon project aimed at creating a skill and tech development platform for learners. The portal is designed with a user-friendly UI/UX, modern web technologies, and supports real-world usage.

---

## 🎨 UI/UX Design System

**Color System (From NSDA Figma Prototype)**

| Purpose         | Color         | Tailwind Utility           |
|-----------------|---------------|---------------------------|
| Primary         | Deep Blue     | `bg-blue-900` / `text-blue-900` |
| Accent / CTA    | Vibrant Amber | `bg-amber-500` / `text-amber-500` |
| Success Status  | Light Green   | `bg-green-100` / `text-green-100` |

---

## ⚙️ Functional Requirements

- User authentication & role-based access
- Course and skill tracking
- Real-time notifications
- Resource management for learning materials
- Dark mode support
- Responsive design for desktop and mobile

---

## 🛠️ Technical Requirements

- **Frontend:** React, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT
- **State Management:** Jotai / Context API
- **Hosting:** Deployment-ready

---

## 🌐 Features

1. **Student Management** – Add, edit, and assign students.
2. **Student Login & Access** – Students can securely log in to their accounts.
3. **Profile Management** – Students can view and update their profiles.
4. **Task Submission & Progress Tracking** – Students can submit tasks and track their learning progress in real time.
5. **Resource Management** – Upload and access learning materials.
6. **Skill Tracking** – Track user progress and achievements.

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB instance
- npm 

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project folder
cd NSDA

# Install dependencies
npm install

# Start the server
npm run dev
