import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Palette,
  MessageSquare,
  Target,
  Search,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Digital Design",
    description:
      "Creating stunning digital experiences with modern UI/UX principles",
    icon: Palette,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "02",
    title: "Branding",
    description:
      "Building memorable brand identities that resonate with your audience",
    icon: Target,
    color: "from-green-500 to-teal-600",
  },
  {
    id: "03",
    title: "Communication",
    description: "Crafting compelling messages that connect and convert",
    icon: MessageSquare,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "04",
    title: "Strategy Research",
    description: "Data-driven insights to guide your business decisions",
    icon: Search,
    color: "from-orange-500 to-red-600",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-container bg-black text-white py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-portfolio-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-16 text-start flex flex-col items-start">
          <div className="inline-flex items-start px-6 py-3 rounded-full bg-portfolio-orange/10 border border-portfolio-orange/20 mb-8">
            <span className="text-portfolio-orange font-bold text-lg">02</span>
            <span className="text-portfolio-gray-300 ml-3 font-medium">
              Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            TRANSFORM YOUR
            <span className="block text-gradient">CREATIVE VISION</span>
          </h2>
          <p className="text-xl text-gray-300 items-start leading-relaxed max-w-3xl mx-auto">
            We're the studio that transforms creative visions, honoring
            originality in every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-portfolio-gray-900/50 border border-portfolio-gray-800 hover:border-portfolio-orange/50 transition-all duration-500 hover:transform hover:scale-[1.02] p-8"
              >
                {/* Background gradient */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                    service.color,
                  )}
                />

                {/* Service content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <span className="text-portfolio-orange text-2xl font-bold w-12 shrink-0 group-hover:text-white transition-colors duration-300">
                        {service.id}
                      </span>
                      <div
                        className={cn(
                          "ml-4 p-3 rounded-xl bg-gradient-to-br opacity-20 group-hover:opacity-100 transition-all duration-300",
                          service.color,
                        )}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* <ArrowRight className="w-5 h-5 text-portfolio-gray-600 group-hover:text-portfolio-orange transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" /> */}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-portfolio-gray-400 leading-relaxed group-hover:text-portfolio-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 border-2 border-portfolio-orange opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 p-6 rounded-2xl bg-portfolio-gray-900/30 border border-portfolio-gray-800">
            <span className="text-portfolio-gray-300">
              Ready to start your project?
            </span>
            <button className="button-primary">Let's Talk</button>
          </div>
        </div>
      </div>
    </section>
  );
}
