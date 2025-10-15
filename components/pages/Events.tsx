import React from "react";

export default function Events() {
    return (
        <div>
            <h1 className="text-center text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900">Events</h1>
            <p className="text-center text-lg pt-4 font-extrabold tracking-tight lg:text-xl text-slate-900">
                Explore our diverse range of managment events, workshops, and competitions
            </p>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        {/* <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-first">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover w-60" src="/bg/Best Manager/bs-1.jpg" alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover w-60" src="/bg/Best Manager/bs-2.jpg"
                                alt="about Us image" />
                        </div> */}
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-first">
                            {/* Image 1 */}
                            <div className="pt-24 flex justify-center items-center">
                                <div className="w-[405px] h-[255px] overflow-hidden rounded-2xl shadow">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/bg/Best Manager/bs-1.jpg"
                                        alt="About Us image"
                                    />
                                </div>
                            </div>

                            {/* Image 2 */}
                            <div className="flex justify-center items-center">
                                <div className="w-[405px] h-[255px] overflow-hidden rounded-2xl shadow">
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/bg/Best Manager/bs-2.jpg"
                                        alt="About Us image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        The Big Boss</h2>
                                    <p className="text-gray-500 text-base font-medium leading-relaxed text-justify">
                                        The <span className="font-semibold">"Best Manager"</span> event is designed to test participants’ leadership, decision-making, and communication skills through real-life business challenges. It evaluates how effectively they handle pressure, manage teams, and think strategically. The event aims to identify the most dynamic and well-rounded individual who truly represents the qualities of an effective manager.</p>
                                </div>
                            </div>
                            <button
                                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-base font-semibold leading-6">View Rules</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1 py-16">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Con-Tac-Tix</h2>
                                    <p className="text-gray-500 text-base font-medium leading-relaxed text-justify">
                                        <span className="font-semibold">"Connection”</span> is an exciting and interactive Fun Filled business themed game that tests participants’ observation, reasoning, and presence of mind. The game includes 3 to 4 rounds. Participants must identify the common link or connection between the images to find the correct answer, with each round becoming progressively more challenging and engaging.</p>
                                </div>
                            </div>
                            <button
                                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-base font-semibold leading-6">View Rules</span>
                            </button>
                        </div>
                        <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-last order-first">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover" src="/images/bs-2.jpg" alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/images/bs-1.jpg"
                                alt="about Us image" />
                        </div>
                    </div>
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-first">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover" src="/images/bs-2.jpg" alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/images/bs-1.jpg"
                                alt="about Us image" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Corporate Bidding</h2>
                                    <p className="text-gray-500 text-base font-medium leading-relaxed text-justify">
                                        <span className="font-semibold">"Corporate Bidding"</span> is an electrifying business event that brings the thrill of the corporate world to life. Participants form teams and step into the shoes of investors, competing to build the most successful business empire. Each team is provided with a fixed budget to strategically bid on virtual companies, brands, and assets. The real challenge lies in making smart investment choices, analyzing opportunities, negotiating profitable deals, and effectively managing limited resources. This event sharpens participants’ financial, analytical, and strategic thinking while enhancing their teamwork, leadership, and decision-making skills in a high-pressure, competitive corporate environment.</p>
                                </div>
                            </div>
                            <button
                                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-base font-semibold leading-6">View Rules</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1 py-16">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Act it Out</h2>
                                    <p className="text-gray-500 text-base font-medium leading-relaxed text-justify">
                                        <span className="font-semibold">"Reels marketing"</span> is a modern digital strategy that uses short, creative videos to promote brands and engage audiences on platforms like Instagram, Facebook, and YouTube Shorts. It focuses on storytelling and visual appeal to boost visibility and connection. Participating in a reels marketing event helps students gain hands-on experience in digital promotion, creativity, and communication—key skills for today’s marketing professionals.</p>
                                </div>
                            </div>
                            <button
                                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-base font-semibold leading-6">View Rules</span>
                            </button>
                        </div>
                        <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-last order-first">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover" src="/images/bs-2.jpg" alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/images/bs-1.jpg"
                                alt="about Us image" />
                        </div>
                    </div>
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-first">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className=" rounded-xl object-cover" src="/images/bs-2.jpg" alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/images/bs-1.jpg"
                                alt="about Us image" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Bizwiz Challenge</h2>
                                    <p className="text-gray-500 text-base font-medium leading-relaxed text-justify">
                                        <span className="font-semibold">"Brains Battle Business"</span>  was an engaging and intellectually stimulating event designed to test the students’ knowledge and awareness of the business world. Organized under the guidance of a skilled Quiz Master, the competition created an atmosphere of excitement, learning, and healthy competition among participants.
                                        The quiz covered a wide range of topics, including current business affairs, corporate logos and taglines, financial terms, marketing strategies, economic trends, and business personalities.</p>
                                </div>
                            </div>
                            <button
                                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-base font-semibold leading-6">View Rules</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}
