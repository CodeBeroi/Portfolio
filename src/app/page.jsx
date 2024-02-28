"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (

    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row'>
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/photo.png" alt="photo" fill className="object-contain" unoptimized={true} />
        </div>

        {/* TEXT CONTAINER  */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* TITLE  */}
          <h1 className="text-4xl md:text-6xl font-bold text-customred">
            Crafting digital experiences, designing tomorrow
          </h1>
          {/* TEXT  */}
          <div className="flex gap-10">
            <p className="md:text-xl flex flex-col gap-4">Welcome to my digital canvas, where innovation and creativity converge. </p>
            <div className="flex flex-col gap-4">
              <p>👩‍🎓 Selft-taught fullstack developper</p>
              <p>🍷 Living in Bordeaux</p>
              <p>🤝 Available for hire</p>
            </div>

          </div>
          <div className="w-full flex gap-4">
            <Link href="portfolio">
              <button className="p-4 rounded-lg ring-1 ring-customred text-white bg-customred hover:text-customred hover:bg-white">View my work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-customred text-customred hover:bg-customred hover:text-white">Contact me</button>
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );

};

export default Homepage;
