import {
  FaUpload,
  FaChartBar,
  FaBrain,
} from "react-icons/fa";

import ResumeUpload from "./components/ResumeUpload";

function App() {
  return (
    <div className="min-h-screen bg-[#020c2b] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-slate-800 sticky top-0 bg-[#020c2b]/95 backdrop-blur z-50">

        <h1 className="text-3xl font-bold text-cyan-400 tracking-wide">
          Nexora AI
        </h1>

        <div className="flex gap-8 text-sm font-medium">
          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            Dashboard
          </a>

          <a
            href="#resume-upload"
            className="hover:text-cyan-400 transition"
          >
            Upload Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-6 py-20">

        <h2 className="text-6xl font-extrabold leading-tight max-w-5xl">
          AI-Powered Employability
          <br />
          Intelligence Platform
        </h2>

        <p className="mt-8 text-slate-300 text-xl max-w-3xl leading-relaxed">
          Analyze resumes, detect skill gaps,
          predict placement readiness,
          and empower students with AI-driven
          career intelligence.
        </p>

        {/* Status */}
        <div className="mt-6 flex items-center gap-3 text-green-400 font-semibold">

          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

          <p>
            All Backend Services Running
          </p>
        </div>

        {/* Button */}
        <button className="mt-10 bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-cyan-500/20">

          Get Started

        </button>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 w-full max-w-7xl">

          {/* Card 1 */}
          <div className="bg-slate-800/70 backdrop-blur border border-slate-700 hover:border-cyan-400 transition rounded-3xl p-10 shadow-lg">

            <FaUpload className="text-5xl text-cyan-400 mx-auto mb-6" />

            <h3 className="text-3xl font-bold">
              Resume Upload
            </h3>

            <p className="text-slate-400 mt-5 text-lg leading-relaxed">
              Upload resumes in PDF or DOC format
              for AI-powered employability analysis.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/70 backdrop-blur border border-slate-700 hover:border-cyan-400 transition rounded-3xl p-10 shadow-lg">

            <FaBrain className="text-5xl text-cyan-400 mx-auto mb-6" />

            <h3 className="text-3xl font-bold">
              Skill Gap Detection
            </h3>

            <p className="text-slate-400 mt-5 text-lg leading-relaxed">
              Compare student skills with industry
              demands and detect missing competencies instantly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800/70 backdrop-blur border border-slate-700 hover:border-cyan-400 transition rounded-3xl p-10 shadow-lg">

            <FaChartBar className="text-5xl text-cyan-400 mx-auto mb-6" />

            <h3 className="text-3xl font-bold">
              Placement Analytics
            </h3>

            <p className="text-slate-400 mt-5 text-lg leading-relaxed">
              Generate job readiness scores and
              AI-powered placement predictions with analytics.
            </p>
          </div>
        </div>

        {/* Resume Upload Section */}
        <section
          id="resume-upload"
          className="w-full mt-24"
        >
          <ResumeUpload />
        </section>

      </main>
    </div>
  );
}

export default App;