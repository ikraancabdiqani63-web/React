import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>

        <p className="text-gray-400 text-center mt-4">
          Feel free to contact me for opportunities or collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">ikraancabdiqani63@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl">
              <FaGithub className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/ikraancabdiqani63-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  github.com/ikraancabdiqani63-web
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-xl">
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <a
                  href="https://instagram.com/ikran_ladan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  instagram.com/ikran_ladan/
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form className="bg-slate-900 p-8 rounded-2xl space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
            ></textarea>

            <button className="w-full bg-cyan-400 text-slate-900 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
