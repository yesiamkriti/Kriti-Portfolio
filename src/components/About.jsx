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
          alt='web-development'
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
    
      <motion.div variants={textVariant()}>
      
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-[#eb55a2]`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Hello!</h1>
      <p>My name is <strong>[Your Name]</strong>, and I am currently a second-year B.Tech student majoring in Computer Science and Engineering. I have a strong passion for technology and a keen interest in software development, particularly in areas such as web development, data structures, and algorithms.</p>
      <p>Throughout my academic journey so far, I have gained foundational knowledge in various programming languages, including C++, Java, and Python. I have also explored the basics of web development using HTML, CSS, and JavaScript. Recently, I have been delving into more advanced topics like database management, operating systems, and computer networks.</p>
      <p>In addition to my coursework, I have worked on several projects that have helped me apply my theoretical knowledge to practical scenarios. For instance, I developed a <strong>[brief description of a project, e.g., a task management app using the MERN stack]</strong>, which enhanced my understanding of full-stack development and teamwork.</p>
      <p>I am an enthusiastic learner, always eager to expand my skills and take on new challenges. I believe in the power of collaboration and am excited about the opportunities to work on innovative projects and internships that can help me grow both professionally and personally.</p>
      <p>In my free time, I enjoy <strong>[mention any hobbies or interests, e.g., coding challenges, playing chess, reading tech blogs]</strong>, which keep me engaged and motivated.</p>
      <p>Thank you for taking the time to learn a little about me. I am looking forward to connecting with like-minded individuals and contributing to exciting technological advancements.</p>
    </div>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
