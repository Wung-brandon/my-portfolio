/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import handImg from "../../src/assets/hand.png";
import brandonImg from "../../src/assets/brandi.png";
const HeroSection = () => {
  const myRef = useRef(null);
  const inView = useInView<any>(myRef, { threshold: 0.5 });

  const hVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.7 } },
  };

  const text2Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.9 } },
  };
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <motion.div
        ref={myRef}
        id="home"
        className="text-foreground flex flex-col lg:flex-row justify-center lg:justify-between items-center font-sans px-10 py-6 mt-3 lg:mt-20"
      >
        <div className="flex flex-col mb-14 text-center lg:text-left md:text-2xl">
          <motion.h1
            className="text-light text-4xl lg:text-6xl font-bold mt-4 flex items-center justify-center 
            lg:justify-start flex-col lg:flex-row"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={hVariants}
          >
            <span className="flex items-center justify-center lg:mr-4">
              Hey
              <Image
                src={handImg}
                alt="handImg"
                width={70}
                height={70}
                className="mx-4"
              />
            </span>
            <span className="mt-2 lg:mt-0">I'm Wung Brandon</span>
          </motion.h1>

          <motion.h2
            className="capitalize text-light text-2xl leading-normal lg:text-4xl mt-7"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
          >
            A Passionate{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold from-primary to-accent">
              Full Stack Developer
            </span>
          </motion.h2>
          <motion.p
            className="text-muted text-2xl mt-6 leading-normal tracking-normal"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={text2Variants}
          >
            I specialize in building modern, responsive, and user-friendly <br /> websites
            and web applications using cutting-edge technologies <br />  like React, Next.js, Typescript,
            and Django.
          </motion.p>

          <motion.div
            className="flex items-center gap-10 mt-5 lg:flex-row flex-col"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={text2Variants}
          >
            <button 
              className="text-secondary border border-secondary rounded-xl px-5 py-3"
            >Download CV</button>
            <Link
              href="/"
              className="bg-accent text-light text-2xl hover:bg-secondary hover:text-white px-5 py-3 
              rounded-md hover:scale-110 transition duration-300 ease-in-out animate-scaleInOut"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center mt-1 lg:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Image
            src={brandonImg}
            alt="developerImg"
            width={550}
            className="rounded-full"
          />
          
        </motion.div>
      </motion.div>
  )
}

export default HeroSection