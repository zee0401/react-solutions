import menus from "./data";
import MenuList from "./MenuList";
import "./styles.css";

const TreeView = () => {
    return <MenuList list={menus} />;
};

export default TreeView;
