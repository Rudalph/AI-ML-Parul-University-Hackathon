import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BsSearch } from "react-icons/bs";
import Image from 'next/image';
Image

const Hero = () => {
  return (
    <div>
        <div className='flex justify-center align-middle pt-9'>
            <p className='p-5 text-lg font-medium flex justify-start'>What are you looking for ?..</p>
        </div>
        <div className='flex justify-center align-middle'>
        <div className="flex w-full max-w-2xl items-center space-x-2">
        <Input type="email" placeholder="Search here..." className="shadow-md h-12"/>
        <Button type="submit" className="bg-[#10847E] hover:bg-slate-400">Search</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero