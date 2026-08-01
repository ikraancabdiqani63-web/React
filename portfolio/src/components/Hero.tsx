import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section  id="home" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-between px-8">
        {/* Left Side */}
        <div className="max-w-xl">
          <p className="text-gray-400 text-lg">Hello, I'm</p>

          <h1 className="text-6xl font-bold mt-2">Ikraan Abdiqani</h1>

          <h2 className="text-3xl text-cyan-400 font-semibold mt-4">
            Frontend React Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            I build modern and responsive websites using React, TypeScript and
            Tailwind CSS.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#projects">
              <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300">
                View Projects
              </button>
            </a>

          </div>
        </div> 

        {/* Right Side */}
        <div>
          <img
            src={profile}
            alt="Profile"
            className="w-96 h-96 rounded-full object-cover border-4 border-cyan-400"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
