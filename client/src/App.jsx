function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
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

      <main className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-bold leading-tight max-w-4xl">
          AI-Powered Employability Intelligence Platform
        </h2>

        <p className="mt-6 text-slate-300 max-w-2xl text-lg">
          Analyze resumes, detect skill gaps, predict placement readiness,
          and empower students with AI-driven career intelligence.
        </p>

        <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl text-lg font-semibold">
          Get Started
        </button>
      </main>
    </div>
  )
}

export default App