import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [response, setResponse] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a resume");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/upload-resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResponse(res.data.content_preview);

    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20">

      <div className="bg-slate-800 border-2 border-dashed border-cyan-400 rounded-2xl p-10 text-center">

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
            Selected: {fileName}
          </p>
        )}

        <button
          onClick={handleUpload}
          className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          Analyze Resume
        </button>

        {response && (
          <div className="mt-8 bg-slate-900 p-6 rounded-xl text-left">
            
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              Resume Content Preview
            </h3>

            <p className="text-slate-300 whitespace-pre-wrap">
              {response}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default ResumeUpload;