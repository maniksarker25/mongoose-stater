const generateResetPasswordEmail = (resetLink: string): string => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f7;
        margin: 0;
        padding: 0;
      }
  
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
  
      .header {
        text-align: center;
        padding: 20px;
        background-color: #4CAF50;
        color: white;
        border-radius: 8px 8px 0 0;
      }
  
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
  
      .content {
        padding: 20px;
      }
  
      .content p {
        font-size: 16px;
        line-height: 1.6;
        color: #333333;
      }
  
      .reset-button {
        display: block;
        width: 100%;
        max-width: 200px;
        margin: 20px auto;
        padding: 15px 25px;
        background-color: #4CAF50;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        border-radius: 4px;
      }
  
      .footer {
        text-align: center;
        padding: 10px;
        background-color: #f4f4f7;
        color: #999999;
        font-size: 12px;
      }
  
      .footer a {
        color: #4CAF50;
        text-decoration: none;
      }
  
      .footer p {
        margin: 5px 0;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <div class="header">
        <h1>Password Reset Request</h1>
      </div>
      <div class="content">
        <p>Hello,</p>
        <p>We received a request to reset your password for your account. If you did not make this request, you can safely ignore this email.</p>
        <p>Click the button below to reset your password. This link will expire in 10 minutes.</p>
        <a href="${resetLink}" class="reset-button">Reset Your Password</a>
        <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
        <p><a href="${resetLink}">${resetLink}</a></p>
      </div>
      <div class="footer">
        <p>If you did not request a password reset, no further action is required on your part.</p>
        <p>Thank you for using our service!</p>
        <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p><a href="support_link">Contact Support</a></p>
      </div>
    </div>
  </body>
  
  </html>
    `;
};

export default generateResetPasswordEmail;
