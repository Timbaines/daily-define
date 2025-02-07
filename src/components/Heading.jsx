// noinspection JSValidateTypes

import { useRef } from "react";
import PropTypes from "prop-types";
import { Play } from "lucide-react";


export const Heading = ({ audioUrl, word, phonetic }) => {
    const audioRef = useRef(null);

    const handlePlayAudio = () => {
        // Safely check if the ref exists and audioUrl is provided
        if (audioRef.current && audioRef.current.play) {
            audioRef.current.play().catch((error) => {
                console.error("Audio playback failed:", error);
            });
        } else {
            console.warn("Audio element is not available or cannot be played.");
        }
    };

    return (
        <div className="flex flex-row items-center justify-between py-5">
            {/* Word and Phonetics Display */}
            <h2 className="font-bold font-serif capitalize">
                {word}
                <span className="dark:text-white block font-normal text-sm">
                    {phonetic}
                </span>
            </h2>

            {/* Play Button */}
            {audioUrl ? (
                <button
                    onClick={handlePlayAudio}
                    className="bg-white dark:bg-foreground h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full flex items-center justify-center shadow-lg"
                >
                    {/* Use the Play icon from Lucide */}
                    <Play size={28} className="text-black dark:text-dark" />
                </button>
            ) : (
                <div className="bg-white dark:bg-foreground h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm text-gray-900">N/A</span>
                </div>
            )}

            {/* Hidden Audio Element */}
            {audioUrl && <audio className="hidden" ref={audioRef} src={audioUrl} />}
        </div>

    );
};

// DEFAULT PROPS
Heading.defaultProps = {
    audioUrl: undefined, // OPTIONAL FALLBACK FOR AUDIOURL
    phonetic: "",
};


// Defining PropTypes for the Heading component
Heading.propTypes = {
    audioUrl: PropTypes.string,
    word: PropTypes.string.isRequired,
    phonetic: PropTypes.string,
};

export default Heading;
