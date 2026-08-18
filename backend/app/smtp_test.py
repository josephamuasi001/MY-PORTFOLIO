import os
import smtplib

from dotenv import load_dotenv


load_dotenv()


SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_EMAIL = os.getenv("SMTP_EMAIL")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")


def test_smtp():

    print("SMTP TEST: starting...")

    print(f"SMTP HOST: {SMTP_HOST}")
    print(f"SMTP PORT: {SMTP_PORT}")
    print(f"SMTP EMAIL configured: {bool(SMTP_EMAIL)}")
    print(f"SMTP PASSWORD configured: {bool(SMTP_PASSWORD)}")

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=15) as server:

        print("SMTP TEST: connection established")

        server.starttls()

        print("SMTP TEST: TLS enabled")

        server.login(
            SMTP_EMAIL,
            SMTP_PASSWORD
        )

        print("SMTP TEST: login successful")

    print("SMTP TEST: completed successfully")