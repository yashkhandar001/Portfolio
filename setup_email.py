"""
Yash Khandar - Automated Email Dispatch & Credentials Wizard
Connects your Gmail to the AI Internship Agent to deliver live updates directly to yashkhandar04@gmail.com.
"""

import os
import sys
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Ensure utf-8 output on Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

TARGET_EMAIL = "yashkhandar04@gmail.com"
ENV_FILE = ".env"

def main():
    print("=" * 70)
    print(" 📧 YASH KHANDAR - AI INTERNSHIP AGENT GMAIL SETUP WIZARD")
    print(f" 🎯 Target Email: {TARGET_EMAIL}")
    print("=" * 70)
    print("\nTo send real emails to your Gmail inbox, Google requires a 16-character App Password.")
    print("Steps to get it (takes 30 seconds):")
    print("  1. Open: https://myaccount.google.com/apppasswords")
    print("  2. If prompted, sign in to your Google Account.")
    print("  3. Name the app: 'Internship Agent' and click 'Create'.")
    print("  4. Copy the 16-character code (example: abcd efgh ijkl mnop).")
    print("-" * 70)

    app_password = input("\n👉 Paste your 16-character Google App Password here (or press Enter to cancel): ").strip()
    
    if not app_password:
        print("[!] No password entered. Setup cancelled.")
        return

    # Clean any spaces in the app password
    app_password_clean = app_password.replace(" ", "")

    print("\n[*] Testing live SMTP SSL connection with Google Gmail servers...")

    try:
        # Create test email
        msg = MIMEMultipart("alternative")
        msg["Subject"] = "🚀 [VERIFIED] Yash's AI Internship Agent Email Alert System is Live!"
        msg["From"] = f"Yash AI Copilot <{TARGET_EMAIL}>"
        msg["To"] = TARGET_EMAIL

        html_body = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; padding: 20px; text-align: center; border-radius: 8px;">
                <h2 style="margin: 0;">🎉 Live Email Verification Successful!</h2>
                <p style="margin: 5px 0 0; opacity: 0.9;">AI Internship Notification System is now Active</p>
            </div>
            <div style="padding: 20px; color: #334155;">
                <p>Hello <strong>Yash</strong>,</p>
                <p>Your Google Gmail account is now successfully linked to your <strong>Autonomous AI Internship Agent</strong>!</p>
                <div style="background: #f8fafc; border-left: 4px solid #6366f1; padding: 12px; margin: 15px 0;">
                    <div>✅ <strong>Recipient:</strong> {TARGET_EMAIL}</div>
                    <div>✅ <strong>College Profile:</strong> KJ Somaiya Institute of Technology (KJSIT)</div>
                    <div>✅ <strong>Status:</strong> Live SMTP Delivery Verified</div>
                </div>
                <p>From now on, whenever you run <code>python internship_agent.py</code>, complete breakdown reports for all 12 internship applications will land straight into this inbox.</p>
            </div>
            <div style="text-align: center; color: #94a3b8; font-size: 12px; border-top: 1px solid #e2e8f0; padding-top: 15px;">
                Yash Khandar Portfolio AI Agent &bull; 2025/2026
            </div>
        </div>
        """
        msg.attach(MIMEText(html_body, "html"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(TARGET_EMAIL, app_password_clean)
            server.sendmail(TARGET_EMAIL, TARGET_EMAIL, msg.as_string())

        print(f"\n[+] SUCCESS! Live verification email dispatched to {TARGET_EMAIL}!")
        print(f"[+] Check your inbox now — you should see the email!")

        # Save to .env
        with open(ENV_FILE, "w", encoding="utf-8") as f:
            f.write(f"SMTP_EMAIL_USER={TARGET_EMAIL}\n")
            f.write(f"SMTP_APP_PASSWORD={app_password_clean}\n")

        print(f"[+] Saved credentials to {ENV_FILE}!")
        print("\n🚀 Now you can run 'python internship_agent.py' anytime to receive full 12-role application updates in your email!")

    except Exception as e:
        print(f"\n[!] SMTP Connection Error: {e}")
        print("[!] Please verify your App Password and try again.")

if __name__ == "__main__":
    main()
