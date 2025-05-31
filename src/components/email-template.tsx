import type * as React from "react"

interface EmailTemplateProps {
	name: string
	email: string
	company?: string
	message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, company, message }) => (
	<div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>
		<h1>New Contact Form Submission</h1>
		<p>
			<b>Name:</b> {name}
		</p>
		<p>
			<b>Email:</b> {email}
		</p>
		{company && (
			<p>
				<b>Company:</b> {company}
			</p>
		)}
		<p>
			<b>Message:</b>
		</p>
		<p style={{ whiteSpace: "pre-line" }}>{message}</p>
	</div>
)
