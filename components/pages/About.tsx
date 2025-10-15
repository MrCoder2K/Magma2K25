import React from "react";
import SectionHeading from "../global/SectionHeading";

export default function About() {
    return (
        <div>
            <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900">About Us</h1>
            <p className="text-center text-lg pt-4 font-extrabold tracking-tight lg:text-xl text-slate-900">
                Discover our journey of excellence in education and innovation
            </p>
            <div>
                <section className="py-24 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Asan Institute of Management</h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed text-justify">Asan Institute of Management (AIM) was established in the year 1997, in recognition of the vital need to develop competent managers and IT professionals to meet the growing needs of the country. During the short span, the Institute has emerged as one of the premier institutes in the South, providing high quality education in the areas of Management and Information Technology
                                        <br />
                                        <br />
                                        The full time MBA and MCA programmes offered are affiliated to the University of Madras, approved by AICTE and Ministry of HRD, Government of India.</p>
                                </div>
                            </div>
                            <img className="lg:mx-0  mx-auto w-[594px] h-[455px] object-cover rounded-[20px]" src="/bg/college.jpg" alt="about Us image" />
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="py-24 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-8 grid grid-cols-1 lg:grid-cols-2">
                            <img
                                className="lg:order-1 order-2 lg:mx-0 mx-auto w-[594px] h-[455px] object-cover rounded-[20px] "
                                src="/bg/mba.jpg"
                                alt="about Us image"
                            />
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex order-1 lg:order-2">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal md:text-nowrap lg:text-start text-center">
                                       Master of Business Administration
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed text-justify">
                                        AIM offers a 2-year MBA Programme preparing students for a rewarding career in any walk of economic or social activity that calls for application of management. AIM seeks to develop young men and women into managerially competent, ethically sensitive and socially responsible professionals. The course is approved by All India Council for Technical Education (AICTE), Ministry of HRD, Government of India and have been affiliated to the University of Madras.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <section className="py-24 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Magma 2K25</h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed text-justify">MAGMA is the intercollegiate annual management fest conducted by the MBA department, offering a dynamic platform for students from various institutions to showcase their managerial acumen, creativity, and problem-solving skills. The fest hosts a wide array of competitive events designed to simulate real-world business challenges, encourage innovation, and foster collaborative learning in a spirited and professional environment.</p>
                                </div>
                            </div>
                            <img className="lg:mx-0  mx-auto w-[594px] h-[455px] object-cover rounded-[20px]" src="/bg/Magma-bg-1.jpg" alt="about Us image" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
