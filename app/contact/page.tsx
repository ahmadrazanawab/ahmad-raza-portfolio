"use client";
import React from 'react';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { contactSchema, contactInput } from '../api/validate-schema/contact-validate';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';



const Page = () => {
    const { register, handleSubmit, reset, control } = useForm<contactInput>({ resolver: zodResolver(contactSchema) });
    const { errors, isSubmitting } = useFormState<contactInput>({ control });
    const handleContactForm: SubmitHandler<contactInput> = async (data: contactInput) => {
        try {
            const response = await axios.post('/api/contact-form', data);
            console.log(response.data.data);
            reset();
        } catch (error) {
            console.log("Form error...", error);
        }
    }


    // bg-[#D8E2EC]
    return (
        <section className="pt-28 px-4  bg-[#D8E2EC]">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Side Text */}
                <div className="w-full md:w-1/2">
                    <div className="w-[80%] md:mt-8 mx-auto">
                        <h2 className="text-3xl font-bold text-[#014051] mb-4 text-center">Get in Touch</h2>
                        <p className="text-[#014051] mb-4">
                            Have a project in mind, a question, or just want to connect? I'm always open to discussing new opportunities, collaborations, or tech ideas.
                        </p>
                        <p className="text-[#014051] mb-4">
                            Fill out the form or drop me an email — let's build something amazing together.
                        </p>
                        <ul className="text-[#014051] text-sm space-y-2">
                            <li>📍 Pune, Maharashtra, India</li>
                            <li>📧 <span className="text-blue-600">ahmad.raza.dev@gmail.com</span></li>
                            <li>📞 +91 91234 56789</li>
                        </ul>
                        <p className="text-[#014051] mt-4">
                            I usually respond within 24–48 hours. Thanks for stopping by!
                        </p>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 mb-5">
                    <form
                        onSubmit={handleSubmit(handleContactForm)}
                        className="bg-[#FAFAFA] p-6 rounded-lg md:w-[90%]  mx-auto"
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
                                    className="border p-3 text-[#014051] rounded-lg w-full"
                                    placeholder="Full Name"
                                />
                                {errors.fullName && (
                                    <p className="text-sm text-red-400">{errors.fullName.message}</p>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("email", {
                                        required: "Email is required.",
                                    })}
                                    className="border p-3 rounded-lg w-full"
                                    placeholder="Email"
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-400">{errors.email.message}</p>
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
                                    className="border p-3 rounded-lg w-full"
                                    placeholder="Phone Number"
                                />
                                {errors.phone && (
                                    <p className="text-sm text-red-400">{errors.phone.message}</p>
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
                                    className="border p-3 rounded-lg w-full"
                                    placeholder="Write Message..."
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-400">{errors.message.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='flex w-full mt-3'>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`border p-3 mx-auto rounded-xl bg-black text-white w-full cursor-pointer hover:bg-white hover:text-black hover:border  ${isSubmitting ? "text-red-300" : ""
                                    }`}
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

