import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sayanp650@gmail.com",
      href: "mailto:sayanp650@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9331070781",
      href: "tel:+919331070781",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Durgapur, India",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sayan650", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sayanp650-nitdgp",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/Sayanp650", label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-container">
      <div className="fadeIn mb-16 text-left">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-portfolio-orange/10 border border-portfolio-orange/20 mb-6">
          <span className="text-portfolio-orange font-medium">05</span>
          <span className="text-portfolio-gray-300 ml-2">Get In Touch</span>
        </div>

        <h2 className="section-title mb-6">
          LET'S
          <br />
          <span className="text-gradient">
            BRING YOUR VISIONS <br /> IN REAL LIFE
          </span>
        </h2>

        <p className="section-subtitle">
          Have a project in mind? Let's discuss how we can work together to
          bring your ideas to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="fadeIn stagger-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-portfolio-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-gray-900 border border-portfolio-gray-800 rounded-lg text-white placeholder-portfolio-gray-500 focus:border-portfolio-orange focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-portfolio-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-gray-900 border border-portfolio-gray-800 rounded-lg text-white placeholder-portfolio-gray-500 focus:border-portfolio-orange focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-portfolio-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-portfolio-gray-900 border border-portfolio-gray-800 rounded-lg text-white placeholder-portfolio-gray-500 focus:border-portfolio-orange focus:outline-none transition-colors"
                placeholder="Project Collaboration"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-portfolio-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-portfolio-gray-900 border border-portfolio-gray-800 rounded-lg text-white placeholder-portfolio-gray-500 focus:border-portfolio-orange focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="button-primary w-full justify-center"
            >
              {/* <Send className="w-5 h-5 mr-2" /> */}
              Send Message
              {/* <span>Send Message</span> */}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="fadeIn stagger-3">
          <div className="glass-card p-8 h-fit">
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 group hover:text-portfolio-orange transition-colors"
                >
                  <div className="w-12 h-12 bg-portfolio-orange/10 rounded-lg flex items-center justify-center group-hover:bg-portfolio-orange/20 transition-colors">
                    <info.icon className="w-6 h-6 text-portfolio-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-portfolio-gray-400">
                      {info.title}
                    </div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t border-portfolio-gray-800 pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-12 h-12 bg-portfolio-gray-800 border border-portfolio-gray-700 rounded-lg flex items-center justify-center text-portfolio-gray-400 hover:text-portfolio-orange hover:border-portfolio-orange transition-all duration-300 hover:scale-110"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
