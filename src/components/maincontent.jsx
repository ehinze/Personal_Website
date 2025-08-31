import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">

          
            <div className="flex flex-col items-center justify-center  bg-green-900 relative p-6">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url("/images/a office dark green (1).jpg")' }}></div>

                
                <div className="relative z-10 flex flex-col items-center text-center md:text-left">
                    <p className="text-3xl font-semibold text-gray-200 dark:text-white mb-2">Favour Anumene</p>
                    <p className="text-2xl font-semibold text-gray-200 dark:text-white mb-2">Frontend Web Developer | React</p>
                    <p className="text-2xl font-semibold text-gray-200 dark:text-white mb-6">Personal Blog – Code, Life & Growth</p>
                    <img
                        src="/Personal_Website/images/SIU_4438.JPG"
                        alt="Profile"
                        className="w-48 h-48 object-cover rounded-full shadow-lg mt-4"
                    />
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center p-8 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About Me</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    I'm a passionate frontend developer who loves crafting beautiful, responsive web experiences.
                    My goal is to build digital products that are not only functional but also delightful to use.
                    With a curious mind and a drive for innovation, I'm always learning, improving, and pushing the boundaries of what’s possible.
                </p>
                <div className="flex justify-center">
                <a
                    href="/resume.pdf"
                    download="Favour_Anumene_CV.pdf"
                    className="mt-6 w-48 bg-green-700 text-white flex items-center justify-center  font-semibold py-3 px-6 rounded-lg hover:bg-green-800 transition-all duration-300"
                >
                    Download CV
                </a>
                </div>

                <div className=" flex items-end mt-10  justify-end ">
                    <Link to="/About" className="text-green-500 hover:text-green-700 text-lg">
                        More ...
                    </Link>
                </div>
            </div>

        </div>
    );
}
