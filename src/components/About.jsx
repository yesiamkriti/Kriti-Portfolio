import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-20 text-xl">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[#eb55a2]`}>Overview</h2>
      </div>

      <div className="flex flex-col items-center mt-8 px-4 lg:px-0">
        <div className="max-w-4xl text-center" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
          <h1 className="text-2xl font-bold mb-4">Hello!</h1>
          <p>My name is <strong>Kriti</strong>, and I am currently a Third-year B.Tech student majoring in Computer Science and Engineering. I have a strong passion for technology and a keen interest in software development, particularly in areas such as web development, data structures, and algorithms.</p>
          <p className="mt-4">Throughout my academic journey so far, I have gained foundational knowledge in various programming languages, including C++, Java, and Python. I have also explored the basics of web development using HTML, CSS, and JavaScript. Recently, I have been delving into more advanced topics like database management, operating systems, and computer networks.</p>
          <p className="mt-4">In addition to my coursework, I have worked on several projects that have helped me apply my theoretical knowledge to practical scenarios as mention below, which enhanced my understanding of full-stack development and teamwork.</p>
          <p className="mt-4">I am an enthusiastic learner, always eager to expand my skills and take on new challenges. I believe in the power of collaboration and am excited about the opportunities to work on innovative projects and internships that can help me grow both professionally and personally.</p>
          <p className="mt-4">In my free time, I enjoy <strong>coding challenges, playing chess, reading tech blogs and listening songs</strong>, which keep me engaged and motivated.</p>
          <p className="mt-4">Thank you for taking the time to learn a little about me. I am looking forward to connecting with like-minded individuals and contributing to exciting technological advancements.</p>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
