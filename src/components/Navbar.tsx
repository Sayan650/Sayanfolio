import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Code2,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent horizontal scrolling when menu is closed
  useEffect(() => {
    if (!isMenuOpen) {
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.documentElement.style.overflowX = "hidden";
    }
    return () => {
      document.documentElement.style.overflowX = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  const menuItems = [
    { id: "01", label: "ABOUT", section: "about" },
    { id: "02", label: "PROJECTS", section: "projects" },
    { id: "03", label: "SERVICES", section: "services" },
    { id: "04", label: "SKILLS", section: "skills" },
    { id: "05", label: "CONTACT", section: "contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sayan650", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sayanp650-nitdgp",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/sayanp650",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/paulland2002",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:sayanp650@gmail.com", label: "Email" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 overflow-x-hidden",
          "bg-portfolio-black/60 backdrop-blur-lg border-b border-portfolio-gray-800/50",
        )}
      >
        <div className="container flex items-center justify-between px-6 lg:px-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 group"
            aria-label="Go to top"
          >
            <div className="w-8 h-8 bg-portfolio-orange rounded-lg flex items-center justify-center group-hover:animate-glow transition-all">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              PAUL
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="nav-link"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div>
            <button
              className="md:hidden flex items-center space-x-2 text-white hover:text-gray-400 transition-colors p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={cn(
                    "block w-full h-0.5 bg-current transition-all duration-300",
                    isMenuOpen ? "rotate-45 translate-y-1.5" : "",
                  )}
                ></span>
                <span
                  className={cn(
                    "block w-full h-0.5 bg-current transition-all duration-300",
                    isMenuOpen ? "opacity-0" : "",
                  )}
                ></span>
                <span
                  className={cn(
                    "block w-full h-0.5 bg-current transition-all duration-300",
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : "",
                  )}
                ></span>
              </div>
              {/* <span className="text-sm font-medium">Menu</span> */}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 overflow-hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleMenu}
      />

      {/* Right Sidebar Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-sm bg-portfolio-black z-50 md:hidden transform transition-transform duration-500 ease-in-out overflow-y-auto overflow-x-hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-portfolio-gray-800/50">
            <span className="text-white text-xs font-medium">Menu</span>
            <button
              onClick={toggleMenu}
              className="text-white p-1 hover:text-gray-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Logo and Social Links at the top */}
          <div className="p-6 border-b border-portfolio-gray-800/50 space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-portfolio-orange rounded flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold">PAUL</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-portfolio-orange/10 hover:bg-portfolio-orange flex items-center justify-center rounded-lg transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={18}
                    className="text-gray-200 group-hover:text-white transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-6">
            <ul className="space-y-1">
              {menuItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="group flex items-center justify-between w-full py-4 px-2 text-white hover:text-portfolio-orange transition-all duration-300 border-b border-portfolio-gray-800/50 hover:border-gray-600/30 relative overflow-hidden"
                    style={{
                      animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <div className="flex items-center space-x-4 z-10 relative">
                      <span className="text-xs text-gray-500 group-hover:text-gray-400  font-mono w-6 transition-colors duration-300">
                        /{item.id}
                      </span>
                      <span className="text-3xl font-black tracking-wider ">
                        {item.label}
                      </span>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-0 bg-portfolio-orange/10 group-hover:w-full transition-all duration-300 origin-right z-0"></div>
                    <div className="w-1 h-12 bg-portfolio-orange rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-0 z-10"></div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
