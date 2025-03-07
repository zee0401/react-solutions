import { useState } from "react";
import data from "./data";
import "./accordian-style.css";

const Accordian = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false);
    const [multiSelectData, setMultiSelectData] = useState([]);

    const handleClick = (selectedId) => {
        setSelectedItem(multiSelect ? multiSelectData : selectedId);
    };

    const handleMultiSelect = (multiId) => {
        setMultiSelectData((prevSelected) =>
            prevSelected.includes(multiId)
                ? prevSelected.filter((id) => id !== multiId)
                : [...prevSelected, multiId]
        );
    };

    return (
        <>
            <div className="container">
                <div className="accordian">
                    <button
                        className="multi"
                        onClick={() => {
                            setMultiSelect(!multiSelect);
                            setMultiSelectData([]);
                            setSelectedItem(null);
                        }}
                    >
                        {multiSelect
                            ? "Disable Multi-Select"
                            : "Enable Multi-Select"}
                    </button>

                    {data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div key={dataItem.id}>
                                <div
                                    className="heading"
                                    onClick={
                                        multiSelect
                                            ? () =>
                                                  handleMultiSelect(dataItem.id)
                                            : () => handleClick(dataItem.id)
                                    }
                                >
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>

                                {multiSelect
                                    ? multiSelectData.includes(dataItem.id) && (
                                          <div className="answer">
                                              <p>{dataItem.answer}</p>
                                          </div>
                                      )
                                    : selectedItem === dataItem.id && (
                                          <div className="answer">
                                              <p>{dataItem.answer}</p>
                                          </div>
                                      )}
                            </div>
                        ))
                    ) : (
                        <div>No data found</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Accordian;
