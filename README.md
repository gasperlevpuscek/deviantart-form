# DeviantArt Form

A frontend implementation of DeviantArt's login and registration forms, featuring multi-step authentication flows with form validation and user input checking.

## Overview

This project recreates the DeviantArt authentication experience with HTML forms, CSS styling, and JavaScript validation. It includes both login and registration flows with multiple steps, client-side validation, and a polished user interface.

## Features

- **Login Form**: Username/email input with validation
- **Registration (Join)**: Multi-step sign-up process
- **Form Validation**: Real-time username and password validation
- **Multi-step Forms**: Step-by-step authentication flows
- **Social Login Options**: UI for Google, Apple, and Facebook login alternatives
- **Responsive Design**: CSS-styled forms matching DeviantArt's design language

## Project Structure

```
deviantart-form/
├── index.html                  # Main login page
├── forms/
│   ├── join-step1.html        # Registration step 1
│   ├── join-step2.html        # Registration step 2
│   └── login-step2.html       # Login step 2 (password entry)
├── scripts/
│   ├── about.js               # General utilities
│   ├── username_check.js      # Username validation
│   ├── email_password_check.js # Email and password validation
│   ├── join_date_fill.js      # Date filling for registration
│   ├── login_complete.js      # Login completion logic
│   └── username_date_check.js # Combined username and date validation
├── styles/
│   ├── login_style.css        # Main login page styling
│   ├── login-step2_style.css  # Step 2 login styling
│   ├── join-step1_style.css   # Step 1 registration styling
│   └── join-step2_style.css   # Step 2 registration styling
└── images/                     # SVG logos and icons (DeviantArt, Google, Apple, Facebook)
```

## Pictures

<img src="https://github.com/user-attachments/assets/7d293be3-b1b7-4376-852b-41bd3fa1bbe2" width="80%"/>

<img src="https://github.com/user-attachments/assets/0eab0b10-3cf5-4a6f-8cd9-aab9474faad4" width="80%"/>

<img src="https://github.com/user-attachments/assets/97628780-d6a1-459d-9bcd-6d378e32e1c1" width="80%"/>

<img src="https://github.com/user-attachments/assets/b35ea55a-5dae-4ee1-a4a7-04d3f43695c4" width="80%" />


### HTML Forms
- **index.html** - Entry point with login form requesting username
- **login-step2.html** - Second login step for password entry
- **join-step1.html** - First registration step (basic info)
- **join-step2.html** - Second registration step (additional info)

### JavaScript Validation
- **username_check.js** - Validates username input during login
- **email_password_check.js** - Validates email and password during registration
- **login_complete.js** - Handles login completion
- **join_date_fill.js** - Auto-fills date fields in registration
- **username_date_check.js** - Combined validation for username and dates

### Styling
Each form step has corresponding CSS files that style the login/registration interface with DeviantArt's design aesthetic.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/gasperlevpuscek/deviantart-form.git
   ```

2. Navigate to the project directory:
   ```bash
   cd deviantart-form
   ```

3. Open `index.html` in your web browser or serve with a local web server

## Technologies Used

- **HTML5** - Form structure and markup
- **CSS3** - Styling and layout
- **JavaScript** - Form validation and interactivity
- **SweetAlert2** - User notifications and alerts

## Validation

Login credentials are hardcoded in JavaScript in [`username_check.js`](scripts/username_check.js) and [`login_complete.js`](scripts/login_complete.js).

**Test Credentials:**
- **Username:** `user123`
- **Password:** `password123`

## Notes

This is a frontend-only implementation for demonstration purposes. Form submissions are not connected to a backend service and validation is client-side only.

## Author 

Gašper Levpušček

## License

See LICENSE file for details.
