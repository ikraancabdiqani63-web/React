import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTypescript, SiTailwindcss, SiRedux } from "react-icons/si";

function About() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="about" className="bg-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* About */}
          <div>
            <h2 className="text-4xl font-bold">About Me</h2>

            <p className="text-gray-400 mt-6 leading-8">
              I'm a Frontend React Developer passionate about creating modern,
              responsive websites using React, TypeScript and Tailwind CSS. I
              enjoy learning new technologies and building beautiful user
              interfaces.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-4xl font-bold mb-8">My Skills</h2>

            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-slate-900 rounded-xl p-4 text-center border border-slate-700 hover:border-cyan-400 transition"
                >
                  <div className="text-3xl text-cyan-400 flex justify-center">
                    {skill.icon}
                  </div>

                  <p className="mt-3 text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
