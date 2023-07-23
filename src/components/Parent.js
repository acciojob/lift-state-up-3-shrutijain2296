import React, {useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () =>{
    let [selectedOption, setSelectedOption] = useState("");

    function clickOption(){
        selectedOption;
    }

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child1 setSelectedOption = {setSelectedOption} option = "Option 1"/>
            <Child2 setSelectedOption = {setSelectedOption} option = "Option 2"/>
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}
export default Parent;