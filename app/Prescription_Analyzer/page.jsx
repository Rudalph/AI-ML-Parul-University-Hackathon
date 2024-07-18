"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const people = [
    {
        name: 'John Doe',
        title: 'Front-end Developer',
        department: 'Engineering',
        email: 'john@devui.com',
        role: 'Developer',
        image:
            'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    },
    {
        name: 'Jane Doe',
        title: 'Back-end Developer',
        department: 'Engineering',
        email: 'jane@devui.com',
        role: 'CTO',
        image:
            'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
]

const Page = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [data, setData] = useState([]);

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = async () => {
        console.log(question)
        try {
            const response = await fetch('http://localhost:5005/brand', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });
            console.log(question)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            setData(data);
            setAnswer(data.answer);
            setChatHistory([...chatHistory, { question, answer: data.answer }]);
            setQuestion(""); // Clear input after submission
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className='fixed bottom-0 left-0'>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn drawer-button bg-transparent shadow-none"><BsFillClipboardDataFill size={20} className='text-[#10847E]' /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            <li>
                                <div className=' display inline mt-16'>
                                    <p className=' text-center text-base'><b>Dr Queency Gonsalves</b></p>
                                    <p className=' text-center font-semibold pt-4'>MBBS from GMC Jalgaon</p>
                                    <p className=' text-center pt-2'>Intern at Government Hospital Jalgaon</p>
                                </div>
                            </li>
                            <li>
                                <div className=' display inline mt-20'>
                                    <p className=' text-center text-base'><b>Dr Sonam Gupta</b></p>
                                    <p className=' text-center font-semibold pt-4'>MBBS from GMC Jalgaon</p>
                                    <p className=' text-center pt-2'>Intern at Government Hospital Jalgaon</p>
                                </div>
                            </li>
                            <li>
                                <div className=' display inline mt-20'>
                                    <p className=' text-center text-base'><b>Dr Shrushti Patil</b></p>
                                    <p className=' text-center font-semibold pt-4'>MBBS from GMC Jalgaon</p>
                                    <p className=' text-center pt-2'>Intern at Government Hospital Jalgaon</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-full fixed bottom-0 flex justify-center align-middle items-center mb-10'>
                <div className="flex w-full max-w-3xl items-center space-x-2 relative">
                    <Input
                        type="text"
                        placeholder="Enter Brand Name"
                        value={question}
                        onChange={handleQuestionChange}
                        className="p-6 border border-gray-300 focus:border-gray-300"
                    />
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        className="absolute right-1 px-2 py-1 bg-transparent hover:bg-transparent text-[#10847E]"
                    >
                        <RiSendPlaneFill size={27} />
                    </Button>
                </div>
            </div>

            <div className='fixed bottom-0 right-0'>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="btn drawer-button bg-transparent shadow-none"><LuNewspaper size={20} className='text-[#10847E]' /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-auto min-h-full bg-base-200 text-base-content">
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            <li><div className="card w-96 bg-base-100 shadow-xl m-4">
                                <div className="card-body">
                                    <div className=' flex justify-normal'>
                                        <div className="avatar">
                                            <div className="mask mask-circle h-14 w-14">
                                                <img
                                                    src="https://th.bing.com/th/id/R.d4e2cbd37fba619ce8c0cc2fa3976046?rik=W0mXsqAkNIYChw&riu=http%3a%2f%2fwww.north-faceoutletonlines.net%2fwp-content%2fuploads%2f2020%2f05%2fasdfsdgasdfsdaf.jpg&ehk=yA2dnvKILMpFwLggXDfswKxo%2be3mVghczeZJ5oXSaNY%3d&risl=&pid=ImgRaw&r=0"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <h2 className="card-title ml-2">Angan Medical</h2>
                                    </div>
                                    <p className='font-semibold'>Pharmacy</p>
                                    <p>Shop no 7, Poonam Arena, YK Nagar, Virar West, Virar, Maharashtra ·</p>
                                    <p>7030778747</p>
                                    <p className='text-green-500'>Open 24 Hours</p>
                                </div>
                            </div>
                            </li>

                            <li><div className="card w-96 bg-base-100 shadow-xl m-4">
                                <div className="card-body">
                                    <div className=' flex justify-normal'>
                                        <div className="avatar">
                                            <div className="mask mask-circle h-14 w-14">
                                                <img
                                                    src="https://th.bing.com/th/id/OIP.1SUdTBn8RGEd0aX6p0Pe_QHaJ4?w=480&h=640&rs=1&pid=ImgDetMain"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <h2 className="card-title ml-2">Dev Balaji Medical</h2>
                                    </div>
                                    <p className='font-semibold'>Medical Supply</p>
                                    <p>Shop No 2,Ostwal Nagari, Central Park Road, Nalasopara, Maharashtra</p>
                                    <p>7249735828</p>
                                    <p className='text-green-500'>Open 24 Hours</p>
                                </div>
                            </div>
                            </li>


                            <li><div className="card w-96 bg-base-100 shadow-xl m-4">
                                <div className="card-body">
                                    <div className=' flex justify-normal'>
                                        <div className="avatar">
                                            <div className="mask mask-circle h-14 w-14">
                                                <img
                                                    src="https://th.bing.com/th/id/OIP.KDgF5j4N1cXbLrazvJopOwHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <h2 className="card-title ml-2">Sahyog Medical</h2>
                                    </div>
                                    <p className='font-semibold'>Pharmacy</p>
                                    <p>B/C-31, Dube Estate, Nalasopara, Thane, Maharashtra 401209 · 1.2 km</p>
                                    <p>9970851627</p>
                                    <p className='text-green-500'>Open 24 Hours</p>
                                </div>
                            </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className='mt-24'>
                <section className="mx-auto w-full max-w-7xl px-4 py-4">
                    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                        <div>
                            <h2 className="text-lg font-semibold">Customize Your Prescripion</h2>
                            <p className="mt-1 text-sm text-gray-700">
                                This is a list of medecines that have same generic names but are produced and manufactured
                                by different companies with other brand names.
                            </p>
                        </div>
                        <div>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <h3 className="font-bold text-lg">Book your medication online</h3>
                                    <div className='mt-5'>
                                        <div className='flex justify-evenly flex-wrap'>
                                            <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs m-4" />
                                            <input type="number" placeholder="Contact" className="input input-bordered w-full max-w-xs m-4" />
                                        </div>
                                        <div className='flex justify-evenly flex-wrap'>
                                            <input type="text" placeholder="Medecine Details" className="input input-bordered w-full max-w-xs m-4" />
                                            <input type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs m-4" />
                                        </div>
                                        <div className='flex justify-evenly flex-wrap'>
                                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs m-4" />
                                            <input type="number" placeholder="Alternate Contact Number" className="input input-bordered w-full max-w-xs m-4" />
                                        </div>
                                        <div className='flex justify-evenly flex-wrap'>
                                            <input type="file" className="file-input file-input-bordered w-full max-w-xs m-4" />
                                            <input type="text" placeholder="State" className="input input-bordered w-full max-w-xs m-4" />
                                        </div>
                                        <div className='flex justify-evenly flex-wrap'>
                                            <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs m-4" />
                                            <input type="number" placeholder="Pin Code" className="input input-bordered w-full max-w-xs m-4" />
                                        </div>
                                        <div className='flex justify-evenly flex-wrap'>
                                            <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs m-4" />
                                            <input type="number" placeholder="Landmark" className="input input-bordered w-full max-w-xs m-4" />
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="rounded-md bg-[#10847E] px-3 py-2 text-sm font-semibold text-white shadow-sm m-1">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            <button
                                type="button"
                                className="rounded-md bg-[#10847E] px-3 py-2 text-sm font-semibold text-white shadow-sm"
                                onClick={() => document.getElementById('my_modal_4').showModal()}
                            >
                                Book Online
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-[#10847E] md:rounded-lg">
                                    <table className="min-w-full divide-y divide-[#10847E]">
                                        <thead className="bg-[#DEF8ED]">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                                                >
                                                    <span>Brand Name</span>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                                                >
                                                    Generic Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                                                >
                                                    Package
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3.5 text-left text-sm font-bold text-gray-700"
                                                >
                                                    Strength
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#10847E] bg-white">
                                            {data.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="whitespace-nowrap px-4 py-4">
                                                        <div className="text-sm font-medium text-gray-900">{item.BrandName}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-4">
                                                        <div className="text-sm text-gray-900">{item.GenericName}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-4">
                                                        <div className="text-sm text-gray-900">{item.Package}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-4">
                                                        <div className="text-sm text-gray-900">{item.Price}</div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-4 py-4">
                                                        <div className="text-sm text-gray-900">{item.Strength}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
