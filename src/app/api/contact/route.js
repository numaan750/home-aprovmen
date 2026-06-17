import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, projectType, vision } = body;

        if (!firstName || !email) {
            return Response.json(
                { success: false, message: "Required fields missing" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            replyTo: email,
            subject: `New Project Inquiry - ${projectType}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Project Type:</strong> ${projectType}</p>
                <p><strong>Vision:</strong></p>
                <p>${vision}</p>
            `,
        });

        return Response.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Email send error:", error);
        return Response.json(
            { success: false, message: "Failed to send email" },
            { status: 500 }
        );
    }
}