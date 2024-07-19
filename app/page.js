"use client"
import React, {useRef} from "react";
import { motion,useInView } from "framer-motion";
import Hero from "@/Components/Hero";
import  Imgcards  from "@/Components/Imgcarda";
import Carousel1 from "@/Components/Carousel1";
import Features from "@/Components/Features";
import Access from "@/Components/Access"
import Faqs from "@/Components/Faqs";
import Footer from "@/Components/Footer"

const componentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};


const MotionComponent = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={componentVariants}
    >
      {children}
    </motion.div>
  );
};


export default function Home() {
  return (
    <div>
    <div>
      <MotionComponent>
        <Carousel1 />
      </MotionComponent>

      <MotionComponent>
        <Access />
      </MotionComponent>

      <MotionComponent>
        <Imgcards />
      </MotionComponent>

      <MotionComponent>
        <Features />
      </MotionComponent>

      <MotionComponent>
        <Faqs />
      </MotionComponent>

      <MotionComponent>
        <Footer />
      </MotionComponent>
    </div>
  </div>
  );
}
