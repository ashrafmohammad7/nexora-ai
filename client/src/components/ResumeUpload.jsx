import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";

function ResumeUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-20">
      
      <div className="bg-slate-800 border-2 border-dashed border-cyan-400 rounded-2xl p-10 text-center hover:bg-slate-700 transition">
        
        <FaFileUpload className="text-5xl text-cyan-400 mx-auto mb-6" />

        <h2 className="text-3xl font-bold mb-4">
          Upload Your Resume
        </h2>

        <p className="text-slate-400 mb-6">
          Upload PDF or DOC resume for AI-powered skill analysis
        </p>

        <label className="cursor-pointer">
          <span className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
            Choose File
          </span>

          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </label>

        {fileName && (
          <p className="mt-6 text-green-400 font-medium">
            Uploaded: {fileName}
          </p>
        )}

      </div>
    </div>
  );
}

export default ResumeUpload;