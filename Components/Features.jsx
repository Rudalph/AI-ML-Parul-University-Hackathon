"use client"
import React from 'react'
import { FaTablets } from "react-icons/fa";
import { BsFileEarmarkMedicalFill } from "react-icons/bs"
import { GoLaw } from "react-icons/go";
import { MdBloodtype } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import { GiArcheryTarget } from "react-icons/gi";

export default function FeatureThree() {
    return (
        <div className='p-20'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
                        <p className="text-xs font-semibold uppercase tracking-widest text-black">
                            Feature of Swasthya Connect
                        </p>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-600 sm:text-4xl lg:text-5xl">
                        What Features Do We Provide ?
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">
                        Below are the services provided by Swastya Connect. Our aim is to make the healthcare journey
                        easy and accessicible for everyone.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <BsFileEarmarkMedicalFill className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Simplify Your Report</h3>
                        <p className="mt-4 text-sm text-gray-600">
                             Our AI-powered medical report simplifier generates easy-to-understand summaries of your medical reports. You can also chat with your report for further clarification.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <GiArcheryTarget className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Set Goals & Monitor</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        Fill out Swasthya Connect's form to know your health score, receive recommendations, set health goals, and monitor your habits to ensure they align with your goals. Additionally, you can live monitor your health status.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <TbMessageChatbot className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Medical Chatbot</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        Swasthya Connect's chatbot is trained on medical encyclopedias, textbooks, and various authentic research papers and articles, enabling it to answer all types of medical questions, including those related to legal rights in the medical domain. 
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DEF8ED]">
                            <FaTablets className="h-9 w-9 text-gray-700" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Find Alternate Medecine</h3>
                        <p className="mt-4 text-sm text-gray-600">
                        Swasthya Connect analyzes your prescription to provide alternative brand names with prices. It also shows nearby medical stores with available medicines and lets you order online.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
