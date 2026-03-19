# Kelly Gikonyo | Developer Portfolio

A modern, responsive personal portfolio website showcasing skills, projects, and CV.

## 📋 Table of Contents
- [Features](#features)
- [Recent Changes](#recent-changes)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contact Form Setup](#contact-form-setup)

---

## ✨ Features

### Core Features
- **Responsive Design** - Mobile-friendly layout that adapts to all screen sizes
- **Dark Mode Toggle** - Switch between light and dark themes
- **Animated Sections** - Smooth fade-in effects using AOS (Animate On Scroll)
- **Typing Effect** - Dynamic text animation on hero section
- **Mobile Navigation** - Hamburger menu for seamless mobile browsing

### Sections
1. **Home/Hero** - Professional introduction with profile image and CTA buttons
2. **About** - Personal background and career motivation
3. **Skills** - Frontend, Backend, and Soft Skills with proficiency bars
4. **Projects** - Featured project cards with GitHub links
5. **CV** - Embedded PDF viewer and download option
6. **Contact** - Working contact form with email integration
7. **Social Links** - Direct links to GitHub, LinkedIn, and Twitter

---

## 🔄 Recent Changes (v2.0)

### Profile & Projects
- ✅ Updated profile picture: `images/Profile.jpg`
- ✅ Added **Online Counseling System** project link: [GitHub Repo](https://github.com/KellyGikonyo/online-counseling-system)
- ✅ Added **Counsel Chat API** project link: [GitHub Repo](https://github.com/KellyGikonyo/counsel-chat-API)
- ✅ Project screenshots: `project-guidance.jpeg`, `Counsel-Chat-API.jpeg`

### Contact Form
- ✅ Integrated **FormSubmit** for email handling
- ✅ Emails sent to: `gikonyokelly@gmail.com`
- ✅ Direct email link fallback below form
- ✅ No backend server required (static hosting friendly)

### UI/UX
- ✅ Dark mode support with persistent toggle
- ✅ Mobile-responsive navigation with menu toggle
- ✅ Smooth scroll animations on all sections

---

## 🚀 How to Run

### Option 1: Local Development Server (Recommended)

**Using Python (built-in):**
```powershell
cd advanced-portfolio
python -m http.server 8080
```
Then open: `http://localhost:8080`

**Using Node.js (http-server):**
```powershell
cd advanced-portfolio
npx http-server . -p 8080
```
Then open: `http://localhost:8080`

### Option 2: Direct File Opening
Simply open `index.html` in your browser (works, but some features like CORS may be limited).

### Option 3: GitHub Pages Deployment
1. Push to GitHub repository
2. Enable GitHub Pages in repo settings (branch: `main` or `gh-pages`)
3. Deployed URL: `https://kellygikonyo.github.io`
   - Update the `_next` redirect in the contact form to point to your live URL (currently set to this default)

---

## 📁 Project Structure

```
advanced-portfolio/
├── index.html              # Main HTML file
├── README.md              # This file (Project documentation)
├── css/
│   └── style.css          # Stylesheet (colors, layout, animations)
├── js/
│   └── script.js          # JavaScript (dark mode, typing effect, AOS init)
├── images/
│   ├── Profile.jpg        # Profile picture (hero section)
│   ├── project-guidance.jpeg    # Online Counseling System screenshot
│   └── Counsel-Chat-API.jpeg    # Counsel Chat API screenshot
└── files/
    └── Kelly_CV.pdf       # CV PDF (embedded & downloadable)
```

---

## 🛠 Technologies

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, animations
- **JavaScript (Vanilla)** - DOM manipulation, event handling
- **Font Awesome 6.4** - Icon library
- **AOS (Animate On Scroll)** - Animation library

### Tools & Services
- **FormSubmit** - Contact form backend (no server needed)
- **GitHub Pages** - Free hosting
- **Git** - Version control

---

## 📧 Contact Form Setup

### How It Works
1. User fills out name, email, and message
2. Form submits to **FormSubmit.co** (secure, free service)
3. Email received at: `gikonyokelly@gmail.com`
4. User redirected to: `https://kellygikonyo.github.io` (update with your live URL)

### For Local Testing
- FormSubmit works on localhost and live domains
- First submission may require email verification (FormSubmit sends confirmation link)
- After verification, all submissions go directly to inbox

### Change Email Address
Edit `index.html` line ~183:
```html
<form ... action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
```

### Troubleshooting Contact Form
If form doesn't submit:
1. Ensure you're running on `http://localhost:XXXX` (not `file://`)
2. Check browser console for CORS errors
3. Verify email isn't in spam folder
4. Confirm FormSubmit hasn't blocked your domain

---

## 🎨 Customization

### Dark Mode Colors
Edit `css/style.css` - Look for `.dark` class:
```css
body.dark {
    background-color: #1a1a1a;
    color: #e0e0e0;
}
```

### Add New Projects
Edit `index.html` - In the `<!-- PROJECTS -->` section, add:
```html
<div class="project-card" data-aos="zoom-in" data-aos-delay="200">
    <img src="images/your-screenshot.png" alt="Project name" class="project-screenshot">
    <h3>Your Project Name</h3>
    <p>Project description.</p>
    <p class="tech-list">Technologies: Tech1, Tech2, Tech3</p>
    <a href="https://github.com/YourUsername/repo" target="_blank" class="button">GitHub</a>
</div>
```

### Change Social Links
Edit `index.html` - In the `<!-- CONTACT -->` section:
```html
<a href="https://your-link.com" target="_blank" aria-label="Platform"><i class="fab fa-icon"></i></a>
```

---

## 📱 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License
Personal portfolio - All rights reserved © 2026 Kelly Gikonyo

---

## 📞 Questions or Issues?

**For contact form issues:**
- Ensure running on `http://localhost:PORT` not `file://`
- Check browser console (F12) for errors
- Verify FormSubmit is accessible: formsubmit.co

**To update portfolio:**
1. Edit `index.html` for content changes
2. Modify `css/style.css` for styling
3. Update `js/script.js` for functionality
4. Commit and push to GitHub
5. Live site updates automatically (if GitHub Pages enabled)

---

**Last Updated:** March 20, 2026
