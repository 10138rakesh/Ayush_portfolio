"use client";

import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Trophy, Award, BookOpen, Star, Calendar as CalendarIcon, ShieldCheck, TrendingUp, Zap, Code } from "lucide-react";
import { useMemo } from "react";

const achievements = [
  {
    title: "Hackathon Top 15 Finalist",
    month: "MAR",
    year: "2024",
    description: "Secured a top 15 position in an internal LPU coding and hackathon challenge with 200+ participants.",
    icon: <Trophy className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "C Programming",
    month: "DEC",
    year: "2024",
    description: "Successfully completed Neocolab certification, strengthening foundational programming knowledge.",
    icon: <Code className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Object Oriented Programming",
    month: "DEC",
    year: "2024",
    description: "Completed Neocolab certification focusing on OOP concepts and design patterns.",
    icon: <BookOpen className="w-6 h-6 text-purple-500" />
  },
  {
    title: "Completion of DSA in C++",
    month: "DEC",
    year: "2024",
    description: "Mastered Data Structures and Algorithms in C++ through Neocolab certification.",
    icon: <Star className="w-6 h-6 text-yellow-500" />
  },
  {
    title: "DSA Summer Boot Camp",
    month: "JUL",
    year: "2025",
    description: "Participated and completed the Neocolab DSA summer boot camp to enhance problem-solving skills.",
    icon: <Zap className="w-6 h-6 text-orange-500" />
  }
];

// Activity Map Component Removed

export function Achievements() {
  return (
    <section id="achievements" className="py-24 border-b border-gray-800 relative bg-black/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <H2 className="text-4xl md:text-5xl border-none mb-4">Milestones</H2>
          <P className="text-gray-400 max-w-2xl mx-auto mt-0">A timeline of consistent effort, learning, and professional achievements.</P>
        </motion.div>

        {/* The Calendar Storyline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Connector line on desktop */}
              {index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-[80px] -right-4 w-8 border-t-2 border-dashed border-gray-700 z-0 opacity-50 transition-opacity group-hover:opacity-100 group-hover:border-neon-teal" />
              )}

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                className="flex flex-col h-full bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden group-hover:border-white/30 transition-all duration-300 relative z-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] shadow-black/50"
              >

                {/* Calendar Header */}
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div className="text-sm font-mono font-bold text-gray-200 tracking-widest uppercase">
                    {item.month} {item.year}
                  </div>
                </div>

                {/* Calendar Body */}
                <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-black/40">
                  {/* Watermark icon */}
                  <div className="absolute right-[-10px] bottom-[-10px] opacity-[0.02] transform scale-[4] group-hover:scale-[4.5] transition-transform duration-700 ease-out z-0">
                    {item.icon}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <div className="relative z-10 flex-grow">
                    <H3 className="text-2xl mb-4 text-white font-semibold drop-shadow-md">{item.title}</H3>
                    <P className="text-base text-gray-300 mt-0 leading-relaxed drop-shadow-sm">{item.description}</P>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
