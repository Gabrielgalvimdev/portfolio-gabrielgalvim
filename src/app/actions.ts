
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  subject: z.string().min(3, { message: 'O assunto deve ter pelo menos 3 caracteres.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os erros no formulário.',
      success: false,
    };
  }
  
  // Here you would normally send an email. For this simulation, we'll just log it.
  console.log('Form data submitted:', validatedFields.data);

  // In a real application, you would integrate with an email service like Resend, SendGrid, or Nodemailer.
  // const { name, email, subject, message } = validatedFields.data;
  // await sendEmail({ to: 'almeida99122@gmail.com', from: 'portfolio@yourdomain.com', subject, text: message, reply_to: email });

  return {
    message: 'Obrigado pelo seu contato! Responderei em breve.',
    success: true,
  };
}
