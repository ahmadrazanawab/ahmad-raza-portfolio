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


    // bg-[#D8E2EC]
    return (
        <section className="pt-28 px-4 bg-gradient-to-b from-teal-50 via-white to-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10">
                {/* Left Side Text */}
                <div className="w-full md:w-1/2">
                    <div className="w-[85%] md:w-[90%] md:mt-10 mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">Get in Touch</h2>
                        <p className="text-gray-700 mb-4">
                            Have a project in mind, a question, or just want to connect? I&apos;m always open to discussing new opportunities, collaborations, or tech ideas.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Fill out the form or drop me an email — let&apos;s build something amazing together.
                        </p>
                        <ul className="text-gray-700 text-sm space-y-2">
                            <li>📍 Pune, Maharashtra, India</li>
                            <li>📧 <span className="text-blue-600">ahmadrazanawab@gmail.com</span></li>
                            <li>📞 +91 91234 56789</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            I usually respond within 24–48 hours. Thanks for stopping by!
                        </p>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 mb-5">
                    <form
                        onSubmit={handleSubmit(handleContactForm)}
                        className="bg-white/80 backdrop-blur border border-black/5 shadow-sm p-6 md:p-8 rounded-2xl md:w-[90%]  mx-auto"
                    >
                        <div className="grid grid-cols-1 gap-4">
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("fullName", {
                                        required: "Name is required.",
                                        minLength: {
                                            value: 3,
                                            message: "Name must be at least 3 characters.",
                                        },
                                    })}
                                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition"
                                    placeholder="Full Name"
                                />
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("email", {
                                        required: "Email is required.",
                                    })}
                                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition"
                                    placeholder="Email"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("phone", {
                                        required: "Phone number is required.",
                                        pattern: {
                                            value: /^[6-9]\d{9}$/,
                                            message: "Enter a valid 10-digit Indian phone number",
                                        },
                                    })}
                                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition"
                                    placeholder="Phone Number"
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <textarea
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
                                    className="w-full min-h-[140px] rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/50 transition"
                                    placeholder="Write Message..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                                )}
                            </div>
                            {message && <div className='ml-3'>
                                <p className='inline-block rounded-md border border-green-200 bg-green-50 px-3 py-2 text-green-700'>{message}</p>
                            </div>}
                        </div>
                        <div className='flex w-full mt-3'>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`inline-flex items-center justify-center w-full px-4 py-3 mx-auto rounded-xl font-medium bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 disabled:opacity-60 disabled:cursor-not-allowed transition ${isSubmitting ? "opacity-80" : ""}`}
                            >
                                {isSubmitting ? "Submitting..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Page;

