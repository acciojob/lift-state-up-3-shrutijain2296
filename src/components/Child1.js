import React from "react";

const Child1 = ({setSelectedOption, option}) =>{

    return(
        <div className = "child1">
            <h2>Child Component 1</h2>
            <button onClick = {() => setSelectedOption(option)}>{option}</button>
        </div>
    )
}
export default Child1;