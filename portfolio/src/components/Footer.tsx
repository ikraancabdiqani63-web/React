import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Ikraan Abdiqani
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend React Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/ikraancabdiqani63-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com/Ikran_ladan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ikraancabdiqni63@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 Ikraan Abdiqani. Built with React, TypeScript & Tailwind CSS.
        </div>

      </div>
    </footer>
  );
}

export default Footer;