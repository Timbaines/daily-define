// noinspection JSValidateTypes,JSUnresolvedReference,ExceptionCaughtLocallyJS

import { useState } from "react";
import ThemeToggle from "./components/ui/ThemeToggle";
import Heading from "./components/Heading";
import Content from "./components/Content";
import searchImg from "./assets/search.png";

import "./index.css";

function App() {
    const [word, setWord] = useState("");
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchWord = async () => {
        if (!word.trim()) {
            setError("Please enter a word to search.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setResults(null);

        try {
            const response = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`
            );

            if (!response.ok) {
                throw new Error("Word not found. Please try again.");
            }

            const data = await response.json();
            setResults(data[0]); // Only take the first result
        } catch (err) {
            setError(err.message || "An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // EXTRACT HEADING COMPONENT DETAILS
    const heading = () => {
        // GET AUDIO DETAILS
        const audio = results?.phonetics?.find((phone) => phone.audio)?.audio;

        // GET PHONETIC TEXT
        const phoneticText = results?.phonetics?.find((phone) => phone.text)?.text || "";

        return {
            audioUrl: audio || "",
            word: results?.word || "",
            phonetic: phoneticText,
        };
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            {/* NAVIGATION */}
            <nav className="py-12 h-14 flex flex-row items-center justify-between">
                <h1 className="font-serif tracking-tight">dailyDefine</h1>
                <ThemeToggle />
            </nav>

            {/* SEARCH INPUT */}
            <div className="search-input relative py-4">
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && searchWord()}
                    className="w-full bg-white text-primary border-none outline-none rounded-lg px-4 py-4 shadow-lg"
                    placeholder="Enter a word to define..."
                />

                {/* Search Button */}
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2  px-3 py-3 rounded-lg flex items-center justify-center"
                    onClick={searchWord}
                >
                    <img src={searchImg} width={20} alt="Search Word" />
                </button>
            </div>


            {/* ERROR & LOADING MESSAGESå */}
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Display Results */}
            {results && (
                <div>
                    <Heading {...heading()} />
                    {results.meanings?.map((content, index) => (
                        <Content key={index} {...content} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;