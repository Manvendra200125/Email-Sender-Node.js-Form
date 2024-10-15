# Email-Sender-Node.js-Form
Email Sender Node.js Form is a simple Node.js application that handles form submissions from a contact form and sends emails using a Node.js backend.


## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/email-sender-nodejs-form.git
    cd email-sender-nodejs-form
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```



   

3.  For Gmail, it's recommended to use an **App Password** instead of your regular email password for security. Follow these steps to create one:

    ### Creating an App Password for Gmail

    1. Go to your [Google Account Security page](https://myaccount.google.com/security).
    2. Under "Signing in to Google," enable **2-Step Verification** if you haven’t already.
    3. After enabling, go to **App passwords**.
    4. Select the app and device you want to generate the app password for (e.g., select "Mail" and "Windows Computer").
    5. Click **Generate**.

4. **Run the server**:
    ```bash
    npm start
    or
    node server.js
    ```

    The server will start at `http://localhost:3000/`.

5. **Open the contact form** in your browser:
    ```bash
    http://localhost:3000/
    ```

## Usage

1. Navigate to the contact form in your browser.
2. Fill out the form with your Name, Email, Phone, Subject, and Message.
3. Submit the form, and it will send an email to the designated recipient via your Node.js backend.
4. A confirmation or error message will be displayed based on the outcome.

## Email Sending Functionality

The backend uses `Nodemailer` to send emails. The form data (Name, Email, Phone, Subject, Message) is captured on the frontend and sent to the server via `fetch()`. The server then processes the data and sends an email using your SMTP provider (Gmail or another email service).

## Nodemailer Setup

This project uses the `Nodemailer` module to send emails. In the `Nodemailer` file, you need to specify your email service (e.g., Gmail) and provide your email login credentials.

For Gmail:
- You may need to enable **less secure apps** on your Gmail account or generate an **App Password** for better security if using 2-factor authentication.
