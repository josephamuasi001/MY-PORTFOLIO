import os
import smtplib

from email.message import EmailMessage
from dotenv import load_dotenv


load_dotenv()


SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_EMAIL = os.getenv("SMTP_EMAIL")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")


def send_enquiry_email(enquiry: dict):

    message = EmailMessage()

    message["Subject"] = f"New Portfolio Enquiry — {enquiry['name']}"
    message["From"] = SMTP_EMAIL
    message["To"] = SMTP_EMAIL

    message.set_content(
        f"""
New enquiry received from your portfolio.

Name: {enquiry['name']}
Email: {enquiry['email']}
Phone: {enquiry.get('phone') or 'Not provided'}

Project Type: {enquiry['project_type']}
Budget: {enquiry.get('budget') or 'Not provided'}
Timeline: {enquiry.get('timeline') or 'Not provided'}

Message:

{enquiry['message']}
"""
    )

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:

        server.starttls()

        server.login(
            SMTP_EMAIL,
            SMTP_PASSWORD
        )

        server.send_message(message)