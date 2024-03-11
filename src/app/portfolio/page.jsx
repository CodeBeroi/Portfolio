"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

import Image from "next/image";
import Link from 'next/link';

const PortfolioPage = () => {


    // if type demo -> CTA see demo
    // if type content -> TBD


    const items = [
        {
            id: 7,
            type: 'demo',
            color: "from-red-100 to-customred",
            title: "Share AI generated images",
            desc: "A short and sweet project that uses the power of DallE AI to generate custom images and share them with the community.",
            img: "dalle-clone-demo.png",
            link: "https://dalle-clone-demo.mathildemenoret.com/",
            repository: "https://github.com/CodeBeroi/project-threejs-ai",
            tech: ["Node.js", "Express", "React", "MongoDB", "DallE"]
        },
        {
            id: 1,
            type: 'demo',
            color: "from-customred to-gradient-1",
            title: "Share AI generated images",
            desc: "A short and sweet project that uses the power of DallE AI to generate custom images and share them with the community.",
            img: "dalle-clone-demo.png",
            link: "https://dalle-clone-demo.mathildemenoret.com/",
            repository: "https://github.com/CodeBeroi/project-threejs-ai",
            tech: ["Node.js", "Express", "React", "MongoDB", "DallE"]
        },
        {
            id: 2,
            type: 'demo',
            color: "from-gradient-1 to-gradient-2",
            title: "Threads Clone",
            desc: "Find the design and main features of the famous app Threads.",
            img: "threads-clone.png",
            link: "https://threads-clone-7a65.vercel.app/create-thread/",
            repository: "https://github.com/MathildeMnrt/threads_clone",
            tech: ["Next.js", "React", "MongoDB", "Clerk"]
        },
        {
            id: 3,
            type: 'demo',
            color: "from-gradient-2 to-gradient-3",
            title: "ThreeJS / DallE Demo",
            desc: "Little project to learn ThreeJS while using DallE generated content",
            img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            link: "ai-threejs-demo.mathildemenoret.com",
            repository: "https://github.com/CodeBeroi/project-threejs-ai",
            tech: ["Node.js", "Express", "React", "Threejs", "DallE", "Framer Motion"]

        },
        {
            id: 4,
            type: 'demo',
            color: "from-gradient-3 to-gradient-4",
            title: "AI Summarizer",
            desc: "A simple page that summarizes the content of an URL using OpenAI.",
            img: "ai-summarizer.png",
            link: "https://ai-summarizer.mathildemenoret.com/",
            repository: "https://github.com/MathildeMnrt/ai-summarizer",
            tech: ["React", "Redux", "RapidAPI"]
        },
        {
            id: 5,
            type: 'content',
            color: "from-gradient-4 to-gradient-5",
            title: "Back-end overhaul",
            desc: "Migrating an existing NoSQL database to a relational model using TypeORM and PostgreSQL. API creation and documentation to be used by an existing front",
            img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            link: "https://lama.dev",
            tech: ["TypeORM", "Nest.js", "PostgreSQL"]
        },
        {
            id: 6,
            type: 'content',
            color: "from-gradient-5 to-customred",
            title: "My portfolio",
            desc: "Just linking this here so you can check how I built this portfolio!",
            img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            repository: "https://github.com/CodeBeroi/portfolio",
            tech: ["Next.js", "React", "Framer Motion", "EmailJS"]
        },
    ];

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);


    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-[600vh] relative' ref={ref}>
                <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
                    My works
                </div>

                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex'>
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-red-100' />
                        {items.map((item) => (
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className='flex flex-col gap-8 text-white'>
                                    <h1 className='text-xl font-bold md-text-4xl lg:text-6xl xl:text-6xl'>{item.title}</h1>
                                    <div className='flex'>
                                        <div className='relative w-90 h-60 md:w-110 md:h-70 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                                            <Image src={item.img} alt="" fill className='rounded-md shadow-2xl object-cover ' unoptimized={true} />

                                        </div>
                                        <div className='flex flex-col m-10'>
                                            <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                                                {item.desc}
                                            </p>

                                            <div className='flex gap-4 mt-10'>
                                                {item.tech.map((tec) => (
                                                    <div className='bg-gray-700 text-white px-4 py-2 rounded-full' key={tec}>{tec}</div>
                                                ))
                                                }
                                            </div>
                                        </div>
                                    </div>


                                    <div className='w-full flex gap-4 justify-end'>

                                        {item.repository &&
                                            <a target="_blank" href={item.repository} className='flex justify-end'>
                                                <button className='p-2 text-sm md:p-4 md-text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>
                                                    Check repository
                                                </button>
                                            </a>}

                                        {item.link && <Link href={item.link} className='flex justify-end'>
                                            <button className='p-2 text-sm md:p-4 md-text-md lg:p-6 lg:text-lg bg-black text-white font-semibold m-4 rounded hover:text-black hover:bg-white'>
                                                {item.type === "demo" ? "See demo" : "Learn more"}
                                            </button>
                                        </Link>}

                                    </div>

                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Fullstack Web Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage;