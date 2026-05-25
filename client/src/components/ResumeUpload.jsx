import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const [skills, setSkills] = useState([]);
  const [score, setScore] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {

    if (!file) {
      alert("Please select resume");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      const response = await axios.post(
        "http://localhost:8080/api/ai/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSkills(response.data.skills_detected);
      setScore(response.data.readiness_score);
      setPreview(response.data.content_preview);

    } catch (error) {

      console.error(error);
      alert("Resume analysis failed");
    }
  };

  return (

    <div className="w-full max-w-5xl mx-auto mt-20">

      <div className="bg-slate-800 border-2 border-dashed border-cyan-400 rounded-2xl p-10 text-center">

        <FaFileUpload className="text-5xl text-cyan-400 mx-auto mb-6" />

        <h2 className="text-3xl font-bold mb-4">
          Upload Your Resume
        </h2>

        <p className="text-slate-400 mb-6">
          AI-powered resume analysis and skill extraction
        </p>

        <label className="cursor-pointer">

          <span className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
            Choose Resume
          </span>

          <input
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={handleFileChange}
          />

        </label>

        {fileName && (

          <p className="mt-6 text-green-400 font-medium">
            Selected: {fileName}
          </p>
        )}

        <button
          onClick={handleUpload}
          className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          Analyze Resume
        </button>

      </div>

      {/* AI Results */}

      {score !== null && (

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          {/* Score Card */}

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Readiness Score
            </h3>

            <p className="text-5xl font-bold text-green-400">
              {score}%
            </p>

          </div>

          {/* Skills */}

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Skills Detected
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.map((skill, index) => (

                <span
                  key={index}
                  className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-xl"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>
      )}

      {/* Preview */}

      {preview && (

        <div className="mt-10 bg-slate-800 p-6 rounded-2xl border border-slate-700 text-left">

          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Resume Preview
          </h3>

          <p className="text-slate-300 whitespace-pre-wrap">
            {preview}
          </p>

        </div>
      )}

    </div>
  );
}

export default ResumeUpload;