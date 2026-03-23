"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { GraduationCap, Book, Award } from "lucide-react";

const educationDetails = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 5.80",
    date: "Aug 2023 - Present",
    icon: <GraduationCap className="w-8 h-8 text-neon-teal" />,
    color: "neon-teal"
  },
  {
    institution: "Scholars Academy Pauri Gharwal",
    location: "Kotdwara, India",
    degree: "Intermediate",
    score: "Percentage: 62%",
    date: "Apr 2022 - Mar 2023",
    icon: <Book className="w-8 h-8 text-neon-blue" />,
    color: "neon-blue"
  },
  {
    institution: "Scholars Academy Pauri Gharwal",
    location: "Kotdwara, India",
    degree: "Matriculation",
    score: "Percentage: 79%",
    date: "Apr 2020 - Mar 2021",
    icon: <Award className="w-8 h-8 text-neon-purple" />,
    color: "neon-purple"
  }
];

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="py-24 border-b border-gray-800 relative bg-black/50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-neon-teal font-mono mb-4 text-sm">
            <span className="w-8 h-[1px] bg-neon-teal"></span>
            <span>ACADEMIC BACKGROUND</span>
            <span className="w-8 h-[1px] bg-neon-teal"></span>
          </div>
          <H2 className="text-4xl md:text-5xl border-none">Education</H2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="relative border-l-2 border-gray-800 ml-4 md:ml-0"
        >
          {educationDetails.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-12 relative pl-8 md:pl-10 group">
              <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-black border-2 border-[var(--color-${item.color})] flex items-center justify-center shadow-[0_0_15px_var(--color-${item.color})] transition-transform group-hover:scale-110 z-10`}>
                 <div className={`w-3 h-3 rounded-full bg-current text-${item.color}`} />
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                 <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <H3 className="text-2xl text-white mb-1">{item.degree}</H3>
                      <P className="text-lg text-gray-300 font-medium m-0">{item.institution}</P>
                      <P className="text-sm text-gray-400 m-0">{item.location}</P>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-1.5 bg-black/40 rounded-full border border-gray-700 w-fit">
                      <span className="text-sm font-mono text-gray-300">{item.date}</span>
                    </div>
                 </div>
                 
                 <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-4">
                    <div className="p-2 bg-black/30 rounded-lg">
                       {item.icon}
                    </div>
                    <div className={`text-lg font-mono font-bold text-${item.color}`}>
                       {item.score}
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
