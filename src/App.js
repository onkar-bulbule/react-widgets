import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: "What is React?",
        content: "React is a Front end JS framework",
    },
    {
        title: "What use React?",
        content: "React is a famous JS library among devs",
    },
    {
        title: "How do you use React?",
        content: "By creating components",
    },
];

const options = [
    {
        value: "red",
        label: "The Color Red",
    },
    {
        value: "green",
        label: "The Color Green",
    },
    {
        value: "blue",
        label: "A Shade of Blue",
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;
