function Navbar () {
  return (
    <nav className="bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
              <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                  <span className="text-slate-900 text-xl font-bold">
                      IA
                  </span>
              </div>
<ul className="flex gap-8">
  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#projects">Projects</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>
</ul>
      </div>
    </nav>
  );
}
export default Navbar;