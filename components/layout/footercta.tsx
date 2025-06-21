'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BookACallModal from "../home/module/ui/BookACallModal";

const FooterCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient - black with subtle accent */}
      <div className="absolute inset-0  z-0" />
      
      {/* Animated particles with accent color */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gray-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 5,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Decorative shapes with subtle glow */}
      <motion.div 
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-gray-800 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-gray-800 z-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background/70 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-block"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gray-800 to-gray-900 flex items-center justify-center mx-auto border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Transform Your Ideas?
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl  mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let's discuss how we can accelerate your next breakthrough project with AI-powered innovation
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
               <BookACallModal/>
                
              </motion.div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default FooterCTA;
