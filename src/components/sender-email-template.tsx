import * as React from "react";

interface SenderEmailTemplateProps {
  name: string;
  company: string;
}

export const SenderEmailTemplate = ({
  name,
  company,
}: SenderEmailTemplateProps) => {
  return (
    <div style={main}>
      <div style={container}>
        <div style={logoSection}>
          <img
            src="/logo-light.png"
            width="150"
            height="auto"
            alt="Atik Import Export"
            style={logo}
          />
        </div>
        <div style={content}>
          <h1 style={heading}>Thank You for Contacting Us</h1>
          <p style={paragraph}>Dear {name},</p>
          <p style={paragraph}>
            Thank you for reaching out to Atik Import Export. We have received
            your message and will get back to you as soon as possible.
          </p>
          {company && (
            <p style={paragraph}>
              We have noted your company information: <strong>{company}</strong>
            </p>
          )}
          <p style={paragraph}>
            In the meantime, you can learn more about our services by visiting
            our website or following us on social media.
          </p>
          <div style={buttonContainer}>
            <a href="https://atikexp.com" style={button}>
              Visit Our Website
            </a>
          </div>
          <p style={paragraph}>
            If you have any urgent matters, please don't hesitate to contact us
            directly at{" "}
            <a href="tel:+905339642084" style={link}>
              +90 533 964 20 84
            </a>
          </p>
          <p style={paragraph}>
            Best regards,
            <br />
            Atik Import Export Team
          </p>
        </div>
        <div style={footer}>
          <p style={footerText}>
            © {new Date().getFullYear()} Atik Import Export. All rights
            reserved.
          </p>
          <p style={footerText}>
            This is an automated message, please do not reply directly to this
            email.
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const logoSection = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const logo = {
  margin: "0 auto",
};

const content = {
  padding: "0 48px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
  margin: "0 0 20px",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#3c4149",
};

const buttonContainer = {
  padding: "27px 0 27px",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#f24405",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  width: "200px",
  padding: "14px 7px",
};

const link = {
  color: "#f24405",
  textDecoration: "underline",
};

const footer = {
  padding: "0 48px",
  borderTop: "1px solid #e6ebf1",
  marginTop: "32px",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "1.5",
  color: "#8898aa",
  margin: "0",
};

export default SenderEmailTemplate;
