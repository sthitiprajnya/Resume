import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface ContactFormData {
  from_name:  string;
  from_email: string;
  subject:    string;
  message:    string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, data as any, PUBLIC_KEY);
}