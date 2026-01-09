"use client";
import React, { useState } from 'react';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { contactSchema, contactInput } from '../api/validate-schema/contact-validate';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';

const Page = () => {
    const { register, handleSubmit, reset, control } = useForm<contactInput>({ resolver: zodResolver(contactSchema) });
    const { errors, isSubmitting } = useFormState<contactInput>({ control });
    const [message, setMessage] = useState<string>("");

    const handleContactForm: SubmitHandler<contactInput> = async (data: contactInput) => {
        try {
            const response = await axios.post('/api/contact-form', data);
            console.log(response.data);
            setMessage("Message sent successfully!");
            if (response.data?.success === true) {
                setTimeout(() => {
                    setMessage("");
                }, 3000);
                reset();
            }
        } catch (error) {
            console.log("Form error...", error);
        }
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(handleContactForm)(e);
    };

    return (
        <div className="min-h-screen mt-12 md:mt-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Let&apos;s Work Together
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind? I&apos;m always open to discussing new opportunities, creative ideas, or ways to be part of your vision.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Left Side - Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Introduction */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                    Get In Touch
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    I&apos;dm always excited to connect with fellow developers, potential clients, and anyone interested in building something amazing together.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Whether you have a project proposal, a question about my work, or just want to say hello, feel free to reach out. I typically respond within 24-48 hours.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-6 sm:p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                                            <p className="text-gray-600">Pune, Maharashtra, India</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                            <a href="mailto:ahmadrazanawab@gmail.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                                                ahmadrazanawab@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                            <p className="text-gray-600">+91 91234 56789</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Available for freelance projects</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Open to full-time opportunities</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Interested in collaborations</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold">Response Time:</span> I typically respond to inquiries within 24-48 hours during business days.
                                    </p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
                                <div className="flex flex-wrap gap-3">
                                    <a href="https://github.com/ahmadrazanawab" className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all group">
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-teal-600">GitHub</span>
                                    </a>
                                    <a href="https://www.linkedin.com/feed/" className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all group">
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-teal-600">LinkedIn</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all group">
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-teal-600">Twitter</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
                                <div className="mb-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                                        Send Me a Message
                                    </h2>
                                    <p className="text-gray-600">
                                        Fill out the form below and I'll get back to you as soon as possible.
                                    </p>
                                </div>
                             
                                    <form onSubmit={handleSubmit(handleContactForm)} className="space-y-6">
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                {...register("fullName", {
                                                    required: "Name is required.",
                                                    minLength: {
                                                        value: 3,
                                                        message: "Name must be at least 3 characters.",
                                                    },
                                                })}
                                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                placeholder="John Doe"
                                            />
                                            {errors.fullName && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.fullName.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="email"
                                                {...register("email", {
                                                    required: "Email is required.",
                                                })}
                                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="phone"
                                                {...register("phone", {
                                                    required: "Phone number is required.",
                                                    pattern: {
                                                        value: /^[6-9]\d{9}$/,
                                                        message: "Enter a valid 10-digit Indian phone number",
                                                    },
                                                })}
                                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                                placeholder="9123456789"
                                            />
                                            {errors.phone && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Your Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                {...register("message", {
                                                    required: "Message is required.",
                                                    minLength: {
                                                        value: 5,
                                                        message: "Message must be at least 5 characters.",
                                                    },
                                                    maxLength: {
                                                        value: 100,
                                                        message: "Message cannot exceed 100 characters.",
                                                    },
                                                })}
                                                rows={6}
                                                className="w-full min-h-[160px] rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                                                placeholder="Tell me about your project or inquiry..."
                                            />
                                            {errors.message && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        {message && (
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                                                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-green-700 font-medium">{message}</p>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-teal-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-teal-700 active:bg-teal-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl disabled:hover:shadow-lg flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
