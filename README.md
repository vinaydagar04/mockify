<h1 align="center"> MOCKIFY </h1>
<p align="center"> The ultimate AI-powered mock interview platform for career advancement and technical mastery. </p>

<p align="center">
  <img alt="Build" src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge">
  <img alt="Issues" src="https://img.shields.io/badge/Issues-0%20Open-blue?style=for-the-badge">
  <img alt="Contributions" src="https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge">
</p>
<!-- 
  **Note:** These are static placeholder badges. Replace them with your project's actual badges.
  You can generate your own at https://shields.io
-->

## 📌 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Mockify** is a comprehensive, end-to-end ecosystem designed to bridge the gap between candidate preparation and professional success through high-fidelity mock interviews, AI-driven assessment, and a robust interviewer marketplace.

> The modern job market is increasingly competitive, with technical interviews becoming more rigorous and demanding. Candidates often lack access to realistic practice environments, while experienced professionals have no streamlined way to monetize their mentorship skills. This disconnect leads to high anxiety for job seekers and untapped potential for industry veterans.

Mockify solves this by providing a high-performance web application where users can explore a marketplace of expert interviewers, schedule live sessions, and engage in real-time video calls. By integrating advanced AI question generation and automated payout systems, Mockify transforms the interview preparation journey into a structured, rewarding, and highly effective professional experience.

### Architecture Overview
Mockify is built on a **Component-based Architecture** utilizing the latest **Next.js 16** (App Router) and **React 19** frameworks. This ensures a highly responsive, server-side rendered, and SEO-friendly interface. The system leverages **Prisma** as its ORM for efficient **PostgreSQL** database management, while **Clerk** handles secure authentication and **Stream** provides the backbone for real-time video communications.

---

## ✨ Key Features

Mockify is packed with features designed to provide a seamless user experience for both candidates and interviewers.

### 🤖 AI-Driven Preparation
- **Intelligent Questioning:** Leverage the `@google/generative-ai` integration to generate role-specific technical questions that adapt to the candidate's focus area.
- **Dynamic Feedback:** Use AI to analyze responses and provide immediate insights during prep sessions.

### 🎥 High-Fidelity Interview Rooms
- **Real-time Video & Audio:** Powered by the **Stream Video SDK**, offering low-latency, crystal-clear communication during mock sessions.
- **Integrated Interview UI:** A dedicated call interface (`CallUI.jsx`) that combines video streams with real-time question prompts and evaluation tools.

### 🗓️ Marketplace & Scheduling
- **Expert Exploration:** Browse through a curated list of professional interviewers via the **Explore Grid**, featuring detailed **Interviewer Cards**.
- **Precision Scheduling:** A custom **Slot Picker** component allows for intuitive availability management and appointment booking.
- **Appointment Management:** A centralized dashboard to track upcoming sessions, historical data, and interview status.

### 💰 Financial Ecosystem
- **Earnings Dashboard:** Interviewers can track their income, upcoming payouts, and financial performance through a dedicated **Earnings Section**.
- **Secure Payouts:** Integrated payout review and processing logic to ensure contributors are compensated fairly and timely.

### 🛡️ Security & Performance
- **Bot Protection:** Utilization of **Arcjet** for robust rate limiting and security shielding against malicious traffic.
- **Animated UX:** Smooth transitions and professional interface elements powered by **Motion** and **Tailwind CSS**.

---

## 🛠️ Tech Stack & Architecture

Mockify utilizes a bleeding-edge technology stack to ensure scalability, security, and developer productivity.

| Technology | Purpose | Why it was Chosen |
| :--- | :--- | :--- |
| **Next.js 16** | Full-stack Framework | Provides the App Router, Server Components, and optimized rendering. |
| **React 19** | Frontend Library | Latest React features for state management and high-performance UI. |
| **Prisma** | ORM | Type-safe database access and streamlined schema migrations. |
| **PostgreSQL** | Database | Reliable, relational data storage for complex user and appointment relationships. |
| **Clerk** | Authentication | Industry-standard identity management and secure user onboarding. |
| **Stream SDK** | Video/Chat | Robust, scalable infrastructure for real-time communication. |
| **Tailwind CSS 4** | Styling | Utility-first CSS for rapid, responsive design with a small footprint. |
| **Arcjet** | Security | Integrated security layer for rate limiting and bot detection. |
| **Resend** | Email | Reliable transactional email delivery for notifications and payouts. |

---

## 📁 Project Structure

