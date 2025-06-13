import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DevXStark",
      description:
        "A no-code, AI-driven platform that streamlines Starknet onboarding for both end users and developers, reducing initial setup friction by automating contract scaffolding and deployment.",
      tech: ["Next.Js", "Node.js", "PostgreSQL", "Cairo"],
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      github: "#",
      live: "#",
      featured: true,
      hackathonWinner: true,
      hackathonName: "EthIndia",
    },
    {
      id: 2,
      title: "Boardlify",
      description:
        "A collaborative online whiteboarding platform (like Miro) using Next.js and TypeScript, delivering server-side rendering (SSR) and static-site generation (SSG) for fast initial loads.",
      tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Vercel Clone",
      description:
        "Build Vercel like website that can import git repo and host it on internet for us in 1 click. Used AWS, Redis to host websites.Has 3 parts upload service for uploading the code to S3, deployment service to convert the react code to HTML/CSS and request service to access the hosted website.",
      tech: ["Next.js", "OpenAI API", "Tailwind", "Prisma"],
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Video and Voice Chat Application",
      description:
        " •WebRTC + Socket.io based project which connects users realtime through a voice or video call or through realtime chat. • Used WebRTC for video and voice streaming. • Also have screen sharing feature on video call.",
      tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "DRepo",
      description:
        "A version control system in web3.The code is saved in distributed storage IPFS",
      tech: ["React.js", "Express", "Socket.io", "MongoDB"],
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="fadeIn mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-portfolio-orange/10 border border-portfolio-orange/20 mb-6">
          <span className="text-portfolio-orange font-medium">03</span>
          <span className="text-portfolio-gray-300 ml-2">My Work</span>
        </div>

        <h2 className="section-title mb-6">
          FEATURED
          <br />
          <span className="text-gradient">PROJECTS</span>
        </h2>

        <p className="section-subtitle">
          A showcase of my recent work, demonstrating expertise in modern web
          technologies and creative problem-solving approaches.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`fadeIn stagger-${index + 1} group project-card overflow-hidden`}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {project.hackathonWinner && (
                <div className="absolute top-4 right-4 z-10">
                  {/* Medal with Ribbons */}
                  <div className="relative w-20 h-24">
                    {/* Ribbon top connector */}
                    {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-red-600 z-10"></div> */}

                    {/* Left ribbon */}
                    {/* <div className="absolute top-2 left-1/2 transform -translate-x-[12px] w-3 h-20 bg-gradient-to-b from-red-600 to-red-700 rotate-[-25deg] rounded-b-lg z-0"></div>

                    {/* Right ribbon */}
                    {/* <div className="absolute top-2 left-1/2 transform -translate-x-[0px] w-3 h-24 bg-gradient-to-b from-red-600 to-red-700 rotate-[25deg] rounded-b-lg z-0"></div> */}

                    {/* Medal body */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 border-[3px] border-yellow-600 flex flex-col items-center justify-center shadow-lg z-20">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-portfolio-orange to-yellow-400 border border-yellow-500 flex flex-col items-center justify-center">
                        <span className="text-[10px] font-bold text-black">
                          WINNER
                        </span>
                        <span className="text-[8px] font-medium text-black">
                          Starknet
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {project.hackathonWinner && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-portfolio-orange to-amber-500 text-black font-bold py-2 px-4 rounded-md shadow-lg z-10 transform rotate-[-12deg]">
                  {project.hackathonName} Winner
                </div>
              )}
              <div className="absolute inset-0 bg-portfolio-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-portfolio-orange transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-portfolio-orange transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-portfolio-orange transition-colors">
                {project.title}
              </h3>

              <p className="text-portfolio-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href={project.live}
                  className="inline-flex items-center text-portfolio-orange hover:text-portfolio-orange-light transition-colors font-medium"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center text-portfolio-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 fadeIn stagger-4">
        <button className="button-secondary">View All Projects</button>
      </div>
    </section>
  );
};

export default Projects;
