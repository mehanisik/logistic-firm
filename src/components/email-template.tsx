import type * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  company,
  message,
}) => (
  <div style={main}>
    <div style={container}>
      <div style={logoSection}>
        <img
          src={"/logo-light.png"}
          width="150"
          height="auto"
          alt="Atik Import Export"
          style={logo}
        />
      </div>
      <div style={content}>
        <h1 style={heading}>New Contact Form Submission</h1>
        <div style={infoSection}>
          <div style={infoRow}>
            <span style={label}>From:</span>
            <span style={value}>{name}</span>
          </div>
          <div style={infoRow}>
            <span style={label}>Email:</span>
            <a href={`mailto:${email}`} style={link}>
              {email}
            </a>
          </div>
          {company && (
            <div style={infoRow}>
              <span style={label}>Company:</span>
              <span style={value}>{company}</span>
            </div>
          )}
          <div style={infoRow}>
            <span style={label}>Date:</span>
            <span style={value}>
              {new Date().toLocaleString("tr-TR", {
                dateStyle: "full",
                timeStyle: "long",
              })}
            </span>
          </div>
        </div>
        <div style={messageSection}>
          <h2 style={messageHeading}>Message:</h2>
          <div style={messageContent}>{message}</div>
        </div>
        <div style={footer}>
          <p style={footerText}>
            This message was sent from the contact form on atikexp.com
          </p>
          <p style={footerText}>
            You can reply directly to this email to respond to {name}
          </p>
        </div>
      </div>
    </div>
  </div>
);

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
  borderBottom: "1px solid #e6ebf1",
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
  fontWeight: "600",
  color: "#484848",
  padding: "17px 0 0",
  margin: "0 0 20px",
};

const infoSection = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "6px",
  marginBottom: "24px",
};

const infoRow = {
  marginBottom: "12px",
  display: "flex" as const,
  alignItems: "center" as const,
};

const label = {
  fontWeight: "600",
  color: "#4a5568",
  width: "80px",
  flexShrink: 0,
};

const value = {
  color: "#2d3748",
};

const messageSection = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "6px",
  padding: "20px",
};

const messageHeading = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#4a5568",
  margin: "0 0 12px",
};

const messageContent = {
  color: "#2d3748",
  lineHeight: "1.6",
  whiteSpace: "pre-line" as const,
};

const link = {
  color: "#f24405",
  textDecoration: "none",
};

const footer = {
  marginTop: "32px",
  paddingTop: "20px",
  borderTop: "1px solid #e6ebf1",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "1.5",
  color: "#8898aa",
  margin: "0 0 8px",
};
