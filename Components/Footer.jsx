"use client"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import React from 'react'

export default function FooterOne() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
        <div className="inline-flex items-center">
          <span className="ml-4 text-lg font-bold text-[#10847E]">Swasthya Connect</span>
        </div>
        <div className="hidden items-center md:inline-flex">
          <Button type="submit" className="bg-[#10847E]">Get Started</Button>
        </div>
      </div>
      <hr className="my-8" />
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold text-[#4B5563]">Subscribe to our Newsletter</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-[#10847E] px-3 py-3 text-sm font-semibold text-white shadow-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3 pb-10">
          
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>About us</li>
                <li>Company History</li>
                <li>Our Team</li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Socials</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li><FaLinkedin size={30} className='text-[#10847E]'/></li>
                <li><AiFillInstagram size={30} className='text-[#10847E]'/></li>
                <li><BsTwitterX size={30} className='text-[#10847E]'/></li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 ">Privacy Policy</p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                <li>Services</li>
                <li>Study</li>
                <li>Explore</li>
              </ul>
            </div>
        
        </div>
      </div>
    </footer>
  )
}
