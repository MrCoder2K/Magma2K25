"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
// import ContactMap from "./ContactMap";
import toast from "react-hot-toast";
import ContactForm from "@/components/Forms/ContactForm"

import ContactMap from "./ContactMap";

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        console.log(formData.email)
        toast.success("Message Sent Successfully");

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '', 
            message: ''
        });
        // Here you would typically send the form data to your backend
    };
    return (
        <div>
            <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900">Get In Touch</h1>
            <p className="text-center text-lg pt-4 font-extrabold tracking-tight lg:text-xl text-slate-900">
                Have questions about MAGMA'25? We're here to help!
            </p>
            <section className="py-16 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="font-manrope text-2xl lg:text-4xl text-center font-bold text-gray-900 ">Faculty Coordinators</h2>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center max-w-4xl w-full">
                            <div className="group w-fit text-center">
                                <div className="relative mb-4">
                                    <img
                                        src="/images/SM.jpg"
                                        alt="Antonio image"
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Dr.P. Suganya Devi
                                </h4>
                                <span className="text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                                    9566267013
                                </span>
                            </div>
                            <div className="group w-fit text-center">
                                <div className="relative mb-4">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696238396.png"
                                        alt="Patricia image"
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Patricia Angely
                                </h4>
                                <span className="text-gray-500 transition-all duration-500 group-hover:text-gray-900">
                                    Co-Founder
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="mb-12 pt-16">
                        <h2 className="font-manrope text-2xl lg:text-4xl text-center font-bold text-gray-900 ">Student Coordinators</h2>
                    </div>
                    <div className="w-full flex justify-center px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl w-full place-items-center">
                            <div className="group w-fit text-center">
                                <div className="relative mb-4">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696238374.png"
                                        alt="Antonio image"
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-transparent group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Antonio Roberto
                                </h4>
                                <span className="text-gray-500 transition-all duration-500 group-hover:text-gray-900">Founder</span>
                            </div>
                            <div className="group w-fit text-center">
                                <div className="relative mb-4">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696238396.png"
                                        alt="Patricia image"
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-transparent group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Patricia Angely
                                </h4>
                                <span className="text-gray-500 transition-all duration-500 group-hover:text-gray-900">Co-Founder</span>
                            </div>
                            <div className="group w-fit text-center">
                                <div className="relative mb-4">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696238411.png"
                                        alt="Jerom image"
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-transparent group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Jerom Bell
                                </h4>
                                <span className="text-gray-500 transition-all duration-500 group-hover:text-gray-900">Chairman</span>
                            </div>
                            <div className="group w-fit text-center">
                                <div className="relative mb-4">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696238446.png"
                                        alt="Martin image"
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-transparent group-hover:border-indigo-600"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-1 capitalize transition-all duration-500 group-hover:text-indigo-600">
                                    Martin Darbys
                                </h4>
                                <span className="text-gray-500 transition-all duration-500 group-hover:text-gray-900">Product Manager</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <section>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 items-start">
                        <div className="flex items-center lg:mb-0 mb-10">
                            <ContactForm/>
                        </div>
                        <div
                            className="lg:max-w-xl w-full h-[600px] flex items-center justify-center">
                            <div>
                                <ContactMap />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default ContactUs