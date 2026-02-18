import Editor from "@monaco-editor/react";
import Select from "react-select";
import { useState } from "react";
import { useReviewStore } from "../../store/useReviewStore"
import { googleApi } from "../../services/gemini";

const languageOptions = [
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "php", label: "PHP" },
];

const EditorPanel = () => {
    const { setCode, setLanguage, setResult, setLoading, setError } = useReviewStore();

    const [language, setLocalLanguage] = useState(languageOptions[0]);
    const [code, setLocalCode] = useState("// Write your code here");

    const handleAnalyze = async () => {
        if (!code.trim()) {
            setError("Please enter code");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            setCode(code);
            setLanguage(language.value);

            const response = await googleApi(code, language.value);

            setResult(response);
        } catch (err) {
            console.error(err);
            setError("Failed to analyze code");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow h-full flex flex-col">

            {/* HEADER */}
            <div className="p-4 border-b dark:border-zinc-700">
                <div className="flex items-center justify-between mb-3">
                    <h1 className="font-semibold text-lg text-white">Code Editor</h1>
                </div>

                <Select
                    value={language}
                    onChange={(option) => setLocalLanguage(option)}
                    options={languageOptions}
                    className="text-sm"
                />
            </div>

            {/* EDITOR */}
            <div className="flex-1">
                <Editor
                    height="100%"
                    language={language.value}
                    value={code}
                    onChange={(val) => setLocalCode(val || "")}
                    theme="vs-dark"
                />
            </div>

            {/* ACTION */}
            <div className="p-4 border-t dark:border-zinc-700">
                <button
                    onClick={handleAnalyze}
                    className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg w-full"
                >
                    Analyze Code
                </button>
            </div>
        </div>
    );
};

export default EditorPanel;
