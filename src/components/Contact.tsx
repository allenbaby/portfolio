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
                        once: true,
                    }

                }
            )
        }
    }, [])

    return (
        <section
            id="contact"
            className="section-shell min-h-screen flex items-center justify-center px-6 py-24"
        >
            <div className="glass-panel w-full max-w-3xl rounded-[2rem] p-8 sm:p-12">
                <p className="eyebrow mb-4">06 / Let&apos;s make something</p>
                <h2 className="mb-8 text-5xl font-black tracking-tight text-white sm:text-7xl">Say hello<span className="text-[var(--acid)]">.</span></h2>
                <form ref={contactRef} onSubmit={handleSubmit} className="grid gap-6">
                    <input
                        type="text"
                        name='name'
                        placeholder="Your Name"
                        className="rounded-xl border border-white/15 bg-white/5 p-4 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--acid)]"
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder="Your Email"
                        className="rounded-xl border border-white/15 bg-white/5 p-4 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--acid)]"
                    />
                    <textarea
                        rows={4}
                        name='message'
                        placeholder="Your Message"
                        className="rounded-xl border border-white/15 bg-white/5 p-4 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[var(--acid)]"
                    ></textarea>
                    <button
                        type="submit"
                        className="rounded-xl bg-[var(--acid)] py-4 font-bold text-[#070812] transition hover:bg-white"
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
