"use client";

import React, { useState, useEffect } from 'react';

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Wrench, Code, Gamepad2, Dumbbell, ArrowLeft } from "lucide-react";
import Link from "next/link"
import { ConnectSection } from "@/components/connect-section"

type AnimatedTextProps = {
  children: React.ReactNode;
  delay?: number;
};

const AnimatedText = ({ children, delay = 0 }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-800 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 75) return 75; // Stop at 75%
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gray-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function AboutMePage() {
  const [currentIcon, setCurrentIcon] = useState(0);
  const icons = [Wrench, Code, Gamepad2, Dumbbell];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIcon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

      <Header />

      <main className="pt-32 pb-10">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Back Button */}
          <div className="flex justify-start">
            <Button variant="ghost" asChild className="hover:bg-slate-200">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
              
              {/* Animated Icon */}
              <AnimatedText delay={200}>
                <div className="bounce-slow inline-block">
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                    <CurrentIcon className="w-12 h-12 text-gray-600 transition-all duration-500" />
                  </div>
                </div>
              </AnimatedText>

              {/* Copy Content */}
              <AnimatedText delay={400}>
                <div className="space-y-6">
                  <div className="text-4xl">🚧</div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight">
                    Under Construction
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Building something awesome! 🚀
                  </p>
                  <p className="text-gray-500 max-w-lg mx-auto">
                    This page is currently being crafted with care. Check back soon to see what&apos;s cooking!
                  </p>
                  <div className="pt-4">
                    <ProgressBar />
                  </div>
                </div>
              </AnimatedText>

              {/* Status Pills */}
              <AnimatedText delay={1200}>
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm border">
                    ⚡ Coding in progress
                  </span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm border">
                    🎮 Gaming break scheduled
                  </span>
                </div>
              </AnimatedText>

            </div>
          </div>

          <ConnectSection/>

        </div>
      </main>

      <Footer />
    </div>
  )
}