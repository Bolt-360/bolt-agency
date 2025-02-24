import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const data = await req.json();
        const { name, email, phone } = data;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'victor@bolt360.com.br',
            subject: 'Novo Contato do Site',
            html: `
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <header style="background-color: #007BFF; color: #fff; padding: 15px; text-align: center; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0;">Novo Pedido de Diagnóstico Gratuito</h2>
      </header>
      <main style="padding: 20px; background-color: #f9f9f9;">
        <p style="font-size: 16px; color: #333;">Você recebeu um novo pedido de contato pelo site. Confira os detalhes abaixo:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Nome:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">E-mail:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Telefone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
          </tr>
        </table>
      </main>
      <footer style="text-align: center; padding: 15px; background-color: #007BFF; color: #fff; border-radius: 0 0 8px 8px;">
        <p style="margin: 0; font-size: 14px;">Este é um e-mail gerado automaticamente por <strong>Bolt Agency</strong>. Por favor, não responda.</p>
      </footer>
    </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return Response.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ error: 'Error sending email' }, { status: 500 });
    }
}