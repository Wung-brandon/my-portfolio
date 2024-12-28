"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AboutMe() {
  const myRef = useRef(null);
  const inView = useInView<any>(myRef, { threshold: 0.5 });

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={myRef}
      
      className="text-foreground flex flex-col items-center lg:items-start px-10 py-16 mt-10"
    >
      <motion.h2
        className="text-light text-3xl lg:text-5xl font-bold mb-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        About Me
      </motion.h2>
      <motion.h3
        className="text-primary text-xl lg:text-2xl font-medium mb-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        Who Am I?
      </motion.h3>
      <motion.p
        className="text-muted text-lg lg:text-xl leading-normal text-center lg:text-left"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        I’m a highly motivated Full Stack Developer with a passion for building
        dynamic and user-friendly web applications. With expertise in React,
        Next.js, and Django, I create solutions that are not only functional
        but also visually engaging. I enjoy solving complex problems and
        turning ideas into reality.
        <br />
        <br />
        When I’m not coding, you can find me exploring the latest web
        development trends or contributing to open-source projects.
      </motion.p>
      <motion.ul
        className="list-disc text-muted text-lg lg:text-xl leading-normal mt-6 ml-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <li>Building responsive and scalable web applications</li>
        <li>Developing robust APIs and backend systems</li>
        <li>Crafting modern, intuitive user interfaces</li>
      </motion.ul>
      <motion.div
        className="mt-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <a
          href="#"
          className="bg-accent text-light text-xl hover:bg-primary hover:text-white px-6 py-3 rounded-md hover:scale-110 transition-transform"
        >
          View My Work
        </a>
      </motion.div>
    </motion.div>
  );
}
export default AboutMe