/* eslint-disable react/prop-types */
import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ listItem }) => {
    const [showChildren, setShowChildren] = useState({});

    const handleClick = (id) => {
        setShowChildren({
            ...showChildren,
            [id]: !showChildren[id],
        });
    };

    return (
        <div>
            <ul>
                <div className="menu-Item-2">
                    <p>{listItem.label}</p>
                    {listItem &&
                    listItem.children &&
                    listItem.children.length ? (
                        <span onClick={() => handleClick(listItem.label)}>
                            +
                        </span>
                    ) : null}
                </div>
                {listItem &&
                listItem.children &&
                showChildren[listItem.label] ? (
                    <MenuList list={listItem.children} />
                ) : null}
            </ul>
        </div>
    );
};

export default MenuItem;
