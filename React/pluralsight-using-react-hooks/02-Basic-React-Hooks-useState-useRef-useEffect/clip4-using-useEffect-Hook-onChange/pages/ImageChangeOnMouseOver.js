import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";
import ButtonCustomRef from "../src/ButtonBuscomRef";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-187.jpg"
                                    secondaryImg="/static/speakers/Speaker-187.jpg"
                                    alt="" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-1124.jpg"
                                    secondaryImg="/static/speakers/Speaker-1124.jpg"
                                    alt="" />


            <ButtonCustomRef />
        </div>
    );
};

export default ImageChangeOnMouseOver;
