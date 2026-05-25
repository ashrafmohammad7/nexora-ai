import { FaUpload, FaChartBar, FaBrain } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400">
          Nexora AI
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Dashboard</a>
          <a href="#">Upload Resume</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        
        <h2 className="text-5xl font-bold leading-tight max-w-5xl">
          AI-Powered Employability Intelligence Platform
        </h2>

        <p className="mt-6 text-slate-300 max-w-2xl text-lg">
          Analyze resumes, detect skill gaps, predict placement readiness,
          and empower students with AI-driven career intelligence.
        </p>

        <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl text-lg font-semibold">
          Get Started
        </button>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl">
          
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
            <FaUpload className="text-4xl text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">
              Resume Upload
            </h3>
            <p className="text-slate-400 mt-3">
              Upload resumes in PDF/DOC format for AI-powered analysis.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
            <FaBrain className="text-4xl text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">
              Skill Gap Detection
            </h3>
            <p className="text-slate-400 mt-3">
              Detect missing skills and compare with industry requirements.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
            <FaChartBar className="text-4xl text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">
              Placement Analytics
            </h3>
            <p className="text-slate-400 mt-3">
              Generate job readiness scores and placement predictions.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;