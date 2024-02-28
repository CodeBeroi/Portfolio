"use client"

import { motion, useScroll } from 'framer-motion'
import Brain from '@/components/brain';
import { useRef } from 'react'
import { useInView } from 'framer-motion';

const AboutPage = () => {

    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef })

    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" })  // { once: true }

    const experienceRef = useRef();
    const isExpRefInView = useInView(experienceRef, { margin: "-100px" }) // { once: true }

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >

            <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>

                    {/* BIO CONTAINER */}
                    <div className='flex flex-col gap-12 justify-center'>

                        {/* BIO TITLE */}
                        <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>

                        {/* BIO DESCRIPTION */}
                        <div className='text-lg flex flex-col gap-10 text-justify'>
                            <p>
                                After devoting 7 years to the success of a startup, I am now set on a new path—becoming a full-stack web developer. The allure of the dynamic digital landscape has prompted this transition, and I am actively seeking opportunities to immerse myself in the world of web development.
                            </p>

                            <p>
                                Driven by a passion for technology, I am committed to acquiring comprehensive skills in both front-end and back-end development through dedicated training. My vision is to seamlessly blend creativity with technical proficiency to craft visually compelling and innovative digital solutions.
                            </p>

                            <p>This shift represents more than a professional pivot; its a personal commitment to aligning my career with my passions. I look forward to leveraging my entrepreneurial background alongside newfound technical expertise to create impactful digital experiences. In essence, my journey into full-stack web development is a quest to transform my creativity and organizational skills into tangible and unique contributions to the evolving web landscape.
                            </p>
                        </div>

                        {/* BIO QUOTE */}
                        <span className='italic'>There are no shortcuts to any place worth going. – Beverly Sills</span>

                        {/* SIGNATURE */}
                        {/*                         <div className='self-end'>
                            <svg width="132" height="161" viewBox="0 0 132 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 105C30.5046 105 32.8742 88.9519 31.7778 84.4445C29.6788 75.8156 20.1147 76.5168 18.2222 85.2222C16.5615 92.8616 20.6938 102.532 24.4444 108.833C26.2038 111.789 32.3621 122.205 37.2222 119.333C43.9502 115.358 45.3479 104.781 46.4444 97.8889C47.9999 88.1117 46.0802 73.0577 39.4444 65.2778C35.4263 60.5669 26.9431 59.5014 22.4444 64C20.1241 66.3204 20.9222 70.3111 24.5555 67.8889C38.6861 58.4685 44.3584 33.8032 42.4444 17.9445C42.2685 16.4865 39.4849 -0.902198 35 1.22223C28.9557 4.08532 32.1919 24.8815 32.6111 29.1667C35.322 56.8777 39.2534 84.4541 41.7778 112.222C43.2283 128.178 44.9083 144.725 50 160" stroke="black" stroke-linecap="round" />
                                <path d="M42 92C47.8286 90.7048 49.3617 76.1239 49.7778 71.7778C49.8557 70.9644 50.7457 60.585 47.5 61.8333C43.1505 63.5062 43.1887 76.5712 43.0556 80.1667C42.9649 82.6154 45.9291 113.007 54 105.833C62.4055 98.3618 61.3476 79.2255 60.2222 69.2222C59.7536 65.0565 58.7413 60.6464 59.5 67.7778C60.3689 75.9458 60.9517 84.1554 61.7778 92.3333C61.8529 93.077 63 101.97 63 99.1111C63 90.6432 62.7237 82.128 63.0556 73.6667C63.2321 69.164 63.2012 55.2487 66.5 66.6111C69.6481 77.4545 70.2596 89.0383 73 100" stroke="black" stroke-linecap="round" />
                                <path d="M71 85C76.1649 93.7804 79.0934 70.6313 76.7778 66C76.5231 65.4907 75.0097 66.7174 74 67.2222C71.5339 68.4552 71.6609 72.6868 71 75" stroke="black" stroke-linecap="round" />
                                <path d="M77 71C79.4734 66.0533 80 62.1549 80 56.6667C80 54.485 78.2727 50.2274 76.5 54.1667C73.2443 61.4015 74.1962 78.8598 82.0556 83.4444C83.4622 84.265 84.2528 85.0022 85.5 86C88.0241 88.0193 87.9905 79.0608 88.0556 77.8889C89.0158 60.6037 85.8994 44.89 80 28.6667C77.8766 22.8272 80.8852 41.0732 81.7778 47.2222C84.5247 66.1451 86.3577 85.3007 89.7778 104.111C89.8494 104.505 91.2027 113.966 92.4444 113.611C94.017 113.162 93.0059 100.296 93 99.2222C92.9463 89.5099 89.6172 76.8807 93 67.4444C95.4258 60.6777 106.538 55.8652 112.222 52.7778C117.162 50.0951 122.433 47.676 126.778 44.0555C126.989 43.8798 131.759 38.8019 130.889 38.8889C129.998 38.978 127.46 40.4724 127.111 40.6667C121.143 43.9883 115.195 47.2727 109.111 50.3889C91.5739 59.3714 73.8169 67.9134 56.1111 76.5555C36.333 86.2092 17.3907 95.2484 1 110" stroke="black" stroke-linecap="round" />
                                <path d="M1 110C5.71302 109.476 12.5664 103.684 16.4444 101.333C38.1997 88.1484 60.1696 76.2217 83 65" stroke="black" stroke-linecap="round" />
                            </svg>
                        </div> */}

                        {/* BIO SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>


                    {/* SKILLS CONTAINER */}
                    <div className='flex flex-col gap-12 justify-center' ref={skillRef}>

                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0 }}
                            className='font-bold text-2xl'
                        >
                            SKILLS
                        </motion.h1>

                        {/* SKILLS LIST */}
                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className='flex gap-4 flex-wrap'
                        >
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TypeScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Figma</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React</div>
                        </motion.div>

                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className='flex gap-4 flex-wrap'
                        >
                            <div className='rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500'>JavaScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500'>TypeScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500'>Tailwind</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500'>JavaScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500'>JavaScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500'>JavaScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500'>JavaScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-red-500 text-white hover:bg-white hover:text-red-500'>JavaScript</div>
                        </motion.div>

                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className='flex gap-4 flex-wrap'
                        >
                            <div className='rounded p-2 text-sm cursor-pointer bg-grey-600 text-white hover:bg-white hover:text-grey-600'>Metabase</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-grey-600 text-white hover:bg-white hover:text-grey-600'>Grafana</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-grey-600 text-white hover:bg-white hover:text-grey-600'>Clickhouse</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-grey-600 text-white hover:bg-white hover:text-grey-600'>PostGreSQL</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-grey-600 text-white hover:bg-white hover:text-grey-600'>Prisma</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-grey-600 text-white hover:bg-white hover:text-grey-600'>TypeORM</div>
                        </motion.div>

                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className='flex gap-4 flex-wrap'
                        >
                            <div className='rounded p-2 text-sm cursor-pointer bg-cyan-500 text-white hover:bg-white hover:text-cyan-500'>Notion</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-cyan-500 text-white hover:bg-white hover:text-cyan-500'>Basecamp</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-cyan-500 text-white hover:bg-white hover:text-cyan-500'>JIRA</div>
                        </motion.div>



                        {/*  SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>


                    </div>
                    {/* EXP CONTAINER */}
                    <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
                        {/* EXP TITLE */}

                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isExpRefInView ? { x: '0' } : {}}
                            transition={{ delay: 0.2 }}
                            className='font-bold text-2xl'
                        >
                            EXPERIENCE
                        </motion.h1>

                        {/* EXP LIST */}
                        <motion.div
                            initial={{ x: '-300px' }}
                            animate={isExpRefInView ? { x: '0' } : {}}
                            className=''>

                            {/* EXP ITEMS */}

                            <div className='flex justify-between h-64'>

                                {/* LEFT */}
                                <div className='w-1/3'>
                                    {/* JOB TITLE */}
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>PRODUCT MANAGER</div>
                                    {/* JOB DESC */}
                                    <div className='p-3 text-sm italic'>
                                        Defining and sharing a vision aligned with company goals, managing the backlog, utilizing KPIs for product performance, overseeing the complete product lifecycle, adapting strategy based on feedback and market changes, and coordinating product launches with a well-defined strategy to achieve objectives.
                                    </div>
                                    {/* DATES */}
                                    <div className='p-3 text-red-600 text-sm font-semibold'>2021 - 2023</div>
                                    {/* COMPANY */}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>DISPLAYCE</div>
                                </div>


                                {/* CENTER */}
                                <div className='w-1/6 flex justify-center'>
                                    {/* LINE */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        {/* CIRCLE */}
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className='w-1/3'>

                                </div>


                            </div>

                            <div className='flex justify-between h-64'>


                                {/* LEFT */}
                                <div className='w-1/3'>

                                </div>


                                {/* CENTER */}
                                <div className='w-1/6 flex justify-center'>
                                    {/* LINE */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        {/* CIRCLE */}
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className='w-1/3'>
                                    {/* JOB TITLE */}
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>PRODUCT OWNER</div>
                                    {/* JOB DESC */}
                                    <div className='p-3 text-sm italic'>
                                        Prioritizing features based on user value, regularly updating the product backlog, facilitating effective communication with development teams and stakeholders, validating developed features for specification compliance, planning and overseeing development iterations (sprints), and continually adjusting the strategy based on user feedback and changing priorities.
                                    </div>
                                    {/* DATES */}
                                    <div className='p-3 text-red-500 text-sm font-semibold'>2019-2021</div>
                                    {/* COMPANY */}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>DISPLAYCE</div>
                                </div>


                            </div>

                            <div className='flex justify-between h-64'>


                                {/* LEFT */}
                                <div className='w-1/3'>
                                    {/* JOB TITLE */}
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>UX ENGINEER</div>
                                    {/* JOB DESC */}
                                    <div className='p-3 text-sm italic'>
                                        Developing user-centric interfaces, crafting visual prototypes for rapid testing and iteration, collaborating effectively with development, marketing, and project management teams, conducting usability tests, and creatively solving human-machine interaction challenges.
                                    </div>
                                    {/* DATES */}
                                    <div className='p-3 text-red-500 text-sm font-semibold'>2016-2019</div>
                                    {/* COMPANY */}
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>DISPLAYCE</div>
                                </div>


                                {/* CENTER */}
                                <div className='w-1/6 flex justify-center'>
                                    {/* LINE */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        {/* CIRCLE */}
                                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className='w-1/3'>

                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
                {/* IMAGE CONTAINER */}
                <div className='hidden lg:block w-1/2 sticky top-0 z-30 xl:1/2 bg-red-500 pl-20 pt-10'>

                    <Brain scrollYProgress={scrollYProgress} />
                </div>

            </div>
        </motion.div >
    );
};

export default AboutPage;