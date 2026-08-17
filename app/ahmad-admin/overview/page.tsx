
"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Message {
    _id: string;
    fullName: string;
    phone: string;
    email: string;
    message: string;
}

const Page = () => {
    const [getMessage, setGetMessages] = useState<Message[]>([]);

    const getAllMessage = async () => {
        try {
            const res = await axios.get("/api/admin/contact");
            setGetMessages(res.data?.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllMessage();
    }, [getMessage]);

    const handleDeleteMessage = async (_id:string) => {
        try {
            const res = await axios.delete(`/api/admin/contact/${_id}`);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 lg:px-8 lg:mt-20">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
                        Admin Dashboard
                    </p>

                    <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                        Contact Messages
                    </h1>

                    <p className="mt-2 text-sm text-slate-400 sm:text-base">
                        View and manage messages received from your website.
                    </p>
                </div>

                {/* Messages */}
                {getMessage.length === 0 ? (
                    <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-8">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-white">
                                No messages found
                            </h2>

                            <p className="mt-2 text-sm text-slate-400">
                                You don't have any contact messages yet.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {getMessage && getMessage.map((message, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-500/10 sm:p-6"
                            >

                                {/* Card Header */}
                                <div className="mb-5 flex items-start justify-between gap-3">
                                    <div className="min-w-0">

                                        <h4 className="truncate text-lg font-semibold text-white sm:text-xl">
                                            {message.fullName}
                                        </h4>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Message #{idx + 1}
                                        </p>

                                    </div>

                                    <span className="shrink-0 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                                        New
                                    </span>
                                </div>

                                {/* Contact Information */}
                                <div className="space-y-3">

                                    <div className="rounded-lg bg-slate-800/60 p-3">
                                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                                            Email
                                        </p>

                                        <p className="break-all text-sm text-slate-200">
                                            {message.email}
                                        </p>
                                    </div>

                                    <div className="rounded-lg bg-slate-800/60 p-3">
                                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                                            Phone
                                        </p>

                                        <p className="text-sm text-slate-200">
                                            {message.phone}
                                        </p>
                                    </div>

                                </div>

                                {/* Message */}
                                <div className="mt-4 flex-1 rounded-lg bg-slate-800/60 p-4">
                                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                                        Message
                                    </p>

                                    <p className="break-words text-sm leading-6 text-slate-300">
                                        {message.message}
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="mt-5 border-t border-slate-800 pt-4">

                                    <button
                                        type="button"
                                        onClick={()=>handleDeleteMessage(message._id)}
                                        className="w-full rounded-lg bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500/50"
                                    >
                                        Delete Message
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;