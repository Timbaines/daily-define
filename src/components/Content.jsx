import PropTypes from "prop-types";

const Content = ({ partOfSpeech, definitions, synonyms, }) => {
    return (
        <div className="w-full md:w-3/4 py-5">
            <div className="flex flex-row items-center font-serif font-light capitalize tracking-wider">
                <p>{partOfSpeech}</p>
                <hr className="w-full ml-5 h-0.5 mx-auto bg-gray-900 border-0 rounded-sm my-6 dark:bg-gray-700" />
            </div>
            <p className="py-5 font-medium dark:text-white tracking-tight">Meaning</p>
            <ul className="list-disc px-10 space-y-2 dark:text-white">
                {definitions.map((def, index) => (
                    <li key={index}>{def.definition}</li>
                ))}
            </ul>
            {/* Synonyms Section */}
            {synonyms.length > 0 && (
                <div className="py-5 w-full md:w-3/4">
                    <p className="py-5 font-medium tracking-tight">Synonyms</p>
                    <div className="flex flex-wrap">
                        {synonyms.map((synonym, index) => (
                            <span key={index} className="mx-0.5 dark:text-white">
                                {synonym}{index !== synonyms.length - 1 && ','}

                            </span>

                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


Content.propTypes = {
    partOfSpeech: PropTypes.string.isRequired,
    definitions: PropTypes.arrayOf(
        PropTypes.shape({
            definition: PropTypes.string.isRequired,
        })
    ).isRequired,
    synonyms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Content;