```
vinaydagar04-mockify/
├── 📁 actions/                 # Server Actions for business logic
│   ├── 📄 aiQuestions.js       # AI question generation logic
│   ├── 📄 appointments.js      # Appointment management actions
│   ├── 📄 booking.js           # Slot booking and scheduling
│   ├── 📄 dashboard.js         # Data fetching for user dashboards
│   ├── 📄 payout.js            # Financial transaction logic
│   └── 📄 user.js              # User profile and metadata actions
├── 📁 app/                    # Next.js App Router (Routing & Pages)
│   ├── 📁 (auth)/              # Authentication routes (Clerk)
│   ├── 📁 (main)/              # Protected application routes
│   │   ├── 📁 explore/         # Interviewer marketplace
│   │   ├── 📁 dashboard/       # User & Interviewer center
│   │   ├── 📁 call/            # Live interview room pages
│   │   └── 📁 payout/          # Payout review and history
│   └── 📄 layout.js            # Root layout configuration
├── 📁 components/             # Reusable UI components
│   ├── 📁 animate-ui/          # Specialized animation primitives
│   ├── 📁 ui/                  # Shadcn-based base components
│   ├── 📄 AppointmentCard.jsx  # Card view for interview sessions
│   ├── 📄 InterviewerCard.jsx  # Profile view for marketplace
│   └── 📄 Header.jsx           # Main navigation and user actions
├── 📁 prisma/                  # Database schema and migrations
│   ├── 📄 schema.prisma        # Database model definitions
│   └── 📄 seed.js              # Initial data seeding script
├── 📁 lib/                    # Utility functions and shared config
│   ├── 📄 arcjet.js            # Security configuration
│   ├── 📄 prisma.js            # Prisma client singleton
│   └── 📄 stream.js            # Stream SDK initialization logic
├── 📁 public/                  # Static assets (logos, images)
├── 📄 next.config.mjs          # Next.js configuration
├── 📄 package.json             # Dependencies and scripts
└── 📄 tailwind.config.js       # Styling configuration
```

---

## 🚀 Getting Started

Follow these steps to set up Mockify locally for development.

### Prerequisites
- **Node.js:** Latest LTS version recommended.
- **npm:** Package manager.
- **PostgreSQL:** A local or hosted instance.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vinaydagar04/mockify.git
    cd mockify
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Prepare the database:**
    Initialize the Prisma client and push the schema to your PostgreSQL instance.
    ```bash
    npm run postinstall
    ```

4.  **Run migrations:**
    ```bash
    npx prisma migrate dev
    ```

5.  **Seed the database (Optional):**
    ```bash
    node prisma/seed.js
    ```

---

## 🔧 Usage

### For Candidates
1.  **Onboarding:** Sign up via Clerk and complete your profile to highlight your technical interests.
2.  **Explore:** Navigate to the `/explore` page to find interviewers matching your target roles.
3.  **Booking:** Select a slot on an interviewer's profile and confirm your appointment.
4.  **The Interview:** At the scheduled time, enter the `/call/[id]` room to start your session.

### For Interviewers
1.  **Setup Availability:** Use the Dashboard to define your available time slots.
2.  **Conduct Sessions:** Use the integrated Call Room to interview candidates, provide feedback, and use AI-generated questions to guide the conversation.
3.  **Withdraw Earnings:** Monitor your balance in the Earnings section and initiate a withdrawal through the Payout portal.

### Development Scripts
- `npm run dev`: Start the development server with Hot Module Replacement.
- `npm run build`: Compile the application for production.
- `npm run start`: Run the compiled production build.
- `npm run lint`: Execute ESLint to identify and fix code style issues.

---

## 🤝 Contributing

We welcome contributions to improve Mockify! Whether it's fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork the repository** - Click the 'Fork' button at the top right of this page.
2. **Create a feature branch** 
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** - Improve code, documentation, or features.
4. **Test thoroughly** - Ensure all functionality works as expected.
5. **Commit your changes** - Write clear, descriptive commit messages.
   ```bash
   git commit -m 'Add: AI question filtering by difficulty'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request** - Submit your changes for review.

### Development Guidelines
- ✅ Follow the existing code style and conventions.
- 📝 Add comments for complex logic in server actions.
- 🧪 Ensure all Prisma schema changes include a migration.
- 📚 Update the UI components in `components/ui` following the Shadcn pattern.

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

### What this means:
- ✅ **Commercial use:** You can use this project commercially.
- ✅ **Modification:** You can modify the code.
- ✅ **Distribution:** You can distribute this software.
- ✅ **Private use:** You can use this project privately.
- ⚠️ **Liability:** The software is provided "as is", without warranty.

---

<p align="center">Made with ❤️ by the Mockify Team</p>
<p align="center">
  <a href="#">⬆️ Back to Top</a>
</p>
