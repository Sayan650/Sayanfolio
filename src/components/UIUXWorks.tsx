import React from "react";
import { ExternalLink, Figma, ArrowRight } from "lucide-react";

const UIUXWorks = () => {
  const uiuxWorks = [
    {
      id: 1,
      title: "E-commerce App",
      description:
        "A modern e-commerce mobile application design with intuitive user flow, featuring product discovery, seamless checkout, and user account management.",
      category: "Mobile Design",
      image: "/uiux/thumbnail.png",
      figmaLink:
        "https://www.figma.com/design/zLWOPpZ1qdOaXoJ07YC64F/EY?node-id=98-822&t=rf1nV2gdJl2E541S-1",
      tools: ["Figma", "Prototyping", "User Research"],
      featured: true,
    },
    {
      id: 2,
      title: "SaaS Landing Page",
      description:
        "A comprehensive Landing design for a SaaS platform with stunnig animation. Clean and professional interface.",
      category: "Web Design",
      image: "/uiux/landing.png",
      figmaLink:
        "https://www.figma.com/design/HWtDXSVIXoZCI79XLG6rh1/Dragon-Landing?node-id=0-1&t=rf1nV2gdJl2E541S-1",
      tools: ["Figma", "Design System", "Animation"],
      featured: false,
    },
    {
      id: 3,
      title: "Food Delivery App",
      description:
        "Mobile app design for food delivery service with location-based restaurant discovery, real-time order tracking, and payment integration.",
      category: "Mobile Design",
      image: "/uiux/food.png",
      figmaLink:
        "https://www.figma.com/design/RM01wHnDxksc8cUS8RaZeX/grocery-app?node-id=22-6&t=8IyAI2tu2Ddz7PFM-1",
      tools: ["Figma", "User Journey", "User Research"],
      featured: false,
    },
    {
      id: 4,
      title: "Athena Wallet App",
      description:
        "Secure and user-friendly web3 application with account management, portfolio management, and investment planning tools powered by AI.",
      category: "App Design",
      image: "/uiux/wallet.png",
      figmaLink:
        "https://www.figma.com/design/CokTLWsz6apm1sNoHAkkl6/Athena-wallet?node-id=113-303&t=rf1nV2gdJl2E541S-1",
      tools: ["Figma", "Security UX", "Accessibility"],
      featured: false,
    },
    {
      id: 5,
      title: "Nostalgic Kolkata",
      description:
        "A nostalgic representation of my home city with eligent design and creativity.",
      category: "Web Design",
      image: "/uiux/kolkata.png",
      figmaLink:
        "https://www.figma.com/design/Si7Nyv7Q124KBKKP6E7fN9/Kolkata?node-id=1-67&t=rf1nV2gdJl2E541S-1",
      tools: ["Figma", "Social UX", "Content Strategy"],
      featured: false,
    },
  ];

  return (
    <section id="uiux-works" className="section-container">
      <div className="fadeIn mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-portfolio-orange/10 border border-portfolio-orange/20 mb-6">
          <span className="text-portfolio-orange font-medium">04</span>
          <span className="text-portfolio-gray-300 ml-2">Design Portfolio</span>
        </div>

        <h2 className="section-title mb-6">
          UI/UX
          <br />
          <span className="text-gradient">WORKS</span>
        </h2>

        <p className="section-subtitle">
          A collection of my UI/UX design work, showcasing user-centered design
          thinking and modern interface solutions across various platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {uiuxWorks.map((work, index) => (
          <div
            key={work.id}
            className={`fadeIn stagger-${index + 1} group project-card overflow-hidden ${
              work.featured ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="relative overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  work.featured ? "h-80" : "h-64"
                }`}
              />
              <div className="absolute top-4 left-4 bg-portfolio-orange/90 text-white font-medium py-1 px-3 rounded-full text-sm">
                {work.category}
              </div>
              <div className="absolute inset-0 bg-portfolio-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                  <a
                    href={work.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-portfolio-orange transition-colors"
                  >
                    <Figma className="w-5 h-5" />
                  </a>
                  <a
                    href={work.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-portfolio-orange transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-portfolio-orange transition-colors">
                {work.title}
              </h3>

              <p className="text-portfolio-gray-300 mb-4 leading-relaxed text-sm">
                {work.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {work.tools.map((tool) => (
                  <span key={tool} className="skill-badge text-xs">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={work.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-orange hover:text-portfolio-orange-light transition-colors font-medium text-sm"
                >
                  View Design
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href={work.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Figma className="w-4 h-4 mr-2" />
                  Figma
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 fadeIn stagger-4">
        <a
          href="https://www.figma.com/@sayanpaul1"
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          View All Designs
        </a>
      </div>
    </section>
  );
};

export default UIUXWorks;
