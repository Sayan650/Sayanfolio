import React, { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Picture1 from "../../public/image.jpeg";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create normal particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.fillStyle = `rgba(255, 39, 0, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll progress for document title
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollHeight) * 100;
      document.title = `Sayan's Portfolio ${scrollProgress.toFixed(0)}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-start overflow-hidden bg-hero-gradient"
    >
      {/* Background Image Overlay with Parallax Effect */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${Picture1})`,
          transform: `translateY(${scrollY * 0.6}px)`,
          backgroundSize: "cover",
          marginTop: "-50px",
          height: "calc(100% + 200px)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-portfolio-black/50" />

      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      <div className="relative z-20 text-left px-6 max-w-5xl ml-8 lg:ml-16">
        <div className="fadeIn">
          <h1 className="hero-text mb-6">
            <span className="block text-white text-5xl">Hey, I'm</span>
            <span className="block text-gradient text-7xl">Sayan</span>
            {/* <span className="block text-stroke">Paul</span> */}
          </h1>
        </div>

        <div className="flex justify-start items-start">
          <div className="fadeIn stagger-2 mb-8">
            <p className="text-xl md:text-2xl text-portfolio-gray-300 max-w-2xl ml-auto leading-relaxed">
              Crafting digital experiences with modern technologies and clean
              code architecture.
            </p>
          </div>
        </div>

        <div className="fadeIn mb-12 sm:justify-start sm:items-start">
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <a
              href="#projects"
              onClick={scrollToAbout}
              className="button-primary"
            >
              View My Work
            </a>
            <a
              href="/Resume.pdf"
              download="Sayan_Paul_Resume.pdf"
              className="button-secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="fadeIn stagger-4">
          <div className="flex justify-start space-x-6">
            <a
              href="https://github.com/Sayan650"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-portfolio-gray-900/80 backdrop-blur-sm border border-portfolio-gray-800 rounded-full flex items-center justify-center text-portfolio-gray-400 hover:text-gray-200 hover:border-gray-500 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sayanp650-nitdgp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-portfolio-gray-900/80 backdrop-blur-sm border border-portfolio-gray-800 rounded-full flex items-center justify-center text-portfolio-gray-400 hover:text-gray-200 hover:border-gray-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sayanp650@gmail.com"
              className="w-12 h-12 bg-portfolio-gray-900/80 backdrop-blur-sm border border-portfolio-gray-800 rounded-full flex items-center justify-center text-portfolio-gray-400 hover:text-gray-200 hover:border-gray-500 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-orange animate-bounce hover:scale-110 transition-transform z-20"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
