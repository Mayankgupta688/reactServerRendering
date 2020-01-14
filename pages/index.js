import React, {useState} from "react";

var SimpleComponent = () => {
    var [inputText, setInputText] = useState("");
    var [historyData, setHistoryData] = useState([]);
    return (
        <div>
            <h1>Hello {inputText}</h1>
            <input type="text" value={inputText} onChange={(e) => {
                setInputText(e.target.value);
                setHistoryData([...historyData, e.target.value])
            }} />
            <h2>Update History:</h2>
            {historyData.map(values => <h3>{values}</h3>)}
        </div>
    )
}

export default SimpleComponent