import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-10" id="about">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>

        {/* Layout: Left (Intro) | Right (Education) */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side - Introduction */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Personal Profile
            </h3>

            <p className="text-lg leading-relaxed mb-4">
              I am a passionate full-stack developer focused on building modern and responsive web applications.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              I have a strong foundation in frontend and backend development, and I enjoy turning ideas into real-world solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              I'm always eager to learn and grow as a developer. Clean code, good design, and user-centered thinking are at the core of my approach.
            </p>
          </div>

          {/* Right Side - Education (Simple Design) */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Education
            </h3>

            <div className="space-y-6">
              {/* Item 1 */}
              <div>
                <h4 className="text-lg font-semibold">Diploma in Information Technology</h4>
                <p className="text-sm text-white">I am an enthusiastic student currently pursuing a Diploma in Information Technology. I’m passionate about web development and always eager to learn new technologies. My goal is to grow as a developer and build creative, user-friendly digital solutions.</p>
              </div>

              {/* Item 2 */}
              <div>
                <h4 className="text-lg font-semibold">Advanced Level (A/L)</h4>
                <p className="text-sm text-green-400">Henegama Central Collage,Gampaha.</p>
                <p className="text-sm text-gray-400">2018 - 2020</p>
              </div>

              {/* Item 3 */}
              <div>
                <h4 className="text-lg font-semibold">Ordinary Level (O/L)</h4>
                <p className="text-sm text-green-400">Henegama Central Collage,Gampaha.</p>
                <p className="text-sm text-gray-400">2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
