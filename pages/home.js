import React, { useRef } from "react";

function AccessComponentByReference() {

    const elementRef = useRef(null);

    var borderOnMouseHover = function() {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        elementRef.current.style.color = hue;
        
    }

    var removeBorderOnMouseHover = function() {
    }
 
    return (
        <div>
            <h1 onMouseOut={removeBorderOnMouseHover} ref={elementRef} onMouseOver={borderOnMouseHover}>Hello World</h1>
        </div>
    )
}

export default AccessComponentByReference;