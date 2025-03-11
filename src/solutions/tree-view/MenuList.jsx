/* eslint-disable react/jsx-key */
import menus from "./data";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
    return (
        <>
            {list
                ? list.map((listItem) => <MenuItem listItem={listItem} />)
                : null}
        </>
    );
};

export default MenuList;
