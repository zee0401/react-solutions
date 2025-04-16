// import Accordian from "./solutions/accordian/accordian";
// import Star from "./solutions/star/star";
// import ImageSlider from "./solutions/image-slider/ImageSlider";
// import LoadMore from "./solutions/load-more/load-more";

// import Cart from "./cart/Cart";
// import CartHome from "./cart/CartHome";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./cart/components/Header";
// import TicTacToe from "./solutions/tictactoe/TicTacToe";

// import TreeView from "./solutions/tree-view/TreeView";
// import Tabs from "./solutions/tabs/Tabs";
// import FileUpload from "./solutions/fileUpload/fileUpload";
import Stepper from "./solutions/stepper-form/Stepper";
import "./App.css";

const App = () => {
    return (
        <>
            {/* return <Accordian /> */}
            {/* <Star /> */}
            {/* <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"1"}
                limit={"10"}
            /> */}

            {/* <LoadMore /> */}
            {/* <TreeView /> */}
            {/* <Tabs /> */}
            {/* <TicTacToe /> */}
            {/* <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<CartHome />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter> */}
            {/* <FileUpload /> */}
            <Stepper />
        </>
    );
};

export default App;
