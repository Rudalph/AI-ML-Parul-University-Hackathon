'use client';
import React from 'react';
import Typed from 'typed.js'
import { useEffect, useRef } from 'react';


export default function Typing(){
    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Swasthya Connect',
                'आपके स्वास्थ्य का संबंध',
                'An Integrated Healthcare Management System'
            ],
            typeSpeed:50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);

    return(
        <div className="text navbar-text text-2xl sm:text-5xl lg:text-5xl tracking-wide flex flex-col sm:flex-row justify-center p-5 sm:p-10  mb-5 text-gray-900 ml-24">
          <div className="typing mb-5 sm:mb-0 sm:mr-5">
            <span ref={typingRef} />
          </div>
        </div>
    )
}
