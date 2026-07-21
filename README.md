# 📩 Gmail AI Reply Extension

<p align="center">
  <img src="https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/Gmail-Integration-red?logo=gmail" />
  <img src="https://img.shields.io/badge/Spring_Boot-Backend-green?logo=springboot" />
  <img src="https://img.shields.io/badge/AI-Groq-purple" />
</p>

<p align="center">
  A Chrome extension that adds AI-powered reply generation directly inside Gmail.
</p>

---

## Overview

Gmail AI Reply Extension is a Chrome extension built to make replying to emails faster and easier.

The extension integrates directly with the Gmail interface and allows users to generate AI-powered replies without leaving their inbox.

It reads the content of the current email, sends it to the Email Writer AI backend, and generates a relevant reply that can be inserted directly into the Gmail compose box.

The extension works together with the **Spring Boot backend**, which handles AI reply generation using **Spring AI and Groq**.

---

## Features

* AI-powered email reply generation directly inside Gmail
* Automatically uses the content of the current email
* Generates replies in a few seconds
* Inserts generated replies directly into the Gmail reply box
* No need to copy and paste emails into another application
* Integrates with the Email Writer Spring Boot REST API
* Simple and lightweight Chrome extension
* Designed to work naturally with the Gmail interface

---

## How It Works

```text
┌─────────────────────────┐
│         Gmail           │
│                         │
│   User opens an email   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Gmail AI Reply         │
│  Chrome Extension       │
│                         │
│  Reads Email Content    │
└────────────┬────────────┘
             │
             │ REST API Request
             ▼
┌─────────────────────────┐
│  Spring Boot Backend    │
│                         │
│  Spring AI + Groq       │
└────────────┬────────────┘
             │
             │ Generated Reply
             ▼
┌─────────────────────────┐
│  Gmail Reply Box        │
│                         │
│  AI Reply Inserted      │
└─────────────────────────┘
```

---

## Tech Stack

### Chrome Extension

* JavaScript
* HTML
* CSS
* Chrome Extension APIs

### Backend Integration

* REST API
* Spring Boot
* Spring AI

### AI

* Groq API

---

## Project Architecture

The complete Email Writer AI project consists of three repositories:

| Repository                   | Purpose                                |
| ---------------------------- | -------------------------------------- |
| **email-writer-fh**          | React-based web application            |
| **email-writer-sb**          | Spring Boot backend and AI integration |
| **gmail-ai-reply-extension** | Gmail Chrome Extension                 |

### Frontend

https://github.com/gulshankumaryadav11/email-writer-fh

### Backend

https://github.com/gulshankumaryadav11/email-writer-sb

### Chrome Extension

https://github.com/gulshankumaryadav11/gmail-ai-reply-extension

---

## Installation

Since this extension is not installed through the Chrome Web Store, it can be loaded manually in Chrome.

### 1. Clone the Repository

```bash
git clone https://github.com/gulshankumaryadav11/gmail-ai-reply-extension.git
```

### 2. Open Chrome Extensions

Open Google Chrome and navigate to:

```text
chrome://extensions/
```

### 3. Enable Developer Mode

Turn on **Developer mode** from the top-right corner of the Extensions page.

### 4. Load the Extension

Click:

```text
Load unpacked
```

Select the extension project folder.

The Gmail AI Reply Extension should now appear in your installed Chrome extensions.

---

## Backend Setup

The extension requires the Email Writer AI backend to generate replies.

Clone the backend:

```bash
git clone https://github.com/gulshankumaryadav11/email-writer-sb.git
```

Navigate to the backend:

```bash
cd email-writer-sb
```

Run the Spring Boot application:

```bash
./mvnw spring-boot:run
```

For Windows:

```bash
mvnw.cmd spring-boot:run
```

Make sure the API URL configured in the extension points to your running or deployed backend.

---

## Usage

1. Install and enable the extension in Chrome.
2. Make sure the Email Writer backend is available.
3. Open **Gmail**.
4. Open an email you want to reply to.
5. Click **Reply**.
6. Use the **AI Reply** button added by the extension.
7. The extension reads the email content and sends it to the backend.
8. The AI-generated response is returned and inserted into the reply box.
9. Review or edit the generated response before sending it.

---

## Request Flow

```text
Gmail
  │
  │ Email Content
  ▼
Chrome Extension
  │
  │ HTTP Request
  ▼
Spring Boot REST API
  │
  ▼
Spring AI
  │
  ▼
Groq AI Model
  │
  │ Generated Response
  ▼
Spring Boot Backend
  │
  ▼
Chrome Extension
  │
  ▼
Gmail Reply Box
```

---

## Screenshots

Create a `screenshots` folder inside the repository:

```text
gmail-ai-reply-extension/
│
├── screenshots/
│   ├── gmail-extension.png
│   ├── ai-reply-button.png
│   └── generated-reply.png
│
├── src/
├── manifest.json
└── README.md
```

Then add screenshots to the README:

```html
<p align="center">
  <img src="screenshots/gmail-extension.png" width="850">
</p>
```

A short GIF showing the complete flow from **opening an email → clicking AI Reply → generating the response** is also a great way to demonstrate the extension.

---

## Security

API keys should never be stored directly inside the Chrome extension source code.

AI API credentials should remain on the backend, while the extension should communicate only with the backend API.

This prevents sensitive API credentials from being exposed in the browser.

---

## Future Improvements

* Custom reply tones
* Regenerate reply option
* Reply length controls
* Multi-language replies
* Improved Gmail UI integration
* User authentication
* Reply history
* Custom writing preferences
* Chrome Web Store release

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit and push your changes.
5. Open a Pull Request.

```bash
git checkout -b feature/new-feature

git add .

git commit -m "Add new feature"

git push origin feature/new-feature
```

---

## Author

**Gulshan Kumar Yadav**

B.Tech in Computer Science Engineering
Galgotias University

GitHub:
https://github.com/gulshankumaryadav11

---

## License

This project is licensed under the MIT License.

---

## Support

If you find this project useful, consider giving the repository a ⭐.

It helps others discover the project and supports future improvements.
