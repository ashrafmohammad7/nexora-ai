import { FaUpload, FaChartBar, FaBrain } from "react-icons/fa";
import ResumeUpload from "./components/ResumeUpload";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-700">
        
        <h1 className="text-2xl font-bold text-cyan-400">
          Nexora AI
        </h1>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Dashboard
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Upload Resume
          </a>
        </div>

      </nav>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20">

        {/* Hero Heading */}
        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-5xl">
          AI-Powered Employability Intelligence Platform
        </h2>

        {/* Hero Description */}
        <p className="mt-6 text-slate-300 max-w-3xl text-lg leading-relaxed">
          Analyze resumes, detect skill gaps, predict placement readiness,
          and empower students with AI-driven career intelligence.
        </p>

        {/* CTA Button */}
        <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl text-lg font-semibold shadow-lg shadow-cyan-500/20">
          Get Started
        </button>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl">

          {/* Card 1 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">

            <FaUpload className="text-5xl text-cyan-400 mb-5 mx-auto" />

            <h3 className="text-2xl font-semibold">
              Resume Upload
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Upload resumes in PDF or DOC format for AI-powered
              employability analysis.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">

            <FaBrain className="text-5xl text-cyan-400 mb-5 mx-auto" />

            <h3 className="text-2xl font-semibold">
              Skill Gap Detection
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Compare student skills with industry demands and detect
              missing competencies instantly.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 hover:-translate-y-1 transition duration-300">

            <FaChartBar className="text-5xl text-cyan-400 mb-5 mx-auto" />

            <h3 className="text-2xl font-semibold">
              Placement Analytics
            </h3>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Generate job readiness scores and AI-powered placement
              predictions with analytics.
            </p>

          </div>

        </div>

        {/* Resume Upload Section */}
        <ResumeUpload />

      </main>
    </div>
  );
}

export default App;