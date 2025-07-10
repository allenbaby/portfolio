'use client'

import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { gsap } from '@/utils/gsap'

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

    useEffect(() => {
        if (contactRef.current) {
            gsap.fromTo(
                contactRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: 'top 80%',
                        toggleActions: 'play reverse play reverse',
                    }

                }
            )
        }
    }, [])

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-transparent"
        >
            <div className="max-w-xl w-full ">
                <h2 className="text-4xl text-black dark:text-white font-bold text-center mb-8">Contact Me</h2>
                <form ref={contactRef} onSubmit={handleSubmit} className="grid gap-6">
                    <input
                        type="text"
                        name='name'
                        placeholder="Your Name"
                        className="p-4 border dark:bg-gray-900 dark:opacity-75 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder="Your Email"
                        className="p-4 border dark:bg-gray-900 dark:opacity-75 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        rows={4}
                        name='message'
                        placeholder="Your Message"
                        className="p-4 border dark:bg-gray-900 dark:opacity-75 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        {status === 'sending' ? 'Sending…' : 'Send'}
                    </button>
                    {status === 'sent' && <p className="text-green-600">Message sent—thanks!</p>}
                    {status === 'error' && <p className="text-red-600">Oops! Something went wrong.</p>}
                </form>
            </div>
        </section>
    )
}
