"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { SiGooglemaps } from "react-icons/si";
import { FaClock } from "react-icons/fa";
import { HiCalendarDateRange } from "react-icons/hi2";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const backgroundImages = [
  "/bg/Magma-bg-1.jpg",
  "/bg/Magma-bg-2.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-teal-200 to-lime-200 text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={backgroundImages[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[currentImageIndex]}
            alt="Ugandan farm landscape"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-20"
          />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div>
            <div>
              <img
                src="/images/aim-logo.png"
                alt="Asan logo"
                className="w-36 h-36 md:w-44 md:h-44 rounded object-contain bg-transaparent p-0 mx-auto py-6"
              />
              <div className="flex flex-col md:flex-row items-center justify-center text-center gap-6">
                <div className="mt-4 md:mt-0 text-center md:text-center">
                  <h1 className="text-2xl whitespace-nowrap px-4 text-nowrap md:text-5xl font-black tracking-tight text-[#211832]">
                    Asan Institute of Management
                  </h1>
                  <p className="text-base font-semibold md:text-xl text-[#211832] mt-2">
                    (A Unit of Asan Memorial College of Arts and Science)
                  </p>
                </div>
              </div>

            </div>
            <div className="text-lg md:text-3xl font-black capitalize mt-0" style={{ color: "#5C3E94" }}>
              Invites You to
            </div>
          </div>



        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto m-0 p-0">
            <img
              src="/images/Magma.png"
              alt="MAGMA'25 Logo"
              className="mx-auto h-auto w-96 md:h-40"
            />
          </p>
          <h1 className="text-lg md:text-xl font-medium tracking-tight">
            <span className="text-white text-lg  text-nowrap md:text-2xl font-bold" style={{ color: "#5C3E94" }} >Intercollegiate Management Fest</span>
          </h1>
          <span className="text-white text-lg text-nowrap md:text-2xl font-bold" style={{ color: "#5C3E94" }} >Inspire to Innovate</span>
          <p className="text-red-600 text-base text-nowrap md:text-2xl font-bold my-4">Win Excting Trophies and Cash Rewards</p>
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6 text-base md:text-lg font-black text-black">
            <div className="flex items-center gap-2">
              <HiCalendarDateRange size={22} />
              <span>24<sup>th</sup> October, 2025</span>
            </div>
            <div className="flex items-center gap-2">
             <FaClock size={22}/>
              <span>9:00 AM – 5:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
             <SiGooglemaps size={22} />
              <span>AIM</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <Button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeM0UfE1GrCbl_lYJhhLNub51yWgeWPJFayN4nOGtMmdwlOXg/viewform?usp=header" target="_blank"
                rel="noopener noreferrer">
                Register For MAGMA'25
              </Link>
            </Button>
            
            <Button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
              <Link href="https://drive.google.com/file/d/1iHjRIB8hl_BMe-mzLF3EwJG_cjlN_1Kg/view?usp=sharing" target="_blank"
                rel="noopener noreferrer">
                Rule Book</Link></Button>

            <Button asChild variant="default" size="default" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
              <Link href="#events" className="">
                View Events
              </Link>
            </Button>
          </div>
        </motion.div>
      </div >
    </div >
  );
}
