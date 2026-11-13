"use client"
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const contactRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    useEffect(() => {
        if (status === 'sent' || status === 'error') {
            const id = setTimeout(() => setStatus('idle'), 5000);
            return () => clearTimeout(id);
        }
    }, [status]);

    emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!contactRef.current) return;

        try {
            setStatus('sending');

            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                contactRef.current
            );

            setStatus('sent');
            contactRef.current.reset();
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    }

    return (
        <footer id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-layout">
                    <div className="contact-heading"><h2>Say hello.</h2><a className="contact-email" href="mailto:allen.baby10@gmail.com">allen.baby10@gmail.com</a></div>
                    <form ref={contactRef} onSubmit={handleSubmit} className="contact-form" aria-label="Contact Allen" aria-busy={status === 'sending'}>
                        <div className="form-row">
                            <div><label htmlFor="contact-name">Your name</label><input id="contact-name" type="text" name="name" placeholder="Your Name" autoComplete="name" required /></div>
                            <div><label htmlFor="contact-email">Your email</label><input id="contact-email" type="email" name="email" placeholder="Your Email" autoComplete="email" required /></div>
                        </div>
                        <div><label htmlFor="contact-message">Your message</label><textarea id="contact-message" rows={4} name="message" placeholder="Your Message" required /></div>
                        <div className="form-submit"><button type="submit" className="button" disabled={status === 'sending'} aria-busy={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send'}</button><p className="form-status" role="status">{status === 'sent' ? 'Message sent. Thanks!' : status === 'error' ? 'Could not send. Please try again or email me directly.' : ''}</p></div>
                    </form>
                </div>
                <div className="colophon"><p>Allen Baby</p><a href="#main">Back to top</a></div>
            </div>
        </footer>
    )
}
