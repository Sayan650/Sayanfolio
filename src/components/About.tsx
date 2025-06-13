import React, { useState, useEffect, useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: "3+", label: "Years Experience", value: 3 },
    { number: "50+", label: "Projects Completed", value: 50 },
    { number: "15+", label: "Happy Clients", value: 15 },
    { number: "24/7", label: "Support", value: 24 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateStats();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setAnimatedStats((prev) => {
          const newStats = [...prev];
          newStats[index] = Math.floor(start);
          return newStats;
        });
      }, 16);
    });
  };

  const formatStatNumber = (value: number, originalStat: string) => {
    if (originalStat.includes("+")) {
      return `${value}+`;
    } else if (originalStat.includes("/")) {
      // For 24/7, we'll handle it specially
      return originalStat === "24/7"
        ? value >= 24
          ? "24/7"
          : `${value}/7`
        : `${value}`;
    }
    return value.toString();
  };

  return (
    <section
      id="about"
      className="section-container bg-portfolio-gray-900"
      ref={sectionRef}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="fadeIn">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-portfolio-orange/10 border border-portfolio-orange/20 mb-6">
            <span className="text-portfolio-orange font-medium">01</span>
            <span className="text-portfolio-gray-300 ml-2">About Me</span>
          </div>

          <h2 className="section-title mb-6">
            TURNING IDEAS
            <br />
            <span className="text-gradient">INTO CODE</span>
          </h2>

          <p className="text-lg text-portfolio-gray-300 mb-8 leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web
            technologies. I love creating efficient, scalable solutions that
            solve real-world problems and deliver exceptional user experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-portfolio-orange mb-1 transition-all duration-300">
                  {isVisible
                    ? formatStatNumber(animatedStats[index], stat.number)
                    : "0"}
                </div>
                <div className="text-sm text-portfolio-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fadeIn stagger-2">
          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-portfolio-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-portfolio-orange/10 p-6">
              {/* Shiny gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-portfolio-orange/20 to-portfolio-orange/5 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:from-portfolio-orange/30 group-hover:to-portfolio-orange/10 transition-all duration-300 shadow-lg shadow-portfolio-orange/20">
                  <Code2 className="w-6 h-6 text-portfolio-orange drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">
                  Clean Code
                </h3>
                <p className="text-portfolio-gray-400">
                  Writing maintainable, scalable code following industry best
                  practices and design patterns.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-portfolio-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-portfolio-orange/10 p-6">
              {/* Shiny gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-portfolio-orange/20 to-portfolio-orange/5 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:from-portfolio-orange/30 group-hover:to-portfolio-orange/10 transition-all duration-300 shadow-lg shadow-portfolio-orange/20">
                  <Palette className="w-6 h-6 text-portfolio-orange drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">
                  UI/UX Design
                </h3>
                <p className="text-portfolio-gray-400">
                  Creating intuitive interfaces that provide seamless user
                  experiences across all devices.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-portfolio-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-portfolio-orange/10 p-6">
              {/* Shiny gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-portfolio-orange/20 to-portfolio-orange/5 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:from-portfolio-orange/30 group-hover:to-portfolio-orange/10 transition-all duration-300 shadow-lg shadow-portfolio-orange/20">
                  <Rocket className="w-6 h-6 text-portfolio-orange drop-shadow-sm" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">
                  Performance
                </h3>
                <p className="text-portfolio-gray-400">
                  Optimizing applications for speed, accessibility, and search
                  engine visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
