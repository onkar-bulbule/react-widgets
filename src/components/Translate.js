import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        value: "af",
        label: "Africaans",
    },
    {
        value: "ar",
        label: "Arabic",
    },
    {
        value: "hi",
        label: "Hindi",
    },
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label="Select a language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
