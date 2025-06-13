import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";

const Skills = () => {
  const [developerCode, setDeveloperCode] = useState({
    name: "Your Name",
    skills: ["React", "Node.js", "TypeScript"],
    passion: "Building amazing web experiences",
    currentlyLearning: "AI/ML Integration",
  });

  const [animatedSkills, setAnimatedSkills] = useState<{
    [key: string]: number;
  }>({});
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "Redis", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Kubernetes", level: 80 },
      ],
    },
  ];

  const tools = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Next.js",
    "Node.js",
    "Express",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "Figma",
    "Tailwind CSS",
    "SASS",
    "Webpack",
    "Kubernetes",
    "Cypress",
  ];

  // Animation logic for skill bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate each skill progressively
          const allSkills = skillCategories.flatMap((category) =>
            category.skills.map((skill) => `${category.title}-${skill.name}`),
          );

          allSkills.forEach((skillKey, index) => {
            setTimeout(() => {
              const category = skillCategories.find((cat) =>
                cat.skills.some(
                  (skill) => `${cat.title}-${skill.name}` === skillKey,
                ),
              );
              const skill = category?.skills.find(
                (skill) => `${category.title}-${skill.name}` === skillKey,
              );

              if (skill) {
                animateSkillBar(skillKey, skill.level);
              }
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateSkillBar = (skillKey: string, targetLevel: number) => {
    let currentLevel = 0;
    const increment = targetLevel / 50; // 50 steps for smooth animation

    const timer = setInterval(() => {
      currentLevel += increment;
      if (currentLevel >= targetLevel) {
        currentLevel = targetLevel;
        clearInterval(timer);
      }
      setAnimatedSkills((prev) => ({
        ...prev,
        [skillKey]: Math.round(currentLevel),
      }));
    }, 20);
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setDeveloperCode((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSkillsChange = (value: string) => {
    const skillsArray = value
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
    handleInputChange("skills", skillsArray);
  };

  return (
    <section id="skills" className="section-container bg-portfolio-gray-900">
      <div className="fadeIn mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-portfolio-orange/10 border border-portfolio-orange/20 mb-6">
          <span className="text-portfolio-orange font-medium">04</span>
          <span className="text-portfolio-gray-300 ml-2">Skills</span>
        </div>

        <h2 className="section-title mb-6">
          TECHNICAL
          <br />
          <span className="text-gradient">EXPERTISE</span>
        </h2>

        <p className="section-subtitle">
          A comprehensive toolkit of modern technologies and frameworks that I
          use to build exceptional digital experiences.
        </p>
      </div>

      {/* Animated Skill Progress Bars */}
      <div ref={skillsRef} className="grid md:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className={`fadeIn stagger-${categoryIndex + 1} glass-card p-6`}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => {
                const skillKey = `${category.title}-${skill.name}`;
                const animatedLevel = animatedSkills[skillKey] || 0;

                return (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-portfolio-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-portfolio-orange text-sm font-bold">
                        {animatedLevel}%
                      </span>
                    </div>
                    <div className="w-full bg-portfolio-gray-800 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-portfolio-orange to-portfolio-orange-light h-3 rounded-full transition-all duration-500 ease-out relative"
                        style={{ width: `${animatedLevel}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Grid */}
      <div className="fadeIn stagger-5 mb-16">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Technologies I Work With
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tools.map((tool, index) => (
            <span
              key={tool}
              className="skill-badge hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Sass Project Section */}
      <div className="fadeIn stagger-4 mb-16">
        <div className="glass-card p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-portfolio-orange rounded-full animate-pulse"></div>
                <span className="text-portfolio-orange font-semibold uppercase tracking-wider text-sm">
                  Currently Building
                </span>
              </div>
              <div className="flex items-center space-x-2 text-portfolio-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Active Development</span>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Advanced <span className="text-gradient">Sass Framework</span>
            </h3>

            <p className="text-portfolio-gray-300 mb-6 leading-relaxed text-lg">
              Building a comprehensive Sass library with advanced mixins,
              utilities, and design system components. This project aims to
              revolutionize how developers approach CSS architecture and styling
              workflows.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Sass/SCSS",
                "CSS Architecture",
                "Design Systems",
                "Mixins & Functions",
                "PostCSS",
              ].map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="button-primary group flex">
                <Eye className="w-5 h-5 mr-2" />
                Preview Project
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="button-secondary group flex">
                <Github className="w-5 h-5 mr-2" />
                View Code
                <ExternalLink className="w-4 h-4 ml-2 transform group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="fadeIn stagger-6">
        <div className="text-center glass-card p-12 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-orange/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portfolio-orange/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-4">
              Join My <span className="text-gradient">Vision</span>
            </h3>
            <p className="text-xl text-portfolio-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to build something extraordinary together? Let's combine our
              skills and create innovative solutions that push the boundaries of
              web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="button-primary group flex items-center">
                Let's Collaborate
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="button-secondary flex items-center">
                View My Work
              </button>
            </div>

            <div className="mt-8 flex justify-center space-x-8 text-portfolio-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-orange">
                  50+
                </div>
                <div className="text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-portfolio-orange">
                  3+
                </div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Code Example */}
      <div className="fadeIn stagger-7 mt-16">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              const developer = () =&gt; {"{"}
            </h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="code-block">
            <div className="text-portfolio-gray-400 font-mono text-sm space-y-3">
              <div className="ml-4">
                <span className="text-blue-400">return</span> {"{"}
              </div>
              <div className="ml-8 flex items-center">
                <span className="text-green-400">name</span>:
                <input
                  type="text"
                  value={developerCode.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="ml-2 bg-transparent border-b border-portfolio-gray-700 text-yellow-400 px-2 py-1 focus:border-portfolio-orange focus:outline-none"
                  placeholder="Your Name"
                />
                ,
              </div>
              <div className="ml-8 flex items-center">
                <span className="text-green-400">skills</span>: [
                <input
                  type="text"
                  value={developerCode.skills.join(", ")}
                  onChange={(e) => handleSkillsChange(e.target.value)}
                  className="ml-2 bg-transparent border-b border-portfolio-gray-700 text-yellow-400 px-2 py-1 focus:border-portfolio-orange focus:outline-none flex-1"
                  placeholder="React, Node.js, TypeScript"
                />
                ],
              </div>
              <div className="ml-8 flex items-center">
                <span className="text-green-400">passion</span>:
                <input
                  type="text"
                  value={developerCode.passion}
                  onChange={(e) => handleInputChange("passion", e.target.value)}
                  className="ml-2 bg-transparent border-b border-portfolio-gray-700 text-yellow-400 px-2 py-1 focus:border-portfolio-orange focus:outline-none flex-1"
                  placeholder="Building amazing web experiences"
                />
                ,
              </div>
              <div className="ml-8 flex items-center">
                <span className="text-green-400">currentlyLearning</span>:
                <input
                  type="text"
                  value={developerCode.currentlyLearning}
                  onChange={(e) =>
                    handleInputChange("currentlyLearning", e.target.value)
                  }
                  className="ml-2 bg-transparent border-b border-portfolio-gray-700 text-yellow-400 px-2 py-1 focus:border-portfolio-orange focus:outline-none flex-1"
                  placeholder="AI/ML Integration"
                />
                ,
              </div>
              <div className="ml-4">{"}"}</div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
