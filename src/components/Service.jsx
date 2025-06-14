import React, { useState } from "react";

const technicalSkills = [
  {
    id: 1,
    title: "Frontend Development",
    icon: "💻",
    description: "Creating modern, responsive and interactive user interfaces",
    technologies: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500",
    hoverColor: "hover:shadow-blue-500/25"
  },
  {
    id: 2,
    title: "Backend Development", 
    icon: "⚙️",
    description: "Building robust server-side applications and APIs",
    technologies: ["Node.js", "Python", "Express.js", "Django", "REST APIs", "GraphQL"],
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500",
    hoverColor: "hover:shadow-green-500/25"
  },
  {
    id: 3,
    title: "Database Management",
    icon: "🗄️", 
    description: "Designing and managing efficient database solutions",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma"],
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500",
    hoverColor: "hover:shadow-purple-500/25"
  },
  {
    id: 4,
    title: "Tools & Technologies",
    icon: "🛠️",
    description: "Development tools for efficient workflow and deployment",
    technologies: ["Git/GitHub", "Docker", "AWS", "Vercel", "Postman", "VS Code"],
    color: "from-orange-500 to-red-500", 
    borderColor: "border-orange-500",
    hoverColor: "hover:shadow-orange-500/25"
  }
];

const TechnicalSkills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-black text-white py-5 relative overflow-hidden" id="skills">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 "></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-white bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
        
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technicalSkills.map((skill) => (
            <div
              key={skill.id}
              className={`relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 ${skill.borderColor} border-opacity-20 hover:border-opacity-60  hover:shadow-2xl cursor-pointer`}
              onMouseEnter={() => setHoveredCard(skill.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Floating Icon */}
              <div className="relative z-10">
                <div className={`text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ${hoveredCard === skill.id ? 'animate-bounce' : ''}`}>
                  {skill.icon}
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-300 group-hover:bg-gradient-to-r group-hover:${skill.color} group-hover:text-white transition-all duration-300 transform group-hover:scale-110`}
                        style={{
                          animationDelay: hoveredCard === skill.id ? `${index * 0.1}s` : '0s'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Corner Decoration */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${skill.color} rounded-full opacity-20 group-hover:opacity-60 group-hover:scale-150 transition-all duration-500`}></div>
                
                {/* Number Badge */}
                <div className={`absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:scale-125 transition-all duration-300`}>
                  {skill.id}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;