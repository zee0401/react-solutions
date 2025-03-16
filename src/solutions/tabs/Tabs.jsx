import { useState } from "react";
import "./style.css";

const tabData = [
    { id: 1, content: "this is 1 tab" },
    { id: 2, content: "this is 2 tab" },
    { id: 3, content: "this is 3 tab" },
];
const Tabs = () => {
    const [showTab, setShowTab] = useState([]);

    const handleClick = (id) => {
        console.log(id, "id");
        const filter = tabData.find((tab) => tab.id === id);
        setShowTab(filter);
        console.log(showTab);
    };

    return (
        <div>
            {tabData.map((tab) => (
                <button
                    className="button"
                    onClick={() => handleClick(tab.id)}
                    key={tab.id}
                >
                    tab {tab.id}
                </button>
            ))}
            <p>{showTab.content}</p>
        </div>
    );
};

export default Tabs;
