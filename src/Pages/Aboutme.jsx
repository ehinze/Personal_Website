import React, { useState } from "react";
import { Link } from "react-router-dom"

export default function Aboutme() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="bg-gray-200 aboutme-container p-6 md:p-12">
            <nav className="bg-gray-200">
                    <div className="flex items-center justify-between px-4 py-3 md:px-6 max-w-screen-xl mx-auto">
                        <div className="flex items-center gap-3">
                            <img
                                src="/Personal_Website/images/IMG_0338.JPG"
                                className="h-10 border-2 rounded-xl"
                                alt="my picture"
                            />
                            <h1 className="text-xl md:text-2xl font-semibold whitespace-nowrap">
                                Personal Blog
                            </h1>
                        </div>

                 
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>

                       
                        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
                            <li>
                                <Link to="/" className="text-gray-900 hover:text-green-900">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/About" className="text-green-700 hover:text-green-700">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link to="/Work" className="text-gray-900 hover:text-green-700">
                                    Projects & Work Experience
                                </Link>
                            </li>
                        </ul>
                    </div>

                   
                    {menuOpen && (
                        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-200">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-900 hover:text-green-900"
                                    
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/About"
                                    className="text-green-700 hover:text-green-700"
                                    
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Work"
                                    className="text-gray-900 hover:text-green-700"
                                    
                                >
                                    Projects & Work Experience
                                </Link>
                            </li>
                        </ul>
                    )}
                </nav>

                <section className="text-center mb-10">
                    <img
                        src="/Personal_Website/images/IMG_0311.JPG"
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
                    />
                    <h1 className="text-4xl font-bold text-gray-800">Anumene Favour | Web Development Journey</h1>
                    <p className="text-lg text-gray-600 mt-4">A journey of growth in frontend development and beyond.</p>
                    <p className="text-lg text-gray-600 mt-4">Connect with me professionally on

                        <a
                            href="https://www.linkedin.com/in/favour-anumene/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 ml-2 md:hover:text-blue-700"
                        >LinkedIn.
                        </a>
                    </p>
                </section>


                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-800">My Journey</h2>
                    <p className="text-lg text-gray-700 mt-4">
                        I started my journey in frontend development with a passion for creating interactive, beautiful websites. It began with a simple HTML and CSS project
                        and evolved into more complex applications using React and JavaScript. Over time, I discovered my love for problem-solving and building user-friendly experiences, I love trying out new coding techniques and sharing what I learn along the way.
                    </p>
                </section>


                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-800">Things I Love When I am not Coding</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
                        <div className="text-center">
                            <img src="/Personal_Website/images/dance.jpg" alt="Photography" className="h-32  rounded-sm object-cover mx-auto mb-2" />
                            <p className="text-lg text-gray-700">Dancing</p>
                        </div>
                        <div className="text-center">
                            <img src="/Personal_Website/images/reading (2).jpg" alt="Reading" className="rounded-sm object-cover  h-32 mx-auto mb-2" />
                            <p className="text-lg text-gray-700">Reading </p>
                        </div>
                        <div className="text-center">
                            <img src="/Personal_Website/images/travel.jpg" alt="Travel" className=" h-32 object-cover rounded-sm  mx-auto mb-2" />
                            <p className="text-lg text-gray-700">Traveling</p>
                        </div>
                        <div className="text-center">
                            <img src="/Personal_Website/images/braids.jpg" alt="Travel" className=" h-32 object-cover rounded-sm mx-auto mb-2" />
                            <p className="text-lg text-gray-700">Braiding</p>
                        </div>
                    </div>
                </section>


                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-800">Tech Stacks I Use</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mt-4">
                        <div className="text-center">
                            <a href="https://react.dev/" >
                                <img src="/Personal_Website/images/react.svg" class="h-32 mx-auto mb-2" alt="Flowbite Logo" />
                                <p className="text-lg text-gray-700">React</p>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="https://tailwindcss.com/" >
                                <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue&shade=500" class="h-32 mx-auto mb-2" alt="Tailwind Logo" />
                                <p className="text-lg text-gray-700">Tailwind Css</p>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="https://flowbite.com/" >
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-32 mx-auto mb-2" alt="Flowbite Logo" />
                                <p className="text-lg text-gray-700">Flowbite</p>
                            </a>
                        </div>

                        <div className="text-center">
                            <a href="https://www.w3schools.com/js/js_intro.asp" >
                                <img src="https://tse2.mm.bing.net/th?id=OIP.kzWBSipJifD5iIoR5GyykwAAAA&w=200&h=203&c=7" class="h-32 bg-gray-200 mx-auto mb-2" alt="JavaScript Logo" />
                                <p className="text-lg text-gray-700">JavaScript</p>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="https://vite.dev/" >
                                <img src="/Personal_Website/vite.svg" alt="Vite Logo" class="h-32 bg-gray-200 mx-auto mb-2" />
                                <p className="text-lg text-gray-700">Vite</p>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href=" https://github.com/" >
                                <img src="https://th.bing.com/th/id/OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg?w=174&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="GitHub Logo" class="h-32 bg-gray-200 mx-auto mb-2" />
                                <p className="text-lg text-gray-700">GitHub</p>
                            </a>
                        </div>
                    </div>
                </section>


                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-800">Lessons Learned</h2>
                    <blockquote className="mt-4 text-lg text-gray-700 border-l-4 border-blue-500 pl-4">
                        Patience is key. With every project, I grow, learning something new with every line of code written and every challenge faced.
                    </blockquote>
                    <blockquote className="mt-4 text-lg text-gray-700 border-l-4 border-blue-500 pl-4">
                        One of the key lessons I’ve learned is not to fear the red lines or error messages—they are not setbacks, but rather motivation to improve. Each bug or issue is an opportunity to learn and grow. There’s a unique satisfaction that comes from identifying what went wrong and fixing it—it's one of the most rewarding experiences as a developer.
                    </blockquote>
                    <blockquote className="mt-4 text-lg text-gray-700 border-l-4 border-blue-500 pl-4">
                        One of the biggest challenges I faced early on was understanding asynchronous JavaScript and handling state effectively in React. I struggled with managing multiple asynchronous operations, but after diving into more complex tutorials and practicing regularly, I finally got the hang of it. One lesson I learned is that patience and consistency are key—don’t be afraid to struggle, because that’s how you grow.
                    </blockquote>
                </section>


                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">Closing Thoughts</h2>
                    <p className="text-lg text-gray-700 mt-4">
                        I hope this blog inspires you to continue learning and building. Whether you're just
                        starting or have been coding for years, remember that growth comes from overcoming
                        challenges, and you’re never alone in this journey.  Thanks for reading! I'm always growing, always learning — and if you're on a similar path, let's connect and build something great together.
                    </p>

                </section>
            </div>
        </>
    )
}