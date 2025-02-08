// import React from "react";
// import Tilt from 'react-parallax-tilt';
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { styles } from "../styles";
// import { github } from "../assets";

// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </motion.div>

//       <div className='mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
//     {projects.map((project, index) => (
//         <ProjectCard key={`project-${index}`} index={index} {...project} />
//     ))}
// </div>

//     </>
//   );
// };

// export default SectionWrapper(Works, "works");


import React, { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    // Persistent glowing effect on the vertical line
    const glowTimeline = gsap.timeline({
      defaults: { duration: 1.5, ease: "power2.inOut", repeat: -1, yoyo: true },
    });
    glowTimeline
      .to(lineRef.current, { boxShadow: "0 0 20px rgba(80, 200, 255, 0.7)" })
      .to(lineRef.current, { boxShadow: "0 0 40px rgba(80, 200, 255, 1)" });

    // Scroll-reactive growth
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: lineRef.current.parentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Glowing Vertical Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full">
        <div ref={lineRef} className="w-full h-0 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full shadow-lg" />
      </div>

      {/* Section Title */}
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Project Cards */}
      <div className="relative mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
