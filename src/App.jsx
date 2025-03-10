// import Accordian from "./solutions/accordian/accordian";
// import Star from "./solutions/star/star";
import ImageSlider from "./solutions/image-slider/ImageSlider";

const App = () => {
    return (
        <>
            {/* return <Accordian /> */}
            {/* <Star /> */}
            <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"1"}
                limit={"10"}
            />
        </>
    );
};

export default App;
