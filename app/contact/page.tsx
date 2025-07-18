"use client";
import React from 'react';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';

interface Iinputs {
    name: string;
    email: string;
    phone: string;
    message: string;
}





const Page = () => {
    const { register, handleSubmit, reset, control } = useForm<Iinputs>();

    const handleContactForm: SubmitHandler<Iinputs> = async (data) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve("this is resolve ok");
            }, 5000);
        })
        console.log("Form Data: ", data);
        reset();
    }

    const { errors, isSubmitting } = useFormState<Iinputs>({ control });

    return (
        <section className="mt-32">
            <h4 className="text-center text-4xl">Get in Touch</h4>
            <div className="bg-white">
                <form onSubmit={handleSubmit(handleContactForm)}
                    className="bg-gray-200 p-6 rounded-lg mx-auto w-[80%]"
                >
                    <div className="grid grid-cols-1 gap-4">
                        <div className="w-full">
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is required.",
                                    minLength: {
                                        value: 3,
                                        message: "Name must me atleast 3 characters."
                                    }
                                })}
                                className="border p-3 rounded-lg w-full"
                                placeholder="Full Name"
                            />
                            {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
                        </div>
                        <div className='w-full'>
                            <input
                                type="text"
                                {...register("email",
                                    {
                                        required: "Email is Required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address",
                                        },
                                    }
                                )}
                                className="border p-3 rounded-lg w-full"
                                placeholder="Email"
                            />
                            {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
                        </div>
                        <div className='w-full'>
                            <input
                                type="text"
                                {...register("phone",
                                    {
                                        required: "Phone number is Required",
                                        pattern: {
                                            value: /^[6-9]\d{9}$/,
                                            message: "Enter a valid 10-digit Indian phone number",
                                        },
                                    }
                                )}
                                className="border p-3 rounded-lg w-full"
                                placeholder="Phone Number"
                            />
                            {errors.phone && <p className="text-sm text-red-400">{errors.phone.message}</p>}
                        </div>
                        <div className='w-full'>
                            <textarea
                                {...register("message",
                                    {
                                        required: "Message is Required",
                                        minLength: {
                                            value: 5,
                                            message: "Message must be atleast 5 characters"
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: "Message cannot exceed 100 characters",
                                        }
                                    }
                                )}
                                rows={10}
                                className="border p-3 rounded-lg w-full"
                                placeholder="Write Message..."
                            />
                            {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
                        </div>
                    </div>
                    <button type="submit" disabled={isSubmitting} className={`border p-3 mt-3 rounded-xl ${isSubmitting ? "text-red-300":""}`}>
                        {isSubmitting ? "submitting..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Page;
