
import React from "react";
import { Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-gray-900 border-t border-portfolio-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-portfolio-orange rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">PAUL</span>
          </div>

          <div className="flex items-center space-x-2 text-portfolio-gray-400">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-portfolio-orange" />
            <span>by Sayan Paul</span>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-portfolio-gray-400 hover:text-portfolio-orange transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-portfolio-gray-400 hover:text-portfolio-orange transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-portfolio-gray-400 hover:text-portfolio-orange transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
