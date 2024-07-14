import info from '@/utils/info'
import { Resend } from 'resend'

export async function POST(request: Request): Promise<Response> {
    const { mail } = info()
    const formData = await request.json()
    const resend = new Resend(process.env.NEXT_PULIC_RESEND_API_KEY)

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: mail.secundary,
        subject: 'Contato via website',
        html: `
            <div>
                <p>Nome: ${formData.name}</p>
                <p>Email: ${formData.email}</p>
                <p>Message: ${formData.message}</p>
            </div>
        `
    })

    return Response.json(formData)
}
