import type * as React from "react"
import { Resend } from "resend"
import { EmailTemplate } from "../../../components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
	try {
		const formData = await request.formData()
		const name = formData.get("name") as string
		const email = formData.get("email") as string
		const company = formData.get("company") as string
		const message = formData.get("message") as string

		const { data, error } = await resend.emails.send({
			from: "Atik Import Export <info@atikimportexport.com>",
			to: "info@atikimportexport.com",
			replyTo: email,
			subject: "New Message from Atik Import Export",
			react: EmailTemplate({ name, email, company, message }) as React.ReactElement,
		})

		if (error) {
			return Response.json({ error }, { status: 500 })
		}

		return Response.json({ data })
	} catch (error) {
		return Response.json({ error }, { status: 500 })
	}
}
