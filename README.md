# User Management System (UMS) API
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

A robust, secure, and fully-featured User Management System and Blog API built with **Node.js, Express, and MySQL**. This project demonstrates clean architecture, secure authentication, and production-ready practices, making it an excellent showcase of backend development skills for recruiters.

---

## 📋 Table of Contents
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Architecture & Directory Structure](#-architecture--directory-structure)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## 🚀 Key Features
- **🔐 Secure Authentication**: JWT-based login and registration with hashed passwords (`bcryptjs`).
- **📧 Automated Emails**: Instant welcome emails sent upon user registration (`nodemailer`).
- **🛡️ Data Validation**: Strict and secure input validation using `Joi`.
- **🗄️ Relational Database Modeling**: MySQL integration via `Sequelize` ORM for scalable data architecture.
- **🖼️ Media Handling**: Profile picture uploads using `multer` with support for `Cloudinary` remote storage.
- **📝 Blog Management**: Complete feature-set for creating and retrieving blogs linked to user accounts.
- **🔒 Environment Security**: Sensitive credentials safely abstracted and ignored via `.env`.

<br>

🛠️ Tech Stack

## Tech Stack
- **Backend Framework**: Node.js & Express.js
- **Database**: MySQL & Sequelize ORM
- **Authentication**: JSON Web Tokens (JWT) & bcryptjs
- **Security & Validation**: Joi
- **Mailing**: Nodemailer
- **File Uploads**: Multer & Cloudinary

<br>

## ⚙️ Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd usm_project
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Rename `.env.example` to `.env` and fill in your local database details and API keys:
   ```env
   PORT=3000
   DB_NAME=ums
   DB_USER=root
   DB_PASS=your_password
   DB_HOST=localhost
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   JWT_SECRET=your_jwt_secret
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```


<br>

## 📂 Architecture & Directory Structure
- `/src/modules`: Contains domain-specific business logic (Auth, User, Blog).
- `/src/middlewares`: Reusable REST middlewares (e.g., `auth_mw.js`, `validation_mw.js`).
- `/src/utils`: Core utilities for standardizing responses and third-party interactions (`email_service`, `global_error`).
- `/db`: Database connection pooling and Sequelize models.
- `/docs`: Project documentation and API specifications.

<br>

## 📖 API Documentation
Detailed documentation for all API endpoints can be found in the [API Document](docs/api_document.md).

<br>

## 🤝 Contributing
Contributions, issues, and feature requests are always welcome!

<br>


## 📞 Contact

📧 mahmoudjawad02025@gmail.com

🔗 GitHub: [mahmoudjawad-2025](https://github.com/mahmoudjawad-2025/)
